import React, { useState } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import { SideBar } from '../../SideBar/SideBar';
import { Footer } from '../../Footer/Footer';
import './Home.css';
import { TableInsumos } from '../../TableInsumos/TableInsumos';
import { Welcometext } from '../../WelcomeText/Welcometext';
import { InventoryBio } from '../../InventoryBio/InventoryBio';


export const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const [showInventory, setShowInventory] = useState(false);

  const handleMostrarInsumos = () => {
    setShowTable(true);
    setShowInventory(false); 
  };

  const handleMostrarInventario = () => {
    setShowInventory(true);
    setShowTable(false); 
  };

  return (
    <div className="home-container">
      <NavBar />
      <section className='seccion'>
        <div className='izquierda'>
          <SideBar
            onInsumoClick={handleMostrarInsumos}
            onInventoryClick={handleMostrarInventario}
          />
        </div>
        <div className="derecha">
          {showTable && <TableInsumos />}
          {showInventory && <InventoryBio />}
          {!showTable && !showInventory && <Welcometext />}
        </div>
      </section>
    <Footer />
   
    </div>
  );
};
