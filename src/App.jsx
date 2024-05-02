import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Keunggulan from './components/Keunggulan'
import Paket from './components/Paket'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import UpArrow from './atoms/UpArrow'


const App = () => {
  return (
    <div> 
      <Navbar></Navbar>
      <Hero></Hero>
      <Keunggulan></Keunggulan>
      <Paket></Paket>
      <FAQ></FAQ>
      <Footer></Footer>
      <UpArrow></UpArrow>
    </div>
  )
}

export default App