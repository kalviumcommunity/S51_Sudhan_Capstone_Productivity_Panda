import React from 'react'
import "../../CSS components/FeaturesPageCSS.css"
import FeaturesPage1_Image from "../../assets/images/FeaturesPage.png"
import quick_task_creation_Image from "../../assets/images/Quick Task Addition container.png"
import The_Key_benefits_of_mesiter_Image from "../../assets/images/The Key benefit of Meister Task Container.png"
import Simplify_daily_task_Image from "../../assets/images/Simplify Your Daily Routines container.png"
import Get_Improved_workflow_Image from "../../assets/images/Get Improved WorkLoad Insights Contaier.png"
import FeaturesPage2_Image from "../../assets/images/FeaturesPage3.png"
import send_btn_image from "../../assets/images/Send Btn.png"

function FeaturesPage() {
    return (
        <>
            <div>
                <div className='featuresPage1'>
                    <img src={FeaturesPage1_Image} alt="FeaturesPage1_Image" />
                    <div className='FeaturesPage_Icon_Container'>
                        <div className='FeaturesPage1_Image_container'>
                            <img src={quick_task_creation_Image} alt="quick_task_creation_Image" />
                        </div>
                        <div className='FeaturesPage1_Image_container'>
                            <img src={The_Key_benefits_of_mesiter_Image} alt="The_Key_benefits_of_mesiter_Image" />
                        </div>
                        <div className='FeaturesPage1_Image_container'>
                            <img src={Simplify_daily_task_Image} alt="Simplify_daily_task_Image" />
                        </div>
                        <div className='FeaturesPage1_Image_container'>
                            <img src={Get_Improved_workflow_Image} alt="Get_Improved_workflow_Image" />
                        </div>
                    </div>
                    <button className='letsstartedButton'>Let's Start</button>
                </div>
                <div className='featuresPage2'>
                        <img src={FeaturesPage2_Image} alt="FeaturesPage2_Image" />
                        <div className='newsletter_container'>
                            <input type="text" placeholder='Email Address' />
                                <img src={send_btn_image} alt="send_btn_image" />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default FeaturesPage