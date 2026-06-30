import React from 'react'
import HomeHero from './HomeHero'
import SafariPackages from './SafariPackages'
import SafariInclusions from './SafariInclusions'
import Packages from './Packages'
import SafariPricingTable from './SafariPricingTable'
import SafariBookingForm from './SafariBookingForm'
import HowItWorks from './HowItWorks'
import FeaturesSection from './FeaturesSection'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'


const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <SafariPackages />
        <SafariInclusions />
        <Packages />
        <SafariPricingTable />
        <SafariBookingForm />
        <HowItWorks />
        <FeaturesSection />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage