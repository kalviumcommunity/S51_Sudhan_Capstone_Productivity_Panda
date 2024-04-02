import React from 'react';
import '../../../src/index.css';
import ProductivityPandaImage from '../../assets/images/logo-productivity-panda-transparent.png';
import HomeIcons from '../../assets/images/Home 1.png'
import AddIcon from "../../assets/images/plus-square.png"
import TrashIcon from '../../assets/images/delete.png'
import Log_in from '../../assets/images/log-in-03.png'
import Arrow_Left from '../../assets/images/Arrow Left 1.png'
import Switch_Left from '../../assets/images/Swicht_Left.png'
import Bell from '../../assets/images/Bell.png'
import Arrow_Down from "../../assets/images/Arrow Down 2.png"
import calendar_Days from "../../assets/images/Calendar_Days.png"
import Vector from "../../assets/images/Vector.png"
import Calendar from "../../assets/images/Calendar.png"

function MainPage() {
  return (
    <>
      <div className='ProductivityPandaImage'>
        <img src={ProductivityPandaImage} alt="Logo" />
      </div>
      <div className='sideNavigationBar'>
        <div className='top-most-of-sideNavigation-btn'>
          <div className='addIcon'>
            <img src={AddIcon} alt="addIcon" />
            <p>Add Task</p>
          </div>
          <div className='homeIcon'>
            <img src={HomeIcons} alt="homeIcon" />
            <p>Home</p>
          </div>
        </div>
        <div className="top-down-of-sideNavigation-bar">
          <div className="trashIcon">
            <img src={TrashIcon} alt="DeleteIcon" />
            <p>Trash</p>
          </div>
          <div className="log-in">
            <img src={Log_in} alt="Log-inIcon" />
            <p>Log-in</p>
          </div>
        </div>
      </div>
      <div className='Vertical-bar'>
      </div>
      <div className='nav-bar'>
        <div className='Go-back-to-home-page'>
          <img src={Arrow_Left} alt="Go-back-to-home-page-icon" />
          <p>Home</p>
        </div>
        <div className='cover-up-div-of-top-upper-right-icons'>
          <div className='Switch-left'>
            <img src={Switch_Left} alt="Switch-left-icon" />
          </div>
          <div className='Bell'>
            <img src={Bell} alt="Bell-icon" />
          </div>
          <div className='Profile'>
            <div className='Profile-icon'></div>
          </div>
        </div>
      </div>
      <div className='mainPage-content'>
      <div className='taskStatusContainer'>
        <div className='TotalTasksElement'>
          <p className='placeholder-name'>Total Tasks</p>
          <p className='placeholder-number'>0</p>
        </div>
        <div className='DueTasksElement'>
          <p className='placeholder-name'>Due Tasks</p>
          <p className='placeholder-number'>0</p>
        </div>
        <div className='InProgressTasks'>
          <p className='placeholder-name'>InProgression Tasks</p>
          <p className='placeholder-number'>0</p>
        </div>
        <div className='CancelledTasksElement'>
          <p className='placeholder-name'>Cancelled Tasks</p>
          <p className='placeholder-number'>0</p>
        </div>
        <div className='AssignedTasksElement'>
          <p className='placeholder-name'>AssignedTasks</p>
          <p className='placeholder-number'>0</p>
        </div>
      </div>
      <div className='UpcomingTasksContainer'>
        <div className='upComingTasks'>
        <img src={calendar_Days} alt="Calendar-icon" style={{backgroundColor: 'white', borderColor:"#0F1035",borderWidth:"2px", borderStyle:"solid", borderRadius:"8px" }} />
          <p>Upcoming Tasks</p>
        </div>
        <div className='UpcomingTaskDisplayerContainer'></div>
        <div className='UpcomingTaskDisplayerContainer'></div>
        <div className='ShowMoreLabel'>
          <p>Show More</p>
          <img src={Arrow_Down} alt="Show-more-icon" />
        </div>
      </div>
      <div className='TodaysTaskContainer'>
        <div className='TodaysTask'>
          <img src={Calendar} alt="Calendar" />
          <p>Today's Task</p>
        </div>
        <div className='border-bottom-line'></div>
        <div className='TodaysTaskRow'>
          <p className='hashp1'>12</p>
          <p className='Tasknamep2'>Taskname</p>
          <p className='Priorityp3'>Priority</p>
          <p className='Statusp4'>Status</p>
          <p className='Deadlinep5'>Deadline</p>
        </div>
        <div className='border-bottom-line'></div>
        <div className='TodaysTaskRow2'>
          <img src={Vector} alt="checker-dot" className='vector'/>
        </div>
        <div className='border-bottom-line'></div>
        <div className='TodaysTaskRow3'>
          <img src={Vector} alt="checker-dot" className='vector'/>
        </div>
        <div className='border-bottom-line'></div>
        <div className='TodaysTaskRow4'>
          <img src={Vector} alt="checker-dot" className='vector'/>
        </div>
        <div className='border-bottom-line'></div>
      </div>
      </div>
    </>
  );
}

export default MainPage;
