import React from 'react';
import './Menu.css'; // Asegúrate de crear este archivo para los estilos

const Figure = () => {
  return (
    <div className="menu-container">
      <div className="menu-item">
        <img src="/tree-icon.png" alt="Deforestación" className="menu-icon" />
        <span>Deforestación</span>
      </div>
      <div className="menu-item">
        <span>Erosión del suelo</span>
      </div>
      <div className="menu-item">
        <span>Pérdida de biodiversidad</span>
      </div>
      <div className="menu-item">
        <img src="/user-icon.png" alt="User Icon" className="menu-icon" />
      </div>
    </div>
  );
};

export default Figure;