import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';  
import logo from '../images/logo.png';

const Menu = () => {
  return (
    <div className="menu-container">
       
    <img src={logo} alt="Logo" className='logo'/>
       
      <Link to="/" className="menu-item">
        <span>Inicio</span>
      </Link>
      

      <Link to="/deforestacion" className="menu-item">
        <span>Deforestación</span>
      </Link>
      

      <Link to="/erosion" className="menu-item">
        <span>Erosión del suelo</span>
      </Link>
      
 
      <Link to="/biodiversidad" className="menu-item">
        <span>Pérdida de biodiversidad</span>
      </Link>
      

      <Link to="/usuario" className="menu-item">
        <img src="/user-icon.png" alt="Usuario" className="menu-icon" />
        <span>Usuario</span>
      </Link>
    </div>
  );
};

export default Menu;
