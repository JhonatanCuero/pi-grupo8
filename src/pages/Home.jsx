import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Interactive from './Interactive';

const Home = () => {
  const navigate = useNavigate();


  const handleDeforesClick = () => {
    navigate('/deforestacion');
  };

  const handleErosionClick = () => {
    navigate('/erosion');
  };

  const handleBioClick = () => {
    navigate('/biodiversidad');
  };

  return (
    <div className="content">
      {/* Contenedor de Misión, Visión y Resumen */}
      <div className="main-sections">
        <div className="column">
          <Interactive/>
        </div>
        <div className="column">
          <h2>Resumen</h2>
          <p className="paragraph">La Tierra está enfrentando una serie de desafíos medioambientales críticos que afectan a todos los seres vivos.
            La desforestación, la erosión del suelo y la pérdida de biodiversidad son problemas que no solo amenazan los
            ecosistemas, sino también nuestro propio bienestar y futuro. A medida que explotamos los recursos naturales sin
            medidas de protección, estamos destruyendo hábitats, degradando suelos y perdiendo una invaluable riqueza de especies.
            Conocer y comprender estos problemas es el primer paso hacia su solución. Esta página tiene como objetivo sensibilizar
            y educar a las personas sobre estos problemas ambientales y las acciones que podemos tomar para preservarlos.</p>

          <button className="ver-mas" onClick={handleDeforesClick}>
            Ver más
          </button>
        </div>
      </div>

      {/* Contenedor de los temas ambientales */}
      <div className="topics-container">
        <div className="topic">
          <h3>Deforestación</h3>
          <p className="paragraph">La deforestación es la eliminación de árboles y vegetación en áreas forestales. Esto afecta el equilibrio
            ecológico, contribuyendo al cambio climático y la pérdida de hábitats.</p>
          <button className="ver-mas" onClick={handleDeforesClick}>
            Ver más
          </button>
        </div>
        <div className="topic">
          <h3>Erosión del Suelo</h3>
          <p className="paragraph">La erosión del suelo es el desgaste de la superficie terrestre causado por factores como el viento y el agua,
            lo cual reduce la fertilidad y afecta la agricultura.</p>
          <button className="ver-mas" onClick={handleErosionClick}>
            Ver más
          </button>
        </div>
        <div className="topic">
          <h3>Pérdida de Biodiversidad</h3>
          <p className="paragraph">La pérdida de biodiversidad es la reducción de la variedad de especies en el planeta. Esto afecta el equilibrio
            de los ecosistemas y la resiliencia natural.</p>
          <button className="ver-mas" onClick={handleBioClick}>
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

