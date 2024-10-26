import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();


  const handleVerMasClick = () => {
    navigate('/deforestacion');
  };

  return (
    <div className="content">
      <div className="column">
        <h2>Misión</h2>
        <p>Nuestra misión es...</p>
        <h2>Visión</h2>
        <p>Nuestra visión es...</p>
      </div>
      <div className="column">
        <h2>Resumen</h2>
        <p>Vamos a tratar el tema de la deforestación, erosión del suelo y pérdida de biodiversidad.</p>

        <button className="ver-mas" onClick={handleVerMasClick}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Home;

