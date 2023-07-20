import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () =>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
}
const handleLowClick = () =>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");

}
const handleOnChange = (event) =>{
    setText(event.target.value);
}
const handleClearClick = () =>{
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared", "success");

}
const handleCopy = () =>
{
  var text =document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied", "success");

} 

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Removed Extra Spaces", "success");

}
const[text,setText] = useState('');
    return (
        <>
    <div className='container' style={{ color : props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className='form-control' value ={text} onChange={handleOnChange} id ="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'darkslategrey':'white',color : props.mode==='dark'?'white':'black' }}></textarea>
  </div>
 <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
 <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
 <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the Entered Text</button>
 <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy the Text</button>
 <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
        <div className="container my-3" style={{ color : props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something int the text box above to preview it here"}</p>

        </div>
        </>
  )
}
