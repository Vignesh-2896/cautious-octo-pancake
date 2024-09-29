import React, { Component } from "react";
import { InputBox, ButtonBox } from "./element";

class Interests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interestList: [],
    };

    this.addForms = this.addForms.bind(this);
    this.deleteForms = this.deleteForms.bind(this);
  }

  deleteForms = (e) => {
    e.preventDefault();
    let divIDRemove = e.target.parentNode.getAttribute("data-key");
    let currentStateValue = this.state.interestList;
    currentStateValue = currentStateValue.filter(function (curVal) {
      return curVal.key !== divIDRemove;
    });
    this.setState((state) => {
      return { interestList: currentStateValue };
    });
  };

  addForms = (e) => {
    if (e) e.preventDefault();
    let nextInterestId = new Date().getTime();
    const divStyle = {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "5px",
    };

    const NewBox = (
      <div
        key={nextInterestId}
        data-key={nextInterestId}
        className={`interestForm_${nextInterestId}`}
        style={divStyle}
      >
        <InputBox
          name={`interest_name_${nextInterestId}`}
          placeholder="Enter Interest"
        />
        <ButtonBox buttonInfo="Delete" buttonAction={this.deleteForms} />
      </div>
    );
    this.setState((prevState) => ({
      interestList: prevState.interestList.concat(NewBox),
    }));
  };

  componentDidMount() {
    this.addForms();
  }

  render() {
    return (
      <div className="interests">
        <h3>Personal Interests</h3>
        {this.state.interestList.map(function (item) {
          return item;
        })}
        <ButtonBox buttonInfo="Add Section" buttonAction={this.addForms} />
      </div>
    );
  }
}

export default Interests;
