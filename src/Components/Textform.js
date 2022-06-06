import React, {useState} from 'react'
export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
   }
   const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
   }
   const handleCleartext = () => {
    let newText = '';
    setText(newText)
   }
   const handleOnChange = (event) =>{
     setText(event.target.value)
   }
   const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}
   const [text, setText] = useState('');
  return (
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.heading}</h1>
  <div className="form-group mb-3">
  <textarea className='form-control' value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows='8'></textarea>
  </div>
  <button className='btn btn-success mx-1 my-1' onClick={handleUpClick} disabled={text.length===0} >Convert to Uppercase</button>
  <button className='btn btn-success mx-1 my-1' onClick={handleLoClick} disabled={text.length===0} >Convert to Lowercase</button>
  <button className='btn btn-success mx-1 my-1' onClick={handleCleartext} disabled={text.length===0} >Clear Text</button>
  <button className="btn btn-success mx-1 my-1" onClick={handleCopy} disabled={text.length===0} >Copy Text</button>
  <button className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces} disabled={text.length===0} >Remove Extra Spaces</button>
  <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Text Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters.</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
  </div>
  </div>
  )
}
