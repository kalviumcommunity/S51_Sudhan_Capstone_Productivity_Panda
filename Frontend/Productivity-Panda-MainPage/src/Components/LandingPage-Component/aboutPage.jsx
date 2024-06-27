import React from 'react'
import AboutPage_image from "../../assets/images/About Page.png"
import "../CSS components/aboutPageCSS.css"
import Task_Management_Image from "../../assets/images/Task Management container.png"
import Workshop_and_Task_boards_image from "../../assets/images/Workspace and Task Boards container.png"
import Track_with_our_checklist_image from "../../assets/images/Track with our checklist.png"
import Finish_big_jobs_faster_image from "../../assets/images/Finish big jobs faster.png"
import Task_based_key_results_image from "../../assets/images/Task Based key Results.png"
import aboutPage2_Image from "../../assets/images/about-page-2.png"
import Easy_Task_Creation_Image from "../../assets/images/Easy Task Creation Container.png"
import Simplify_Your_Daily_Routine_Image from "../../assets/images/Simplify Your Daily Routines.png"
import Android_small3 from "../../assets/images/Android Small - 3.png"
import Android_small4 from "../../assets/images/Android Small - 4.png"

function AboutPage() {
  return (
    <>
    <div className='about-page-overall-container'>
        <img src={AboutPage_image} alt="aboutpage" />
        <div className='features-container'>
            <div className='aboutPage_features_list_container'>
                <img src={Task_Management_Image} alt="Task_Management_Image" />
            </div>
            <div className='aboutPage_features_list_container'>
                <img src={Workshop_and_Task_boards_image} alt="Workshop_and_Task_boards_image" />
            </div>
            <div className='aboutPage_features_list_container'>
                <img src={Track_with_our_checklist_image} alt="Track_with_our_checklist_image" />
            </div>
            <div className='aboutPage_features_list_container'>
                <img src={Finish_big_jobs_faster_image} alt="Finish_big_jobs_faster_image" />
            </div>
            <div className='aboutPage_features_list_container'>
                <img src={Task_based_key_results_image} alt="Task_based_key_results_image" />
            </div>
        </div> 
        <div className='aboutPage2_container'>
            <img src={aboutPage2_Image} alt="aboutPage2_Image" />
            <div className='aboutPage2_inner_container'>
                <div className='heading1'><img src={Easy_Task_Creation_Image} alt="Easy_Task_Creation_Image" /></div>
                <div className='heading2'><img src={Simplify_Your_Daily_Routine_Image} alt="Simplify_Your_Daily_Routine_Image" /></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutPage