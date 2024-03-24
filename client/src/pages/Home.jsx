import React from 'react'
import Hero from '../components/Hero'
import BloodDirect from '../components/BloodDirect'
import Navbar from '../components/Navbar'
import AppointCalendar from '../components/AppointCalendar'

const Home = () => {
  return (
    
    <div>
        <Navbar/>
      <Hero/>
      <BloodDirect/>
      <AppointCalendar/>
    </div>
  )
}

export default Home
