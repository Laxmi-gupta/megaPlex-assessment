import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Amenities from './components/Amenities'
import { Route, Routes } from 'react-router-dom'
import FloorPlans from './components/FloorPlans'
import Developer from './components/Developer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/amenities' element={<Amenities/>} />
        <Route path='/floorplan' element={<FloorPlans/>} />
        <Route path='/developer' element={<Developer/>} />
      </Routes>
    </>
  )
}

export default App
