import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Slider from './Component/Slider'
import Footer from './Component/Footer'
import Card1 from './Card'

export default function App() {

  return (
    <div>
      <Navbar/>
      <Slider/>
      <Card1/>
      <Footer/>
    </div>
  )
}