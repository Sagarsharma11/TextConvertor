
import React,{ useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoveCalculator from './components/LoveCalculator';


 


function App() {
  
  const [mode, setMode] = useState("light");

  
  
  function toggleMode() {
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#1f1f1f'
    }      
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
      
  }
  

  
  
  return (

    
    <>
      <NavBar title="Text String" mode={mode} toggleMode={toggleMode} />

      <Router>
        <Routes>
        
          <Route path="/" 
          element={
            <>
            <Alert/>
            <TextForm  colo="black" btn="convert to Upper" btn2="convert to Lower" title="Online Text Converter" />
            </>
          }
        
          
         />
          <Route path="about" element={ <About/>} />
          <Route path="love" element={ <LoveCalculator/>} />
      
        </Routes>
      </Router>




    </>

  );
}

export default App;
   