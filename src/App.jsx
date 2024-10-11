import { useState } from 'react'
import "bootstrap"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Movies from './components/movies';

 
function App() {
 

  return (
    <>
      <Navbar/>
      
     <Banner/>
    <Movies/>

    
     
    </>
  )
}

export default App
