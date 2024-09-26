import React from 'react'
import { Items } from '../Items/Items'
import Logo from '../../assets/Logo.png'
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className="navbar-container">
        <a href="../Pages/Home/Home"><img src={Logo} alt="" /></a>
        <ul className="navbar-items">
          <Items>Equipos</Items>
          <Items>Pag 2</Items>
          <Items>Pag 3</Items>
        </ul>
    </div>
  )
}
