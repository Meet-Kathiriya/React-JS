import React from 'react'
import Navbar from './Component/Navbar'
import Slider from './Component/Slider'
import Slider1 from './Component/Slider1'
import Video from './Component/Video'
import TrendingC from './Component/TrendingC'
import TShirt from './Component/TShirt'
import BestSeller from './Component/BestSeller'
import WRWrogn from './Component/WRWrogn'
import WrognWP from './Component/WrognWP'
import WStore from './Component/WStore'
import AllServices from './Component/AllServices'
import Footer from './Component/Footer'

export default function App() {
  return (
    <div>

      {/* All Component Files */}

      <Navbar />
      <Slider />
      <Slider1 />
      <Video />
      <TrendingC />
      <TShirt />
      <BestSeller />
      <WRWrogn />
      <WrognWP />
      <WStore />
      <AllServices />
      <Footer />

      {/* All Component Files */}

    </div>
  )
}