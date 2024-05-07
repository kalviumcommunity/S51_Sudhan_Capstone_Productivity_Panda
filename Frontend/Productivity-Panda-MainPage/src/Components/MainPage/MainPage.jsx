import React, { useState } from 'react'; // Importing React library for building UI components
import ProductivityPandaImage from '../../assets/images/logo-productivity-panda-transparent.png'; // Importing Productivity Panda logo image
import HomeIcons from '../../assets/images/Home 1.png'; // Importing home icon image
import AddIcon from "../../assets/images/plus-square.png"; // Importing add icon image
import TrashIcon from '../../assets/images/delete.png'; // Importing trash icon image
import Log_in from '../../assets/images/log-in-03.png'; // Importing login icon image
import Arrow_Left from '../../assets/images/Arrow Left 1.png'; // Importing arrow left icon image
import Switch_Left from '../../assets/images/Swicht_Left.png'; // Importing switch left icon image
import Bell from '../../assets/images/Bell.png'; // Importing bell icon image
import Arrow_Down from "../../assets/images/Arrow Down 2.png"; // Importing arrow down icon image
import calendar_Days from "../../assets/images/Calendar_Days.png"; // Importing calendar days icon image
import Vector from "../../assets/images/Vector.png"; // Importing vector icon image
import Calendar from "../../assets/images/Calendar.png"; // Importing calendar icon image
import logo_icon from "../../assets/images/Logo-Icon.png"; // Importing Logo icon image
import High_Priority from "../../assets/images/Group_1-removebg-preview.png"
// Functional component for the Main Page
function MainPage(props) {
  const userLogin = props.location && props.location.state && props.location.state.userLogin;

  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  const toggleAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
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
      {showAddTaskForm && (
        <div className="add-task-form-container">
          <div className='Cross-lordIcon-and-Heading-of-Add-Task-Form-Container'>
            <div className='headin-of-add-task-container'><h1>Add task form</h1></div>
            <div className='Cross-lordIcon' onClick={toggleAddTaskForm}>
              <lord-icon
                src="https://cdn.lordicon.com/nqtddedc.json"
                trigger="hover"
                style={{ width: "40px", height: "40px" }}>
              </lord-icon>
            </div>
          </div>
          <form>
            <label className="Event-adding-task-label" htmlFor="event">Event:</label>
            <input className="Event-adding-task-input" type="text"/>

            <label className="Event-adding-task-Description-label" htmlFor="description">Description:</label>
            <input className="Event-adding-task-Description-input" type="text" />

            <label className="Event-adding-task-Date-label" htmlFor="date">Date: </label>
            <input className="Event-adding-task-Date-input" type="date" />
            
            <label className="Event-adding-task-time-label" htmlFor="time">Time: </label>
            <input className="Event-adding-task-time-input" type="date" />

            <label className="Event-adding-task-status-label" for="status">Status:</label>
            <select name="Intial status" id="status">
              <option value="To-do">To-do</option>
              <option value="Paused">Paused</option>
              <option value="In-Progress">In-Progress</option>
            </select>

            <label className='Event-adding-task-priority-label' for="Priority">Priority: </label>
            <select name="priority" id="Priority">
              <optgroup label='High'>
                <option value="High">High</option>
                </optgroup>
                <optgroup label='Medium'>
                <option value="Medium">Medium</option>
                </optgroup>
                <optgroup label='Low'>
                  <option value="Low">Low</option>
                </optgroup>
            </select>

            <button>Cancel</button>
            <button>Add Event</button>
          </form>
        </div>
      )}
    </>
  );
}

export default MainPage; // Exporting the MainPage component

