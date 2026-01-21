import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DashboardShowcase from './components/DashboardShowcase';
import MobileAppShowcase from './components/MobileAppShowcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  
  // Ensure legacy scripts don't break animations if they rely on DOM presence
  // Note: Framer Motion handles reveal animations now, but legacy sliders might still need jQuery
  // Legacy scripts are loaded in index.html, which is fine.

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Features />
          <HowItWorks />
          <DashboardShowcase />
          <MobileAppShowcase />
          {/* <Pricing /> */}
          <Footer />
        </div>
      </div>
      
      {/* Search Modal and Video Modal placeholders if needed in future */}
    </>
  )
}

export default App
