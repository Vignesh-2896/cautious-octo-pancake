import PropTypes from "prop-types";
import React from "react";

function InputBox(props) {
  const inputType = props.type || "text";
  const inputStyle = {
    width: "70%",
    margin: "5px auto 5px auto",
    height: "20px",
    padding: "5px",
    fontSize: "15px",
  };
  return (
    <input
      className={props.classType}
      name={props.name}
      type={inputType}
      style={inputStyle}
      placeholder={props.placeholder}
      onBlur={props.changeFunc}
      min={props.min}
      max={props.max}
      required
    />
  );
}

InputBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  classType: PropTypes.string,
  placeholder: PropTypes.string,
  changeFunc: PropTypes.func,
  min: PropTypes.string,
  max: PropTypes.string,
};

function TextAreaBox(props) {
  const inputType = props.type || "text";
  const textAreaStyle = {
    width: "70%",
    margin: "5px auto 5px auto",
    padding: "5px",
    fontSize: "15px",
    height: "120px",
  };
  return (
    <textarea
      name={props.name}
      type={inputType}
      style={textAreaStyle}
      required
    />
  );
}

TextAreaBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
};

function LabelBox(props) {
  const labelStyle = {
    width: "20%",
    height: "20px",
    padding: "5px",
    fontSize: "15px",
    float: "left",
    textAlign: "right",
  };
  return (
    <label htmlFor={props.name} style={labelStyle}>
      {props.labelInfo}
    </label>
  );
}

LabelBox.propTypes = {
  name: PropTypes.string,
  labelInfo: PropTypes.string,
};

function ButtonBox(props) {
  const buttonStyle = {
    width: "auto",
    padding: "5px",
    margin: "5px",
    fontSize: "15px",
    display: "inline",
  };
  return (
    <button onClick={props.buttonAction} style={buttonStyle}>
      {props.buttonInfo}
    </button>
  );
}

ButtonBox.propTypes = {
  buttonAction: PropTypes.func,
  buttonInfo: PropTypes.string,
};

export { InputBox, LabelBox, ButtonBox, TextAreaBox };
