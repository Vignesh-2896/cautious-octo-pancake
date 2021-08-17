import React,{Component} from 'react';
import { InputBox, LabelBox, ButtonBox, TextAreaBox } from './element';

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workList: [],
        }

        this.addForms =  this.addForms.bind(this);
        this.deleteForms = this.deleteForms.bind(this);
        this.validateYears =  this.validateYears.bind(this);
    }

    deleteForms = (e) => {
        e.preventDefault();
        let divIDRemove = e.target.parentNode.getAttribute("data-key")
        let currentStateValue = this.state.workList;
        currentStateValue = currentStateValue.filter(function(curVal){
            return curVal.key !== divIDRemove;
        });
        this.setState((state) => {
            return {workList:currentStateValue,}
        });
    }

    addForms =  (e) => {
        if(e) e.preventDefault();
        let nextWorkId = new Date().getTime();

        const divStyle = {
            borderBottom:"1px dotted black",
            width:"80%",
            marginLeft:"auto",
            marginRight:"auto",
            marginBottom:"5px",
        }

        const WorkBox = (
            <div key = {nextWorkId} data-key = {nextWorkId} className = {`workForm_${nextWorkId}`} style = {divStyle}>
                <LabelBox name = {`wrk_cpy_name_${nextWorkId}`} labelInfo = "Company Name" />
                <InputBox name = {`wrk_cpy_name_${nextWorkId}`}/><br/>
                <LabelBox name = {`wrk_designation_${nextWorkId}`} labelInfo = "Designation" />
                <InputBox name = {`wrk_designation_${nextWorkId}`} /><br/>
                <LabelBox name = {`wrk_years_from_${nextWorkId}`} labelInfo = "Years Worked" />
                <InputBox classType = "yearInput" name = {`wrk_years_from_${nextWorkId}`} placeholder = "YYYY" changeFunc = {this.validateYears} min = "1900" max = "2021"/><br/>
                <LabelBox name = {`wrk_years_to_${nextWorkId}`} labelInfo = "Years Worked" />
                <InputBox classType = "yearInput" name = {`wrk_years_to_${nextWorkId}`} placeholder = "YYYY" changeFunc = {this.validateYears} min = "1900" max = "2021"/><br/>
                <LabelBox name = {`wrk_summary_${nextWorkId}`} labelInfo = "Summary" />
                <TextAreaBox name = {`wrk_summary_${nextWorkId}`}/>
                <ButtonBox buttonInfo = "Delete" buttonAction = {this.deleteForms} />
            </div>
        );
        this.setState({
            workList: this.state.workList.concat(WorkBox),
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
            <div className = "work">
                <h3>Work Experience</h3>
                {this.state.workList.map(function(input,index){
                    return input;
                })}
                <ButtonBox buttonInfo = "Add Section" buttonAction = {this.addForms} />
            </div>
        )
    }

}

export default Work;