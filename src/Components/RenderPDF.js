import React from 'react';
import {Document, Page, View, Text, StyleSheet, Link, Font, Image } from '@react-pdf/renderer';
import arialBondSrc from "../assets/FontsFree-Net-arial-bold.ttf"
import bulletPoint from "../assets/icons8-360-degrees-24.png"

function RenderPDF(){

  Font.register({family:"Arial Bold",src: arialBondSrc}) 

  const styles = StyleSheet.create({
    viewSection:{margin:10,padding:5},
    page : {margin:5,padding:5,fontSize:"14px"},
    view : {marginTop:15,padding:5},
    heading: {color:"green",fontSize:"16px"},
    boldOnly:{fontFamily:"Arial Bold"},
    bullet : {height:"8px"}
  })

  let generalInput = Array.from(document.getElementsByClassName("generalInfo")[0].getElementsByTagName("input"));
  let skillInput = Array.from(document.getElementsByClassName("skills")[0].getElementsByTagName("input"));
  let educationInput = Array.from(document.getElementsByClassName("education")[0].getElementsByTagName("input"));
  let experienceInput = Array.from(document.getElementsByClassName("work")[0].getElementsByTagName("input"));
  let textAreaInput = Array.from(document.getElementsByClassName("work")[0].getElementsByTagName("textarea"))
  let interestInput = Array.from(document.getElementsByClassName("interests")[0].getElementsByTagName("input"));

// Fetching and inserting data from General Information Form into Text Boxes.
  let generalSection = [];
  generalInput.forEach(function(item){
    if(item.name === "cv_email") generalSection.push(<Text key = {item.name}><Link  style = {{color:"#DB4437"}} src = {`mailto:${item.value}`} >Email</Link></Text>)
    else if(item.name === "cv_linkedin") generalSection.push(<Text style = {{color:"#0077b5"}} key = {item.name}><Link src = {item.value} >LinkedIn</Link></Text>)
    else if(item.name === "cv_github") generalSection.push(<Text style = {{color:"#333"}} key = {item.name}><Link src = {item.value} >Github</Link></Text>)
    else if(item.name === "cv_name") generalSection.push(<Text style = {{fontSize:"24px"}} key = {item.name}><Link src = {item.value} >{item.value}</Link></Text>)
    else generalSection.push(<Text key = {item.name}>{item.value}</Text>)
  })

// Fetching and inserting data from Education Information Form into Text Boxes.  
  let educationUnits = [];
  educationInput.forEach(function(item){
    if(item.name.startsWith("cv_ins_")) educationUnits.push(<Text style = {styles.boldOnly} key = {item.name}>{item.value}</Text>)
    else if(item.name.startsWith("cv_degree_")) educationUnits.push(<Text style = {{color:"#333"}} key = {item.name}>{item.value}</Text>)
    else educationUnits.push(<Text key = {item.name}>{item.value}</Text>)
  })

// Inserting each section of Education Information Form into separate Views. 
  let educationSection = []
  for(let i = 0; i<educationUnits.length; i+=6){
    educationSection.push(
      <View style = {styles.viewSection}>
        <Text>{educationUnits[i]} - {educationUnits[i+1]}</Text>
        <Text>{educationUnits[i+3]} - {educationUnits[i+4]}</Text>
        <Text>Degree in {educationUnits[i+2]} with an overall aggregate of {educationUnits[i+5]}</Text>
      </View>
      )
  }

  let tempList = [];
  let textAreaSize = []
  textAreaInput.forEach(function(item){
    let textAreaUnits = item.value.split("\n").map((arrItem,index) => <Text key = {`${item.name}_${index}`}><Image style = {styles.bullet} src = {bulletPoint} />{arrItem}</Text>)
    textAreaUnits.forEach(item => tempList.push(item))
    textAreaSize.push(textAreaUnits.length)
  });

// Fetching and inserting data from Experience Information Form into Text Boxes.  
  let experienceUnits = [];
  experienceInput.forEach(function(item){
    if(item.name.startsWith("wrk_cpy_name_")) experienceUnits.push(<Text style = {styles.boldOnly} key = {item.name}>{item.value}</Text>)
    else if(item.name.startsWith("wrk_designation_")) experienceUnits.push(<Text style = {{color:"#333"}} key = {item.name}>{item.value}</Text>)
    else experienceUnits.push(<Text key = {item.name}>{item.value}</Text>)    
  });

  let findSum = (arrVar, posTill) => {
    let sum = 0;
    for(let i = 0; i < posTill; i++) sum += arrVar[i];
    return sum;
  }

// Inserting each section of Experience Information Form into separate Views.   
  let experienceSection = []
  for(let i =0; i<experienceUnits.length; i+=5){

    let textAreaSection = [];

    let startFrom = findSum(textAreaSize, i%5)
    for(let j = startFrom; j < startFrom + textAreaSize[i%5]; j++) textAreaSection.push(tempList[j]);

    experienceSection.push(
    <View style = {styles.viewSection}>
      <Text>{experienceUnits[i]} - {experienceUnits[i+1]}</Text>
      <Text>{experienceUnits[i+2]} - {experienceUnits[i+3]}</Text>
      <Text>{experienceUnits[i+4]}</Text>
      {textAreaSection.map(function(item){
        return <Text style = {{paddingTop:"10px",fontSize:"13px",paddingLeft:"10px"}} >{item}</Text>
      })}
    </View>)
  }

// Fetching and inserting data from Personal Interest Form into Text Boxes.  
let interestUnits = [];
interestInput.forEach(function(item){
  interestUnits.push(
    <View style = {styles.viewSection} >
      <Text key = {item.name}><Image style = {styles.bullet} src = {bulletPoint} /> {item.value}</Text>
    </View>
  )
})

// Fetching and inserting data from Skills Form into Text Boxes.  
let skillUnits = [];
skillInput.forEach(function(item){
  skillUnits.push(
    <View style = {styles.viewSection} >
      <Text key = {item.name}><Image style = {styles.bullet} src = {bulletPoint} /> {item.value}</Text>
    </View>
  )
})

  const MyDoc = (
  <Document>
    <Page size = "A4" style = {styles.page}>
      <View style = {styles.view} >
      <Text style = {styles.heading}></Text>
        {generalSection}
      </View>
      <View style = {styles.view} >
        <Text style = {styles.heading}>Skills</Text>
         {skillUnits}
      </View>
      <View style = {styles.view}>
        <Text style = {styles.heading}>Experience</Text>
        {experienceSection}
      </View>
      <View style = {styles.view}>
          <Text style = {styles.heading} >Education</Text>
          {educationSection}
      </View>
      <View style = {styles.view}>
          <Text style = {styles.heading} >Personal Interests</Text>
          {interestUnits}
      </View>
    </Page>
  </Document>
  );

  return MyDoc;

}

export {RenderPDF};