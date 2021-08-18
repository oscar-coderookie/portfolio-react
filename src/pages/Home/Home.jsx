import React from 'react';
import './Home.scss'
import logo from '../../img/logo.png'

function Home(props) {

    return (
        <div className="home">
            <img src={logo} alt="Logo" className="home__logo" />
        </div>
    );
}

export default Home;