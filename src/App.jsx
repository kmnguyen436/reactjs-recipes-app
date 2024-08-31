import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Fetch from './component/Fetch';
import NavBar from './component/NavBar';
function App() {
  const [count, setCount] = useState(0)


 
  return (
    <>
    <NavBar/>
      <p>hi</p>
      <Fetch></Fetch>
      
    </>
  )
}

export default App
