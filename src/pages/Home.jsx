import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

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
          <h2>Misión</h2>
          <p className='paragraph'>Concientizar y educar a los usuarios sobre los problemas medioambientales relacionados con la desforestación,
            la erosión del suelo y la pérdida de biodiversidad, utilizando tecnología web 3D para ofrecer una experiencia
            interactiva e inmersiva que fomente el conocimiento, la reflexión y la acción hacia un futuro más sostenible.</p>
          <h2>Visión</h2>
          <p className='paragraph'>Ser una plataforma de referencia en la educación ambiental, contribuyendo a la formación de una generación
            consciente y comprometida con la preservación del medio ambiente, y promoviendo el uso de tecnologías innovadoras
            para transformar la manera en que percibimos y actuamos frente a los desafíos medioambientales.</p>
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
          <p>La deforestación es la eliminación de árboles y vegetación en áreas forestales. Esto afecta el equilibrio
            ecológico, contribuyendo al cambio climático y la pérdida de hábitats.</p>
          <button className="ver-mas" onClick={handleDeforesClick}>
            Ver más
          </button>
        </div>
        <div className="topic">
          <h3>Erosión del Suelo</h3>
          <p>La erosión del suelo es el desgaste de la superficie terrestre causado por factores como el viento y el agua,
            lo cual reduce la fertilidad y afecta la agricultura.</p>
          <button className="ver-mas" onClick={handleErosionClick}>
            Ver más
          </button>
        </div>
        <div className="topic">
          <h3>Pérdida de Biodiversidad</h3>
          <p>La pérdida de biodiversidad es la reducción de la variedad de especies en el planeta. Esto afecta el equilibrio
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

