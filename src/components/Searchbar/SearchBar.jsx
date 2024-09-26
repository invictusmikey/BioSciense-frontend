import React from 'react';
import './SearchBar.css'
export const SearchBar = () => {
  return (
    <div className="barra-de-busqueda">
      <input
        type="search"
        name="buscar"
        id="buscar"
        placeholder="Barra de búsqueda"
        className="searchbar"
      />
    </div>
  );
};