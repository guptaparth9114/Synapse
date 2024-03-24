import React from 'react'
import Hero from '../components/Hero'
import BloodDirect from '../components/BloodDirect'
import Navbar from '../components/Navbar'
import AppointCalendar from '../components/AppointCalendar'
import Footer from '../components/Footer'


const Home = () => {
  return (
    
    <div>
        <Navbar/>
      <Hero/>
      <BloodDirect/>
      <AppointCalendar/>
      <Footer/>
    </div>
  )
}

export default Home
