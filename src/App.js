import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("Light");
  const toggle = ()=> {
    if(mode === 'Light') {
      setMode("Dark");
      document.body.style.backgroundColor = "#54626F";
    }
    else{
      setMode("Light")
      document.body.style.backgroundColor = "#ffffff";
    }
  }

  return (
    <>
    <Router>
    <Navbar mode={mode} toggle={toggle}/>
      <Routes>
        <Route exact path='/' element={<News mode={mode}/>}/>
        <Route path='/about' element={<About mode={mode}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
