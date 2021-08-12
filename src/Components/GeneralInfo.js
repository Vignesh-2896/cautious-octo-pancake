import React,{Component} from 'react';
import { InputBox, LabelBox } from './element';


class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "generalInfo">
                <h3>Personal Information</h3>
                <LabelBox name = "cv_name" labelInfo = "Name" />
                <InputBox name = "cv_name"/><br/>
                <LabelBox name = "cv_email" labelInfo = "Email Address" />
                <InputBox name = "cv_email" type = "email"/><br/>
                <LabelBox name = "cv_number" labelInfo = "Mobile Number" />
                <InputBox name = "cv_number"/><br/>
                <LabelBox name = "cv_age" labelInfo = "Age" />
                <InputBox name = "cv_age"/>
            </div>
        )
    }

}

export default GeneralInfo;