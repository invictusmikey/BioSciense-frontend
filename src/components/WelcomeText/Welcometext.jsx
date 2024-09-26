import React from 'react'
import './WelcomeText.css'
import Biomedica from '../../assets/Biomedica.jpg'
import img2 from '../../assets/img2.jpg'
export const Welcometext = () => {
    return (
        <div className="wText">
            <h2 className="Texto">
                ¡Hola! Bienvenido. Este software está diseñado para la gestión de insumos y máquinas del área biomédica.
            </h2>

           
            <div className="containerLinks">
                <div className="row">
                    <a href="#"><img src={Biomedica} alt="Biomedica" /></a>
                    <a href="#"><img src={img2} alt="Biomedica" /></a>
                </div>
                <div className="row">
                    <a href="#"><img src={Biomedica} alt="Biomedica" /></a>
                    
                </div>
               
            </div>
        </div>

    )
}
