import React from 'react';
import '../../../src/index.css';
import ProductivityPandaImage from '../../assets/images/Productivity Panda_transparent.png';
import HomeIcons from '../../assets/images/Home 1.png'
import AddIcon from "../../assets/images/plus-square.png"
import TrashIcon from '../../assets/images/delete.png'
import Log_in from '../../assets/images/log-in-03.png'
import Arrow_Left from '../../assets/images/Arrow Left 1.png'
import Switch_Left from '../../assets/images/Swicht_Left.png'
import Bell from '../../assets/images/Bell.png'

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
        <div className='Arrow-left'>
          <img src={Arrow_Left} alt="Arrow-left-icon" />
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
    </>
  );
}

export default MainPage;
