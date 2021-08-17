import React,{Component} from 'react';
import { InputBox, LabelBox, ButtonBox } from './element';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationFormList: [],
        }

        this.addForms =  this.addForms.bind(this);
        this.deleteForms = this.deleteForms.bind(this);
        this.validateYears =  this.validateYears.bind(this);
    }

    deleteForms = (e) => {
        e.preventDefault();
        let divIDRemove = e.target.parentNode.getAttribute("data-key")
        let currentStateValue = this.state.educationFormList;
        currentStateValue = currentStateValue.filter(function(curVal){
            return curVal.key !== divIDRemove;
        });
        this.setState((state) => {
            return {educationFormList:currentStateValue,}
        });
        
    }

    addForms =  (e) => {
        if(e) e.preventDefault();
        let nextEducationId = new Date().getTime();

        const divStyle = {
            borderBottom:"1px dotted black",
            width:"80%",
            marginLeft:"auto",
            marginRight:"auto",
            marginBottom:"5px",
        }

        const EducationBox = (
            <div key = {nextEducationId} data-key = {nextEducationId} className = {`educationForm_${nextEducationId}`} style = {divStyle}>
                <LabelBox name = {`cv_ins_${nextEducationId}`} labelInfo = "Institution Name" />
                <InputBox name = {`cv_ins_${nextEducationId}`}/><br/>
                <LabelBox name = {`cv_spcz_${nextEducationId}`} labelInfo = "Specialization" />
                <InputBox name = {`cv_spcz_${nextEducationId}`} type = "email"/><br/>
                <LabelBox name = {`cv_years_from_${nextEducationId}`} labelInfo = "Years of Study " />   
                <InputBox classType = "yearInput" name = {`cv_years_from_${nextEducationId}`} placeholder = "YYYY" changeFunc = {this.validateYears} min = "1900" max = "2021" /><br/>
                <LabelBox name = {`cv_years_to_${nextEducationId}`} labelInfo = "To" />    
                <InputBox classType = "yearInput" name = {`cv_years_to_${nextEducationId}`} placeholder = "YYYY" changeFunc = {this.validateYears} /><br/>
                <LabelBox name = {`cv_grade_${nextEducationId}`} labelInfo = "GPA/Percentage" />
                <InputBox name = {`cv_grade_${nextEducationId}`}/>
                <ButtonBox buttonInfo = "Delete" buttonAction = {this.deleteForms} />
            </div>
        );
        this.setState({
            educationFormList: this.state.educationFormList.concat(EducationBox),
        })
    }  

    validateYears = (e) => {
        let valueEntered = e.target.value;
        if(valueEntered && (isNaN(valueEntered) === true || valueEntered.length > 4 || valueEntered.length < 4)){
            alert("Please enter a 4 digit numeric value for the year.")
            e.target.value = ""; e.target.focus();
        }
    }

    render() {

        return (
            <div className = "education">
                <h3>Educational Information</h3>
                {this.state.educationFormList.map(function(input,index){
                    return input;
                })}
                <ButtonBox buttonInfo = "Add Section" buttonAction = {this.addForms} />
            </div>
        )
    }

}

export default Education;