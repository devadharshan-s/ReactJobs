import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Hero from "../components/Hero.jsx";
import Homecards from '../components/Homecards.jsx';
import Joblistings from "../components/Joblistings.jsx";
import ViewallJobs from "../components/ViewallJobs.jsx";
const HomePage = () => {
    return (
        <>
            <Hero/>
            <Homecards/>
            <Joblistings isHome={true}/>
            <ViewallJobs/>
        </>
    )
}
export default HomePage
