import React from 'react'
import react_icon from "../../assets/images/React js img BG.png"
import css_icon from "../../assets/images/CSS img BG.png"
import mongoDB_icon from "../../assets/images/MongoDB img BG.png";
import nodeJS_icon from "../../assets/images/Node.js img BG.png"
import expressJS_icon from "../../assets/images/Express.js img BG.png"
import websocket_icon from "../../assets/images/WebSocket img BG.png"

function TechnologiesPage() {
  return (
    <>
    <div id='Technology_Page'className='overall-div-technology-page'>
    <div className='Technologies_div'>Technologies</div>
    <div className='technology-icon-div'>
        <div className='react-icon'>
            <img src={react_icon} alt="react_icon" />
        </div>
        <div className='css-icon'>
            <img src={css_icon} alt="css_icon" />
        </div>
        <div className='mongoDB-icon'>
            <img src={mongoDB_icon} alt="mongoDB_icon" />
        </div>
        <div className='expressJS-icon'>
            <img src={expressJS_icon} alt="expressJS_icon" />
        </div>
        <div className='nodeJS_icon'>
            <img src={nodeJS_icon} alt="nodeJS_icon" />
        </div>
        <div className='websocket_icon'>
            <img src={websocket_icon} alt="websocket_icon" />
        </div>
    </div>
    </div>
    </>
  )
}

export default TechnologiesPage