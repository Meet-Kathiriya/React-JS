import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import AddToCart from './Component/AddToCart'


export default function App() {
  return (
    <div>
      <Navbar />
      <AddToCart />
    </div>
  )
}