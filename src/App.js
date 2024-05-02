import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Formtext from "./Components/Formtext";
import { useState } from "react";

function App() {
  const[bcolor,setbgcolor]=useState("bg-light");
  const[mod,setmod]=useState("Enable dark Mode");
  const[ttcolor,settcolor]=useState("bg-dark");

  const toggle=()=>{
    if(bcolor==="bg-light"){
      document.body.style.backgroundColor = "#212529";
      document.getElementById('navv').style.borderBottom='1px solid white';
      setbgcolor('bg-dark')
      setmod("Disable Dark Mode")
      settcolor("text-light");
    }else{
      document.body.style.backgroundColor = "#FAF8F6";
      document.getElementById('navv').style.borderBottom='1px solid black';
      setbgcolor("bg-light")
      setmod("Enable Dark Mode")
      settcolor("text-dark");
    }
  }
 
  return (
    
    <>
    {/* console.log("fgeuf"); */}
    <Navbar title="TextUtils" home="Home" features="Features" bgcolor={bcolor}
     mode={mod} togglefun={toggle} textcolor={ttcolor}></Navbar>
    <Formtext Title="Enter the text you want to analyze" bgcolor={bcolor} fonttext={ttcolor}></Formtext>
    </>
  );
}

export default App;
