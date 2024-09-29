import React, { Component } from "react";
import { InputBox, ButtonBox } from "./element";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillList: [],
    };

    this.addForms = this.addForms.bind(this);
    this.deleteForms = this.deleteForms.bind(this);
  }

  deleteForms = (e) => {
    e.preventDefault();
    let divIDRemove = e.target.parentNode.getAttribute("data-key");
    let currentStateValue = this.state.skillList;
    currentStateValue = currentStateValue.filter(function (curVal) {
      return curVal.key !== divIDRemove;
    });
    this.setState((state) => {
      return { skillList: currentStateValue };
    });
  };

  addForms = (e) => {
    if (e) e.preventDefault();
    let nextSkillId = new Date().getTime();
    const divStyle = {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "5px",
    };

    const NewBox = (
      <div
        key={nextSkillId}
        data-key={nextSkillId}
        className={`skillForm_${nextSkillId}`}
        style={divStyle}
      >
        <InputBox
          name={`skill_name_${nextSkillId}`}
          placeholder="Enter Skill"
        />
        <ButtonBox buttonInfo="Delete" buttonAction={this.deleteForms} />
      </div>
    );

    this.setState((prevState) => ({
      skillList: prevState.skillList.concat(NewBox),
    }));
  };

  componentDidMount() {
    this.addForms();
  }

  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
        {this.state.skillList.map(function (item) {
          return item;
        })}
        <ButtonBox buttonInfo="Add Section" buttonAction={this.addForms} />
      </div>
    );
  }
}

export default Skills;
