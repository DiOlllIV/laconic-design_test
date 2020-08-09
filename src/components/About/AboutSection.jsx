import React, { useState, useEffect } from "react";
import AboutForSmallScreen from './AboutForSmallScreen';
import AboutForBigScreen from './AboutForBigScreen';

const About = () => {
    const [screeSize, onResizing] = useState(window.innerWidth);

    const readWindowSize = () => {
        onResizing(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", readWindowSize);
        readWindowSize();
    });


    if(screeSize <= 700)
        return <AboutForSmallScreen />
    return <AboutForBigScreen />
}

export default About;