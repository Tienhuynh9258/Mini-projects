import React from "react";
import "./ClearButton.css";
export default function ClearButton({val,handleClear}) {
  function handleclear(){
    handleClear();
  }
    return (
      <div className="clear-btn" onClick={handleclear}>
       {val}
      </div>
    )
  }