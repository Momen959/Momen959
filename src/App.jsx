import React, { useEffect, useState } from 'react'
import './App.css'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const FloatingStars = () => {
  const { scrollYProgress } = useScroll()
  
  // Keeps the smooth deceleration feel when users scroll through your sections
  const smoothProgress = useSpring(scrollYProgress, { damping: 35, stiffness: 70, mass: 0.9 })
  
  // Dynamic cosmic blur effect: stars shift slightly out of focus the faster you speed down the orbits
  const starBlur = useTransform(smoothProgress, (v) => `${Math.abs(Math.sin(v * Math.PI * 2.8)) * 6}px`)

  return (
    <motion.div 
      className='fixed inset-0 z-[-3] pointer-events-none' 
      style={{ filter: starBlur }}
    >
      <StarsCanvas />
    </motion.div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary space-page overflow-x-hidden'>
        {/* Background Starfield Layer */}
        <FloatingStars />
        
        {/* 🌌 GLOBAL AMBIENT GLOW BLOB (Escapes Hero height limitations to eliminate the cut line) */}
        <div className="absolute top-0 right-0 w-[50vw] h-[140vh] pointer-events-none z-0 opacity-25">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 85% 30%, rgba(0, 240, 255, 0.2) 0%, transparent 55%),
                radial-gradient(circle at 80% 28%, rgba(0, 170, 255, 0.08) 0%, transparent 45%)
              `,
            }}
          />
        </div>
        
        {/* Main Content Containers */}
        <div className="relative z-10 bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        <main className="relative z-0 pointer-events-auto">
          <About />
          <Education />
          <Experience />
          <Extracurricular />
          <Tech />
          <Works />
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App