function InputBox(props){
    const inputBoxType = props.type || "text"
    const inputStyle = {
        width:"80%",
        margin:"5px auto 5px auto",
        height:"20px",
        padding:"5px",
        fontSize:"15px",
    }
    return (
        <input name = {props.name} type = {inputBoxType} style = {inputStyle} />
    )
}

function LabelBox(props){
    const labelStyle = {
        width:"100px",
        height:"20px",
        padding:"5px",
        fontSize:"15px",
        float:"left",
        textAlign:"right",
    }
    return (
        <label htmlFor = {props.name} style = {labelStyle}>{props.labelInfo}</label>
    )
}


export {InputBox, LabelBox};