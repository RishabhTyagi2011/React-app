import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("upper case is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };
  const handleLoClick = () => {
    console.log("lower case is clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  };
  const handleClearClick = () => {
    console.log("lower case is clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Test is cleared", "success")
  };
  const handlecopyClick = () => {
    console.log("copy text is clicked"  );
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Test is copied", "success")
  };
  const handleremoveClick = () => {
    console.log("Remove Extra space is clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Spaces is removed", "success")
  };
  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#1a1234' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#1a1234' }}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary my-3 mx-3 "
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <button className="btn btn-primary my-3" onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <button
            className="btn btn-primary my-3 mx-3 "
            onClick={handleClearClick}
          >
            Clear text
          </button>
          <button
            className="btn btn-primary my-2 mx-3 "
            onClick={handlecopyClick}
          >
            copy text
          </button>
          <button
            className="btn btn-primary my-2 mx-3 "
            onClick={handleremoveClick}
          >
            Remove extra space
          </button>
        </div>
      </div>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#1a1234' }}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above in the box to preview"}</p>
      </div>
    </>
  );
}
