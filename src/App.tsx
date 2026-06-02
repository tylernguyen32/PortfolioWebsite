import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Projects from './components/Projects'

function App(){
  return(
    <div className = "bg-gradient-to-r from-indigo-400 to-sky-400 h-screen ">
    <Navbar/>

    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </div>
  );
}

export default App