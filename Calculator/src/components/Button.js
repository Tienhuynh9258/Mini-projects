import React from "react";
import "./Button.css";

export default function Button({val, handleInput}) {
    function handleClick(){
      handleInput(val);
    }
    let Operator= (val==='+'||val==='/'||val==='*'||val==='-' ? "operator" : "");
    return (
      <div className={`button-wrapper ${Operator}`} onClick={handleClick}>
      {val}
      </div>
    )
  }