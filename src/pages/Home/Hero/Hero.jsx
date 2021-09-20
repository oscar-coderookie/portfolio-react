import './Hero.scss';
import logo from '../../../img/logo.png'

import React from 'react'

const Hero = () => {
    return (
        <div className="hero">
            <img src={logo} alt="Logo" className="hero__logo" />
        </div>
    )
}

export default Hero
