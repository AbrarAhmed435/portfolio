import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Others from './Others';
import Projects from './Projects';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar/>
       <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/others' element={<Others/>}/>
</Routes>
     
    </div>
  )
}

export default App
