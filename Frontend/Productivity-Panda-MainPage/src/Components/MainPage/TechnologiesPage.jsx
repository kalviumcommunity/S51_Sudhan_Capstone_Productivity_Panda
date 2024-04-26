import React from 'react'; // Importing React library for building UI components
import react_icon from "../../assets/images/React js img BG.png"; // Importing React icon image
import css_icon from "../../assets/images/CSS img BG.png"; // Importing CSS icon image
import mongoDB_icon from "../../assets/images/MongoDB img BG.png"; // Importing MongoDB icon image
import nodeJS_icon from "../../assets/images/Node.js img BG.png"; // Importing Node.js icon image
import expressJS_icon from "../../assets/images/Express.js img BG.png"; // Importing Express.js icon image
import websocket_icon from "../../assets/images/WebSocket img BG.png"; // Importing WebSocket icon image

// Functional component for the Technologies Page
function TechnologiesPage() {
  return (
    <>
      {/* Overall div of the Technology Page */}
      <div id='Technology_Page' className='overall-div-technology-page'>
        {/* Heading for Technologies */}
        <div className='Technologies_div'>Technologies</div>
        {/* Div for displaying technology icons */}
        <div className='technology-icon-div'>
          {/* React icon */}
          <div className='react-icon'>
            <img src={react_icon} alt="react_icon" />
          </div>
          {/* CSS icon */}
          <div className='css-icon'>
            <img src={css_icon} alt="css_icon" />
          </div>
          {/* MongoDB icon */}
          <div className='mongoDB-icon'>
            <img src={mongoDB_icon} alt="mongoDB_icon" />
          </div>
          {/* Express.js icon */}
          <div className='expressJS-icon'>
            <img src={expressJS_icon} alt="expressJS_icon" />
          </div>
          {/* Node.js icon */}
          <div className='nodeJS_icon'>
            <img src={nodeJS_icon} alt="nodeJS_icon" />
          </div>
          {/* WebSocket icon */}
          <div className='websocket_icon'>
            <img src={websocket_icon} alt="websocket_icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologiesPage; // Exporting the TechnologiesPage component
