import React, { useState } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import { SideBar } from '../../SideBar/SideBar';
import { Footer } from '../../Footer/Footer';
import './Home.css';
import { TableInsumos } from '../../TableInsumos/TableInsumos';
import { Welcometext } from '../../WelcomeText/Welcometext';



export const Home = () => {

  const [showTable,setShowTable] = useState(false)

  const handleMostrarInsumos = () => {
    setShowTable(true);
  };

  return (
    <div className="home-container">
      <NavBar />
      <section className='seccion'>
        
        <div className='izquierda'>
          <SideBar onInsumoClick={handleMostrarInsumos}/>
        </div>
        <div className="derecha">
         {showTable?  <TableInsumos/>:<Welcometext/>}
        
        </div>
      </section>
      <Footer />
    </div>
  );
};

