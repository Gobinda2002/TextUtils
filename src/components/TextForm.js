import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
            // console.log("You clicked the button...." + text);
            let newText = text.toUpperCase();
            setText(newText)
    }

    const handlelowClick = ()=>{
        // console.log("You clicked the button...." + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleRemoveClick = ()=>{
        // console.log("You clicked the button...." + text);
        let newText = "";
        setText(newText)
    }

    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event)=>{
            // console.log("changed.");
            setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("hey Atharva");
    return (
        <div classNamre ="container" style={{color : props.mode === 'dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.title}</h1>
                <textarea className="form-control" id="myBox" onChange = {handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#0b3738':'white', color : props.mode === 'dark'?'white':'black'}} rows={8} value={text} />
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick = {handlelowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleRemoveClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick = {handleCopyClick}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>


            <div className="container my-3">
                <h2>Your Text summary </h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes takes to read.</p>

            </div>
        </div>
    )
}
