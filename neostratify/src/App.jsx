import { useState } from 'react'
import styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Business from './Components/Business/Business'

function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Business />

    </div>
  )
}

export default App
