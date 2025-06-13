import React from "react"
import AboutSectionBanner from "./molecules/about/aboutSectionBanner"
import AboutSectionBody from "./molecules/about/aboutSectionBody"
import Ugrid from "./atoms/uGrid"

const About = () => {
    return(
        <>
         <AboutSectionBanner/>
         <AboutSectionBody/>
         <Ugrid/>
        </>
    )
}

export default About