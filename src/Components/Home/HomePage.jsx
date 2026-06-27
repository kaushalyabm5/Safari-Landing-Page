import React from 'react'
import HomeHero from './HomeHero'
import SafariPackages from './SafariPackages'
import SafariInclusions from './SafariInclusions'
import Packages from './Packages'
import SafariPricingTable from './SafariPricingTable'
import SafariBookingForm from './SafariBookingForm'
import HowItWorks from './HowItWorks'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <SafariPackages />
        <SafariInclusions />
        <Packages />
        <SafariPricingTable />
        <SafariBookingForm />
       
    </div>
  )
}

export default HomePage