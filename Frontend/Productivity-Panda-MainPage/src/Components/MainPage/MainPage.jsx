import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo_icon from '../../assets/images/Logo-Icon.png';
import Log_in from '../../assets/images/log-in-03.png';
import Arrow_Left from '../../assets/images/Arrow Left 1.png';
import calendar_Days from '../../assets/images/Calendar_Days.png';
import Arrow_Down from '../../assets/images/Arrow Down 2.png';
import Vector from '../../assets/images/Vector.png';
import Calendar from '../../assets/images/Calendar.png';

function MainPage(props) {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const { resetField, register, handleSubmit, formState: { errors } } = useForm();

  // Checking if userLogin exists in props and setting it to userLogin, otherwise setting it to undefined
  const userLogin = props.location && props.location.state && props.location.state.userLogin;

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  const toggleAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  const handleCancelChange = () => {
    resetField("event")
    resetField("description")
    resetField("date")
    resetField("time")
  };

  return (
    <>
      {/* Productivity Panda logo */}
      <div className='ProductivityPandaImage'>
        <img src={logo_icon} alt="Logo" />
      </div>
      {/* Side navigation bar */}
      <div className='sideNavigationBar'>
        <div className="top-down-of-sideNavigation-bar">
          {/* Trash icon */}
          <div className="trashIcon">
            {/* Lord icon for trash */}
            <lord-icon
              src="https://cdn.lordicon.com/skkahier.json"
              trigger="hover"
              style={{ width: '40px', height: '40px' }}>
            </lord-icon>
          </div>
          {/* Login icon */}
          <div className="log-in">
            <img src={Log_in} alt="Log-inIcon" style={{ width: "35px", height: "35px" }} />
          </div>
        </div>
      </div>
      {/* Vertical bar */}
      <div className='Vertical-bar'>
      </div>
      {/* Navigation bar */}
      <div className='nav-bar'>
        <div className='Go-back-to-home-page'>
          {/* Go back to home page icon */}
          <img src={Arrow_Left} alt="Go-back-to-home-page-icon" />
          <p>Home</p>
        </div>
        <div className='cover-up-div-of-top-upper-right-icons'>
          {/* Add task container */}
          <div className='Add-task-Container' onClick={toggleAddTaskForm}>
            {/* Lord icon for add task */}
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              style={{ width: '40px', height: '40px' }}>
            </lord-icon>
            <span className="tooltiptext">Add task</span>
          </div>
        </div>
      </div>
      {/* Main page content */}
      <div className='mainPage-content'>
        {/* Task status container */}
        <div className='taskStatusContainer'>
          {/* Total tasks element */}
          <div className='TotalTasksElement'>
            <p className='placeholder-name'>Total Tasks</p>
            <p className='placeholder-number'>0</p>
          </div>
          {/* Due tasks element */}
          <div className='DueTasksElement'>
            <p className='placeholder-name'>Due Tasks</p>
            <p className='placeholder-number'>0</p>
          </div>
          {/* In-progress tasks element */}
          <div className='InProgressTasks'>
            <p className='placeholder-name'>InProgression Tasks</p>
            <p className='placeholder-number'>0</p>
          </div>
          {/* Cancelled tasks element */}
          <div className='CancelledTasksElement'>
            <p className='placeholder-name'>Cancelled Tasks</p>
            <p className='placeholder-number'>0</p>
          </div>
          {/* Assigned tasks element */}
          <div className='AssignedTasksElement'>
            <p className='placeholder-name'>AssignedTasks</p>
            <p className='placeholder-number'>0</p>
          </div>
        </div>
        {/* Upcoming tasks container */}
        <div className='UpcomingTasksContainer'>
          <div className='upComingTasks'>
            {/* Calendar icon */}
            <img src={calendar_Days} alt="Calendar-icon" style={{ backgroundColor: 'white', borderColor: "#0F1035", borderWidth: "2px", borderStyle: "solid", borderRadius: "8px" }} />
            <p>Upcoming Tasks</p>
          </div>
          <div className='UpcomingTaskDisplayerContainer'></div>
          <div className='UpcomingTaskDisplayerContainer'></div>
          <div className='ShowMoreLabel'>
            <p>Show More</p>
            {/* Arrow down icon */}
            <img src={Arrow_Down} alt="Show-more-icon" />
          </div>
        </div>
        {/* Today's tasks container */}
        <div className='TodaysTaskContainer'>
          <div className='TodaysTask'>
            {/* Calendar icon */}
            <img src={Calendar} alt="Calendar" />
            <p>Today's Task</p>
          </div>
          <div className='border-bottom-line'></div>
          <div className='TodaysTaskRow'>
            <p className='hashp1'>#</p>
            <p className='Tasknamep2'>Taskname</p>
            <p className='Priorityp3'>Priority</p>
            <p className='Statusp4'>Status</p>
            <p className='Deadlinep5'>Deadline</p>
          </div>
          <div className='border-bottom-line'></div>
          <div className='TodaysTaskRow2'>
            <img src={Vector} alt="checker-dot" className='vector' />
          </div>
          <div className='border-bottom-line'></div>
          <div className='TodaysTaskRow3'>
            <img src={Vector} alt="checker-dot" className='vector' />
          </div>
          <div className='border-bottom-line'></div>
          <div className='TodaysTaskRow4'>
            <img src={Vector} alt="checker-dot" className='vector' />
          </div>
          <div className='border-bottom-line'></div>
        </div>
      </div>
      {/* Add task form */}
      {showAddTaskForm && (<form className='add-task-form-container' onSubmit={handleSubmit(onSubmit)}>
        <div className='Cross-lordIcon-and-Heading-of-Add-Task-Form-Container'>
          <div className='headin-of-add-task-container'><p>Add task form</p></div>
          <div className='Cross-lordIcon' onClick={toggleAddTaskForm}>
            {/* Lord icon for cross */}
            <lord-icon
              src="https://cdn.lordicon.com/nqtddedc.json"
              trigger="hover"
              style={{ width: "40px", height: "40px" }}>
            </lord-icon>
          </div>
        </div>
        <div className='Event-adding-Event-input-field'>
          <label className="Event-adding-task-label" htmlFor="event">Event Name</label>
          <input
            className="Event-adding-task-input"
            type="text"
            {...register("event", { required: "Event name is required", maxLength: { value: 30, message: "Event should be less than 30 characters" } })}
          />
          {errors.event && <p className='error-message'>{errors.event.message}</p>}
        </div>
        <div className='Event-adding-Event-description-input-field'>
          <label className="Event-adding-task-Description-label" htmlFor="description">Description</label>
          <textarea
            className="Event-adding-task-Description-input"
            type="text"
            {...register("description", { required: "Description field is required", maxLength: { value: 60, message: "Description should be less than 60 characters" } })}
          />
          {errors.description && <p className='error-message'>{errors.description.message}</p>}
        </div>
        <div className='Event-adding-Event-date-and-time-field'>
          <div className='Event-adding-Event-date-input-field'>
            <label className="Event-adding-task-Date-label" htmlFor="date">Date </label>
            <input className="Event-adding-task-Date-input" type="date" {...register("date", { required: "Date is required" })} />
            {errors.date && <p className='error-message'>{errors.date.message}</p>}
          </div>
          <div className='Event-adding-Event-time-input-field'>
            <label className="Event-adding-task-time-label" htmlFor="time">Time </label>
            <input className="Event-adding-task-time-input" type="time" {...register("time", { required: "Time is required" })} />
            {errors.time && <p className='error-message'>{errors.time.message}</p>}
          </div>
        </div>
        <div className='Event-adding-status-and-priority-field'>
          <div className='Event-adding-task-status-field'>
            <label className="Event-adding-task-status-label" htmlFor="status">Status</label>
            <select name="Intial status" id="status">
              <option value="To-do">To-do</option>
              <option value="Paused">Paused</option>
              <option value="In-Progress">In-Progress</option>
            </select>
          </div>
          <div className='Event-adding-task-priority-field'>
            <label className='Event-adding-task-priority-label' for="Priority">Priority</label>
            <select name="priority" id="Priority">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <div className='Cancel-Button-and-Add-event-Button'>
          <button type="button" className='Cancel-Button' onClick={handleCancelChange}>Erase</button>
          <button type="submit" className='Add-event-Ok-button'>Add Event</button>
        </div>
      </form>)}
    </>
  );
}

export default MainPage;
