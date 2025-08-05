import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Others from './Others';
import Projects from './Projects';
import Footer from './Footer';
import ContactForm from './Connect';


function App() {
 

  return (
    <div>
       <Navbar/>
       <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/others' element={<Others/>}/>
      <Route path='/contactform' element={<ContactForm/>}/>
      
</Routes>
     <Footer/>
    </div>
  )
}

export default App
