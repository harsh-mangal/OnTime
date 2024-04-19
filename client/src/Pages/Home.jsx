import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Features from '../Components/Features'
import Display from '../Components/Display'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Display/>
    </div>
  )
}

export default Home