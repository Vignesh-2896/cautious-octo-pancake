import React from "react";
import { GeneralInfo } from "./GeneralInfo";
import Interests from "./Interests";
import Education from "./Education";
import Work from "./Work";
import CVActions from "./CVActions";
import Skills from "./Skills";

function MainForm() {
  const divStyle = {
    width: "60%",
    margin: "70px auto 0px auto",
    border: "1px solid black",
    textAlign: "center",
  };

  return (
    <div style={divStyle}>
      <form id="cv_form">
        <GeneralInfo />
        <Skills />
        <Work />
        <Education />
        <Interests />
        <CVActions />
      </form>
    </div>
  );
}

export { MainForm };
