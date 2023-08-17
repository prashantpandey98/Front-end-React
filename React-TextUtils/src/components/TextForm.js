import React, {useState} from 'react';

let TextForm=(props)=> {
    
const [text, setText]= useState("");

const handleUpClick=()=>{
setText(text.toUpperCase());
  props.showAlert("Converted to Uppercase!!", "success")
}
const handleLowClick=()=>{
    setText(text.toLowerCase());
  props.showAlert("Converted to Lowercase!!", "success")

}
const handleClearText=()=>{
    setText("");
    props.showAlert("Text cleared!!", "success")
}

const handleReverseText = ()=>{
  setText(text.split(" ").reverse().join(" "));
  props.showAlert("Text has been reversed!!", "success")
  }

  const handleCopyText=(event)=>{
   let data=document.getElementById("myBox");
   data.select();
   navigator.clipboard.writeText(data.value);
   document.getSelection().removeAllRanges();
  }

  const handleCountVowels=()=>{
    let count=0;
    let vowels="aeiou";
    let inputText= text.toLowerCase();
    for(let i of inputText){
      if(vowels.indexOf(i)!== -1){
        count++;
      }
    }
    setText(String(count))
  }

const handleOnChange=(event)=>{
setText(event.target.value);
}


  return (
    <div>
    <div className='container'>
    <h1 style={{color:props.mode==="light"? "#042743":"#d2d6ed"}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} 
        style={{backgroundColor: props.mode==="dark"? "#13466e":"#d2d6ed", color:props.mode==="light"? "#042743":"#d2d6ed"}} rows="8" placeholder='Enter Text here'></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleReverseText}>Reverse Text</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCountVowels}>Count Vowels</button>
        <button disabled={text.length===0} className="btn btn-info mx-2 mys-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearText}>Clear Text</button>
        </div>
    <div className="container my-3" style={{color:props.mode==="light"? "#042743":"#d2d6ed"}}>
     <h3>Your Text summary</h3>
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0? text:"Enter your text in the textbox to preview here"}</p>
    </div>
    </div>
  )
}

export default TextForm;
