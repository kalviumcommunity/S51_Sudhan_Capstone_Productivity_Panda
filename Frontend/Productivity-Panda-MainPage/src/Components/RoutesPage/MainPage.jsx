import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo_icon from '../../assets/images/Logo-Icon.png';
import edit_icon from "../../assets/images/Edit_fill.png";
import Log_out from '../../assets/images/Log-out.png';
import { ParentComponent } from '../ParentComponent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../CSS components/MainPageCSS.css';

function MainPage() {
  const { setIsLoggedIn } = useContext(ParentComponent);
  const navigate = useNavigate();
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showEditTaskForm, setShowEditTaskForm] = useState(false);
  const { reset, register, handleSubmit, formState: { errors } } = useForm();
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);
  const [todaysTasks, setTodaysTasks] = useState([]); // Changed name to avoid confusion

  const onSubmit = async (data) => {
    try {
      console.log('Data before sending:', data);  // Log the data being sent
      console.log('Token being sent:', localStorage.getItem('TokenizedValue'));

      const response = await axios({
        method: 'POST',
        url: 'http://localhost:8000/api/addtask',
        data: data, // Send body instead
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('TokenizedValue')}`,
          'Content-Type': 'application/json'
        },
      });

      toast.success('Task Added successfully');
      reset();
      setShowAddTaskForm(false);
      fetchTasks(); // Fetch the updated task list
      console.log("Response from backend:", response.data);
    } catch (err) {
      console.log("Error response from backend:", err.response?.data);  // Log the error response
      toast.error(`Error: ${err.response?.data?.message}`);
    }
  };

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('TokenizedValue');
      console.log('Token in fetchTasks:', token); // Log the token

      const response = await axios({
        method: 'GET',
        url: `http://localhost:8000/api/getalltask`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('There was an error fetching the tasks!', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const { todaysTasks } = categorizeTasks(tasks);
    setTodaysTasks(todaysTasks);
  }, [tasks]);

  const validateDateTime = (value) => {
    const currentDateTime = new Date();
    const selectedDateTime = new Date(value);
    if (selectedDateTime <= currentDateTime) {
      return 'Date and time must be in the future';
    }
    return true;
  };

  const toggleAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  const toggleEditTaskForm = (task) => {
    setSelectedTask({
      ...task,
      Date: task.Date ? new Date(task.Date).toISOString().slice(0, 16) : '',
      DurationHours: task.DurationHours || 0,
      DurationMinutes: task.DurationMinutes || 0
    });
    setShowEditTaskForm(true);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:8000/api/api/updatetask/${selectedTask._id}`;
    console.log('Sending PATCH request to:', url);
    console.log('Request data:', selectedTask);

    try {
      const response = await axios.patch(url, {
        selectedTask
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('TokenizedValue')}`,
          'Content-Type': 'application/json'
        }
      })

      console.log('Response:', response.data);
      setTasks((prevTasks) => prevTasks.map((task) =>
        task._id === selectedTask._id ? response.data : task
      ));
      setShowEditTaskForm(false);
      toast.success("Successfully updated the task");
    } catch (error) {
      console.error("Error updating task:", error);
      if (error.response) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      toast.error(`Error updating task: ${error.response?.data?.message || error.message || 'Unknown error'}`);
    }
  };

  const handleCancelChange = () => {
    reset();
  };

  const handleLogoutButton = () => {
    localStorage.removeItem('TokenizedValue');
    navigate('/');
    setIsLoggedIn(false);
    window.location.reload();
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/api/deletetasks/${taskId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('TokenizedValue')}` }
      });
      fetchTasks(); // Refresh the task list
      toast.success('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Error deleting task');
    }
  };


  const handleCheckboxClick = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId);
    }
  };

  const categorizeTasks = (tasks) => {
    const today = new Date().toISOString().split('T')[0];
    const mustDoTasks = tasks.filter(task => task && task.Status === 'Must do' && task.Date >= today);
    const awaitingTasks = tasks.filter(task => task && task.Status === 'Awaiting' && task.Date >= today);
    const pendingTasks = tasks.filter(task => task && task.Status === 'Pending' && task.Date >= today);
    const overdueTasks = tasks.filter(task => task && task.Date < today && task.Status !== 'Completed');

    // Define today's tasks
    const todaysTasks = [
      ...tasks.filter(task => task && task.Date === today && task.Status === 'Must do'),
      ...tasks.filter(task => task && task.Date === today && task.Status === 'Awaiting'),
      ...tasks.filter(task => task && task.Date === today && task.Status === 'Pending'),
      ...overdueTasks.filter(task => task.Status === 'Must do'),
      ...overdueTasks.filter(task => task.Status === 'Awaiting'),
      ...overdueTasks.filter(task => task.Status === 'Pending')
    ];

    return { mustDoTasks, awaitingTasks, pendingTasks, todaysTasks };
  };

  const formatDuration = (hours, minutes) => {
    if (hours === 0 && minutes > 0) {
      return `${minutes}mins`;
    }
    if (hours > 0 && minutes === 0) {
      return `${hours}hr`;
    }
    if (hours > 0 && minutes > 0) {
      return `${hours}hr ${minutes}mins`;
    }
    return '';
  };

  const renderTask = (task) => {
    let taskClassName = '';
    let taskDescriptionClass = 'task-description';

    // Determine the className based on the status
    switch (task.Status) {
      case 'Must do':
        taskClassName = 'must-do-task';
        break;
      case 'Awaiting':
        taskClassName = 'awaiting-task';
        break;
      case 'Pending':
        taskClassName = 'pending-task';
        break;
      default:
        taskClassName = '';
        break;
    }

    // If the task is today’s task, add the 'today-task' class
    if (todaysTasks.includes(task)) {
      taskClassName += ` today-task`;
    }

    return (
      <div key={task._id} className={`task-card ${taskClassName}`}>
        <div className='task_eventname_container'>
          <div></div>
          <p className='taskContainer_eventname'>{task.EventName.length > 25 ? `${task.EventName.substring(0, 20)}...` : task.EventName}</p>
          <img src={edit_icon} alt="edit_icon" onClick={() => toggleEditTaskForm(task)} />
        </div>
        <div className='task_description_container'>
          <input type="checkbox" onChange={() => handleCheckboxClick(task._id)} />
          <p className={taskDescriptionClass}>{task.Description.length > 50 ? `${task.Description.substring(0, 35)}...` : task.Description}</p>
        </div>
        <p className='duration_paragraph_tag'>Task Duration: {formatDuration(task.DurationHours, task.DurationMinutes)}</p>
      </div>
    );
  };

  const { mustDoTasks, awaitingTasks, pendingTasks } = categorizeTasks(tasks);

  
  return (
    <>
      <ToastContainer />
      <div className='overall-container-div'>
        <div className='side-vertical-navigation-container'>
          <div className='ProductivityPandaImage'>
            <img src={logo_icon} alt="Logo" />
          </div>
          <div className="log-out" onClick={handleLogoutButton}>
            <img src={Log_out} alt="Log-outIcon" style={{ width: "35px", height: "35px", cursor: "pointer" }} />
          </div>
        </div>
        <div className='content-mainpage-container'>
          <div className='horizontal-line'></div>
            <div className='Add-task-Container' onClick={toggleAddTaskForm}>
              <lord-icon
                src="https://cdn.lordicon.com/hqymfzvj.json"
                trigger="hover"
                style={{ width: '40px', height: '40px' }}>
              </lord-icon>
              <span className="tooltiptext">Add task</span>
          </div>
          <div className="task-container">
            <div className="task-column">
              <h3>Must Do</h3>
              {mustDoTasks.slice(0, 4).map(renderTask)}
            </div>
            <div className="task-column-two">
              <h3>Awaiting</h3>
              {awaitingTasks.slice(0, 4).map(renderTask)}
            </div>
            <div className="task-column">
              <h3>Pending</h3>
              {pendingTasks.slice(0, 4).map(renderTask)}
            </div>
            <div className="task-column-todays-column">
              <h2>Today's Task</h2>
              {todaysTasks.slice(0, 4).map(renderTask)}
            </div>
          </div>

        </div>
      </div>
      {showAddTaskForm && (
        <form className='add-task-form-container' onSubmit={handleSubmit(onSubmit)}>
          <div className='Cross-lordIcon-and-Heading-of-Add-Task-Form-Container'>
            <div className='headin-of-add-task-container'><p>Add task form</p></div>
            <div className='Cross-lordIcon' onClick={toggleAddTaskForm}>
              <lord-icon
                src="https://cdn.lordicon.com/nqtddedc.json"
                trigger="hover"
                style={{ width: "40px", height: "40px" }}>
              </lord-icon>
            </div>
          </div>
          <div className='Event-adding-Event-input-field'>
            <label className="Event-adding-task-label" htmlFor="EventName">Event Name</label>
            <input
              className="Event-adding-task-input"
              type="text"
              {...register("EventName", {
                required: "Event name is required",
                maxLength: { value: 50, message: "Event should be less than 50 characters" }
              })}
            />
            {errors.EventName && <p className='error-message'>{errors.EventName.message}</p>}
          </div>
          <div className='Event-adding-Event-description-input-field'>
            <label className="Event-adding-task-Description-label" htmlFor="description">Description</label>
            <textarea
              className="Event-adding-task-Description-input"
              {...register("Description", {
                required: "Description field is required",
                maxLength: { value: 200, message: "Description should be less than 200 characters" }
              })}
            />
            {errors.Description && <p className='error-message'>{errors.Description.message}</p>}
          </div>
          <div className='Event-adding-Event-date-and-time-field'>
            <div className='Event-adding-Event-date-input-field'>
              <label className="Event-adding-task-Date-label" htmlFor="date">Date </label>
              <input
                className="Event-adding-task-Date-input"
                type="datetime-local"
                {...register("Date", {
                  required: "Date is required",
                  validate: validateDateTime
                })}
              />
              {errors.Date && <p className='error-message'>{errors.Date.message}</p>}
            </div>
          </div>
          <div className='Event-adding-Event-status-dropdown-field'>
            <label className="Event-adding-task-Status-label" htmlFor="Status">Status</label>
            <select className="Event-adding-task-Status-input" {...register("Status", { required: "Status is required" })}>
              <option value="Must do">Must do</option>
              <option value="Awaiting">Awaiting</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.Status && <p className='error-message'>{errors.Status.message}</p>}
          </div>
          <div className='Event-adding-Event-task-duration-input-field'>
            <div className='Event-adding-Event-task-duration-hours-input-field'>
              <label className="Event-adding-task-task-duration-hours-label" htmlFor="DurationHours">Duration (Hours)</label>
              <input className="Event-adding-task-task-duration-hours-input" type="number" {...register("DurationHours", {
                min: { value: 0, message: "Duration hours must be greater than or equal to 0" },
                required: "Hours is required",
                valueAsNumber: true
              })} />
              {errors.DurationHours && <p className='error-message'>{errors.DurationHours.message}</p>}
            </div>
            <div className='Event-adding-Event-task-duration-minutes-input-field'>
              <label className="Event-adding-task-task-duration-minutes-label" htmlFor="DurationMinutes">Duration (Minutes)</label>
              <input className="Event-adding-task-task-duration-minutes-input" type="number" {...register("DurationMinutes", {
                min: { value: 0, message: "Duration minutes must be greater than or equal to 0" },
                required: "Minutes is required",
                valueAsNumber: true
              })} />
              {errors.DurationMinutes && <p className='error-message'>{errors.DurationMinutes.message}</p>}
            </div>
          </div>
          <div className='Event-adding-form-cancel-and-submit-button-container'>
            <button className="Event-adding-form-cancel-button" type='button' onClick={handleCancelChange}>Cancel</button>
            <button className="Event-adding-form-submit-button" type="submit">Submit</button>
          </div>
        </form>
      )}

      {showEditTaskForm && selectedTask && (
        <form className='add-task-form-container' onSubmit={handlesubmit}>
          <div className='Cross-lordIcon-and-Heading-of-Add-Task-Form-Container'>
            <div className='headin-of-add-task-container'><p>Edit task form</p></div>
            <div className='Cross-lordIcon' onClick={() => setShowEditTaskForm(false)}>
              <lord-icon
                src="https://cdn.lordicon.com/nqtddedc.json"
                trigger="hover"
                style={{ width: "40px", height: "40px" }}>
              </lord-icon>
            </div>
          </div>
          <div className='Event-adding-Event-input-field'>
            <label className="Event-adding-task-label" htmlFor="EventName">Event Name</label>
            <input
              className="Event-adding-task-input"
              type="text"
              name="EventName"
              value={selectedTask.EventName}
              onChange={(e) => setSelectedTask({ ...selectedTask, EventName: e.target.value })}
            />
          </div>
          <div className='Event-adding-Event-description-input-field'>
            <label className="Event-adding-task-Description-label" htmlFor="Description">Description</label>
            <textarea
              className="Event-adding-task-Description-input"
              name="Description"
              value={selectedTask.Description}
              onChange={(e) => setSelectedTask({ ...selectedTask, Description: e.target.value })}
            />
          </div>
          <div className='Event-adding-Event-date-and-time-field'>
            <div className='Event-adding-Event-date-input-field'>
              <label className="Event-adding-task-Date-label" htmlFor="Date">Date </label>
              <input
                className="Event-adding-task-Date-input"
                type="datetime-local"
                name="Date"
                value={new Date(selectedTask.Date).toISOString().slice(0, 16)}  // Format the date correctly
                onChange={(e) => setSelectedTask({ ...selectedTask, Date: e.target.value })}
              />
            </div>
          </div>
          <div className='Event-adding-Event-status-dropdown-field'>
            <label className="Event-adding-task-Status-label" htmlFor="Status">Status</label>
            <select
              className="Event-adding-task-Status-input"
              name="Status"
              value={selectedTask.Status}
              onChange={(e) => setSelectedTask({ ...selectedTask, Status: e.target.value })}
            >
              <option value="Must do">Must do</option>
              <option value="Awaiting">Awaiting</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className='Event-adding-Event-task-duration-input-field'>
            <div className='Event-adding-Event-task-duration-hours-input-field'>
              <label className="Event-adding-task-task-duration-hours-label" htmlFor="DurationHours">Duration (Hours)</label>

              <input
                className="Event-adding-task-task-duration-hours-input"
                type="number"
                name="DurationHours"
                value={selectedTask.DurationHours}
                onChange={(e) => setSelectedTask({ ...selectedTask, DurationHours: parseInt(e.target.value) })}
              />
            </div>
            <div className='Event-adding-Event-task-duration-minutes-input-field'>
              <label className="Event-adding-task-task-duration-minutes-label" htmlFor="DurationMinutes">Duration (Minutes)</label>
              <input
                className="Event-adding-task-task-duration-minutes-input"
                type="number"
                name="DurationMinutes"
                value={selectedTask.DurationMinutes}
                onChange={(e) => setSelectedTask({ ...selectedTask, DurationMinutes: parseInt(e.target.value) })}
              />
            </div>
          </div>
          <div className='Event-adding-form-cancel-and-submit-button-container'>
            <button className="Event-adding-form-cancel-button" type='button' onClick={() => { setShowEditTaskForm(false) }}>Cancel</button>
            <button className="Event-adding-form-submit-button" type="submit">Update</button>
          </div>
        </form>
      )}
    </>
  );
}

export default MainPage;
