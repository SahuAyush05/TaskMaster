import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Footer from './Footer'

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header/>
        <HeroSection/>
        <Footer/>
    </div>
  )
}

export default Landing