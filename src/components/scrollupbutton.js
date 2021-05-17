import React, { useState } from "react";
import './scrollupbutton.css';
import { FaArrowAltCircleUp } from 'react-icons/fa';


const ScrollUpButton = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <FaArrowAltCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
    );

}


export default ScrollUpButton;


