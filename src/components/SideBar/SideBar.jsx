import React, { useState } from 'react';
import './SideBar.css';

export const SideBar = ({ onInsumoClick, onInventoryClick }) => {
  const [isInfraestructuraMenuOpen, setIsInfraestructuraMenuOpen] = useState(false);
  const [isBiomedicaMenuOpen, setIsBiomedicaMenuOpen] = useState(false);

  const handleInfraestructuraMenuToggle = () => {
    setIsInfraestructuraMenuOpen(!isInfraestructuraMenuOpen);
  };

  const handleBiomedicaMenuToggle = () => {
    setIsBiomedicaMenuOpen(!isBiomedicaMenuOpen);
  };

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
                <button>Inventario</button>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button onClick={handleBiomedicaMenuToggle}>Biomedica</button>
          {isBiomedicaMenuOpen && (
            <ul className="dropdown">
              <li className='dropdowButtons'>
                <button>Insumo</button>
                <button onClick={onInventoryClick}>Inventario</button>
              </li>
            </ul>
          )}
        </li>
      </div>
    </aside>
  );
};
