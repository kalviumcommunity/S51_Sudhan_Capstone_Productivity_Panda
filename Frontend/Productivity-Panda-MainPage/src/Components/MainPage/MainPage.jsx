import React from 'react';
import '../../../src/index.css';
import ProductivityPandaImage from '../../assets/images/Productivity Panda_transparent.png';
import HomeIcons from '../../assets/images/Home 1.png'
import AddIcon from "../../assets/images/plus-square.png"
import TrashIcon from '../../assets/images/delete.png'
import Log_in from '../../assets/images/log-in-03.png'

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
      <div className='Vertical-bar'></div>
      <hr />
    </>
  );
}

export default MainPage;
