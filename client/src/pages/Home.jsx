import React from 'react'
import Hero from '../components/Hero'
import BloodDirect from '../components/BloodDirect'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Accordion from '../components/Accordion'


const Home = () => {
  return (
    
    <div>
        <Navbar/>
      <Hero/>
      <BloodDirect/>
      <Accordion/>
      <Footer/>
    </div>
  )
}

export default Home
