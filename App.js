import { useState } from 'react';
import Task from './components/task.js';
import Contact from './Routers/Contact';
import About from './Routers/About';
import Home from './Routers/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App(){
  return (
    <>
    <Router>
      <Task />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

    </Router>
      
      

    </>
  );
}

export default App;
