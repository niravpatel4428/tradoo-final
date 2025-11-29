import React from 'react'
import Banner from '../sections/Banner'
import CleanRisk from '../components/CleanRisk'
import WealthManagement from '../sections/WealthManagement'
import Framework from '../sections/Framework'
import Investment from '../sections/investment'
import Benefits from '../sections/Benefits'
import Testimonials from '../sections/Testimonials'
import WantPart from '../sections/WantPart'

const Home = () => {
    return (
        <>
            <Banner/>
            <CleanRisk/>
            <WealthManagement/>
            <Framework/>
            <Investment/>
            <Benefits/>
            <Testimonials/>
            <WantPart/>
        </>
    )
}

export default Home
