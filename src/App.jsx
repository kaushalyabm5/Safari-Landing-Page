import React from 'react'
import { ReactLenis } from 'lenis/react'
import HomePage from './Components/Home/HomePage'
import heroBg from './assets/images/home-hero.png'
import Navbar from './Components/Navbar'

// Core style layout sheet from modern lenis package
import 'lenis/dist/lenis.css'

const App = () => {
  const lenisOptions = {
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    syncTouch: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {/* Root Window Layout Wrapper */}
      <div className="relative min-h-screen w-full text-white">
        
        {/* 1. FIXED BACKGROUND CONTAINER
          Isolating the asset prevents Lenis animation layers from distorting the image scale aspect rules.
        */}
        <div 
          className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 pointer-events-none"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* 2. FIXED DARK GRADIENT OVERLAY LAYER */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0b0a15] z-0 pointer-events-none" />

        {/* 3. SCROLLABLE INTERACTIVE CONTENT
          Kept at relative z-10 so it sits perfectly above our background framework.
        */}
        <div className="relative z-10 w-full">
          <Navbar />
          <HomePage />
        </div>

      </div>
    </ReactLenis>
  )
}

export default App