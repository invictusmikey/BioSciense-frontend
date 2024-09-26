
import React, { useState } from 'react';
import './SideBar.css';
import {TableInsumos} from '../TableInsumos/TableInsumos'
import { Home } from '../Pages/Home/Home';



export const SideBar = ({ onInsumoClick}) => {
  const [isInfraestructuraMenuOpen, setIsInfraestructuraMenuOpen] = useState(false);
  const [isBiomedicaMenuOpen, setIsBiomedicaMenuOpen] = useState(false);
  const [showTable, setShowtable] = useState(false)

  const handleInfraestructuraMenuToggle = () => {
    setIsInfraestructuraMenuOpen(!isInfraestructuraMenuOpen);
  };

  const handleBiomedicaMenuToggle = () => {
    setIsBiomedicaMenuOpen(!isBiomedicaMenuOpen);
  };

  const handleShowTable = () => {
    setShowtable(!showTable)
  }

  return (
    <aside className="sidebar">
      <h1>¡Bienvenido a BioScience!</h1>
      <div className="sidebar-items">
        <li>
          <button onClick={handleInfraestructuraMenuToggle}>Infraestructura</button>
          {isInfraestructuraMenuOpen && (
            <ul className="dropdown">
              <li className='dropdowButtons'>
                
                <button onClick={onInsumoClick}>Insumo</button>
          
                <button>Datos</button>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button onClick={handleBiomedicaMenuToggle}>Biomedica</button>
          {isBiomedicaMenuOpen && (
            <ul className="dropdown">
              <li className='dropdowButtons'>
                <button onClick={onInsumoClick}>Insumo</button>
                <button>Datos</button>
              </li>
            </ul>
          )}
        </li>
      </div>
    </aside>
  );
};