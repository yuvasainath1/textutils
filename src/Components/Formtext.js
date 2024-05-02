import React,{useState} from "react";

export default function Formtext(props) {
    const[text,setText]=useState("Enter text here")
    const changeup=()=>{
        let t=text.toUpperCase();
        setText(t);
    }
    const changelow=()=>{
        let t=text.toLowerCase();
        setText(t);
    }
    const changetext=(event)=>{
        setText(event.target.value);
    }
    return (
    
   
    <>
    <div className={`mb-4 my-4 container ${props.bgcolor} ${props.fonttext}`} >
      <label htmlFor="exampleFormControlTextarea1" className="form-label my-3" >
        <h3 >{props.Title}</h3>
      </label>
      <textarea
        className={`form-control ${props.bgcolor} ${props.fonttext}`}
        id="exampleFormControlTextarea1"
        rows="8" value={text} onChange={changetext}
      ></textarea>
    <button className="btn btn-outline-success my-2 mx-2" type="submit" onClick={changeup} >Covert to upper case</button>
    <button className="btn btn-outline-success my-2 mx-2" type="submit" onClick={changelow}>Covert to lower case</button>
    </div>
    <div className="container ">
    <h3 className={`${props.fonttext} `}>Your text summary</h3>
    <p className={`${props.fonttext} `}>your text contains    words and {text.length} characters</p>
  </div>
    </>
  );
}
