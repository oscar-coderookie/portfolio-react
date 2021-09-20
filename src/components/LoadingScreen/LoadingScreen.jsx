import './LoadingScreen.scss';

import React from 'react'
import  Spinner  from '../Spinner/Spinner';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <Spinner/>
            <h3 className="loading-screen__label">Cargando...</h3>
        </div>
    )
}

export default LoadingScreen
