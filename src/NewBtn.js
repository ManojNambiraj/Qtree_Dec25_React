import React from "react";
import "./NewBtn.css";

function NewBtn(props) {
  return (
    <span className="childCompo">
      <button
        style={{ backgroundColor: props.btnColor }}
        onClick={() => {props.handle(props.btnName)}}
      >
        {props.btnName}
      </button>
    </span>
  );
}

export default NewBtn;
