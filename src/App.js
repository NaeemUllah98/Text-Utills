import './App.css';
import Navbar from './Components/Navbar';
// import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Textform from './Components/Textform';
// import About from './Components/About';
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
     <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/> 
    <div className="container my-3">        
    <Textform heading="Enter the text to analyze below"  mode={mode}/>
        {/* <About/>   */}
          </div>
    </>
  );
}
export default App;
