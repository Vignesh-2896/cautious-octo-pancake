import React,{Component} from 'react';
import { ButtonBox } from './element';
import { RenderPDF } from './RenderPDF';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import Sample from "../assets/sample.txt"

class CVActions extends Component{
    constructor(props){
        super(props);

        this.clearCV = this.clearCV.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.sampleData = this.sampleData.bind(this);
    }

    async sampleData(e){            // Function to input sample data into all the fields.
        if (e) e.preventDefault();
        let response = await fetch(Sample);
        response = await response.text();
        response =  response.split("\n");
        let inputList = document.getElementsByTagName("input");
        let textArea = document.getElementsByTagName("textarea");
        let currentInputType = "", inputCtr = 0;
        for(let i = 0; i< response.length; i++){        // Iterating with all the sample data.
            if(!currentInputType || response[i] === ""){    
                if(response[i] === ""){
                    currentInputType = "";
                    continue;
                }
                else if(response[i] === "Work Description") currentInputType = "SameBox"
                else currentInputType = "NextBox"
            } else {
                if(currentInputType === "NextBox"){ 
                    inputList[inputCtr].value = response[i];
                    inputCtr++ ;
                } else{
                    textArea[0].value += response[i] + "\n";    // For the textarea box, multiple lines will be added to same field.
                }
            }
        }

        let temp = textArea[0].value.split("\n")
        temp.pop();
        textArea[0].value = temp.join("\n");
    }

    clearCV(e){ // Clear all input fields.
        if (e) e.preventDefault();
        let inputList = document.getElementsByTagName("input")
        for(let i = 0; i < inputList.length; i++) inputList[i].value = "";
        document.getElementsByTagName("textarea")[0].value = "";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        alert("Manually added sections can be removed using their respective Delete buttons.")
    }

    async fetchData(e){ // Function to generate PDF based on form inputs.
        if(document.getElementById("cv_form").checkValidity()){
            e.preventDefault();
            let pdfname = document.getElementsByName("cv_name");
            const newPdf = await pdf(RenderPDF());
            newPdf.updateContainer(RenderPDF())
            const result = await newPdf.toBlob();

            saveAs(result, `${pdfname[0].value}.pdf`);
        }
    }

    render(){

        const divStyle = {
            margin:"30px auto 20px auto",
            textAlign:"center",
        }

        return (
            <div style = {divStyle} id = "cvActions">
                <h3>CV Form Actions</h3>
                <ButtonBox buttonInfo = "Clear" buttonAction = {this.clearCV}/>
                <ButtonBox buttonInfo = "Sample Data" buttonAction = {this.sampleData}/>
                <ButtonBox buttonInfo = "Generate" buttonAction = {this.fetchData}/>
            </div>
        )
    }

}

export default CVActions;