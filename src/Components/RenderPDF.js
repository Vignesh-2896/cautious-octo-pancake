import React from 'react';
import {Document, Page, View, Text, StyleSheet, Link, Font } from '@react-pdf/renderer';
import { ButtonBox } from './element';
import arialBondSrc from "../assets/FontsFree-Net-arial-bold.ttf"

function RenderPDF(){

  const styles = StyleSheet.create({
    viewSection:{margin:10,padding:5},
})

  let generalInput = Array.from(document.getElementsByClassName("generalInfo")[0].getElementsByTagName("input"));
  let educationInput = Array.from(document.getElementsByClassName("education")[0].getElementsByTagName("input"));
  let experienceInput = Array.from(document.getElementsByClassName("work")[0].getElementsByTagName("input"));
  let textAreaInput = Array.from(document.getElementsByClassName("work")[0].getElementsByTagName("textarea"))

// Fetching and inserting data from General Information Form into Text Boxes.
  const generalSection = generalInput.map(function(item, i){
    return (
      <Text key = {item.name} >{item.value}</Text>
    );
  })

// Fetching and inserting data from Education Information Form into Text Boxes.  
  const educationUnits = educationInput.map(function(item, i){
    return (
      <Text key = {item.name} >{item.value}</Text>
    )
  });

// Inserting each section of Education Information Form into separate Views. 
  let educationSection = []; let ctr = 0;
  for(let i =0; i<educationUnits.length; i+=5){
    educationSection[ctr]= <View style = {styles.viewSection}>{educationUnits.splice(i,6)}</View>
    ctr++;
  }

// Inserting each Textarea Box from Experience Information Form into Text Boxes.
  const textAreaSection = textAreaInput.map(function(item, i){
    return (
      <Text key = {item.name} >{item.value}</Text>
    )
  });

// Fetching and inserting data from Experience Information Form into Text Boxes.  

  const experienceUnits = experienceInput.map(function(item, i){
    return (
      <Text key = {item.name} >{item.value}</Text>
    )
  });

// Inserting each Textarea Box under their respective sections.
  let j = 0;
  for(let i = 5; i <= experienceUnits.length; i+= 5){
    experienceUnits.splice(i,0,textAreaSection[j]); j++;
  }

// Inserting each section of Experience Information Form into separate Views.   

  let experienceSection = []; ctr = 0;
  for(let i =0; i<experienceUnits.length; i+=6){
    experienceSection[ctr]= <View style = {styles.viewSection}>{experienceUnits.splice(i,6)}</View>
    ctr++;
  }


  const MyDoc = (
    <Document>
      <Page size = "A4">
        <View>
          {generalSection}
        </View>
        <View>
            <Text>Education</Text>
            {educationSection}
        </View>
        <View>
          <Text>Experience</Text>
          {experienceSection}
        </View>
      </Page>
    </Document>
  );

  return MyDoc;

}

export {RenderPDF};