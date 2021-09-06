import React from 'react';
import { InputBox, LabelBox } from './element';


function GeneralInfo () {

    return (
        <div className = "generalInfo">
            <h3>Personal Information</h3>
            <LabelBox name = "cv_name" labelInfo = "Name" />
            <InputBox name = "cv_name"/><br/>
            <LabelBox name = "cv_email" labelInfo = "Email Address" />
            <InputBox name = "cv_email" type = "email"/><br/>
            <LabelBox name = "cv_number" labelInfo = "Mobile Number" />
            <InputBox name = "cv_number"/><br/>
            <LabelBox name = "cv_city" labelInfo = "City" />
            <InputBox name = "cv_city"/><br/>
            <LabelBox name = "cv_linkedin" labelInfo = "Linkedin Profile" />
            <InputBox name = "cv_linkedin"/><br/>
            <LabelBox name = "cv_github" labelInfo = "Github Profile" />
            <InputBox name = "cv_github"/><br/>
        </div>
    )

}

export {GeneralInfo};