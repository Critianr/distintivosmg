import React from 'react';
import logo from '../assets/logoheader.svg';
import { Link } from 'react-router-dom';
import './desktopNav.css'
function DesktopNavigation() {
  return (
    <nav className="desktop-nav">
   <img className="logo-menuDes" src={logo} alt="distintivos" />
    <ul className='nav-link'>
    <li><Link className='text-navlink' to="/">Inicio</Link></li>
    <li><Link className='text-navlink' to="/insignias-militares">Insignias Militares</Link></li>
    <li><Link className='text-navlink' to="/empresarial">Empresarial</Link></li>
    <li><Link className='text-navlink' to="/joyeria">Joyeria</Link></li>
    <li><Link className='text-navlink' to="/medallas">Medallas</Link></li>
    <li><Link className='text-navlink' to="/pines">Pines</Link></li>
    <li><Link className='text-navlink' to="/servicios-digitales">Servicios Digitales</Link></li>
    <li><Link className='text-navlink' to="/contactos">Contactanos</Link></li>
  </ul>
  
  </nav>
  );
}

export {DesktopNavigation};