import React from 'react';
import { Canvas } from '@react-three/fiber';
import Suelo from "../models-3d/Suelo.jsx";
import { OrbitControls } from '@react-three/drei';
import Lights from "../Lights.jsx";
import Staging from './Staging.jsx';
import { useNavigate } from 'react-router-dom';
import Button_Home from '../Button_Home.jsx';
import Video from '../Video.jsx';

const ErosionPage = () => {
  const navigate = useNavigate();

  const handleEro2Click = () => {
    navigate('/erosion2');
  };

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{color: 'lightgray'}}>
          Erosión del Suelo
          </h1>
        <p style={{ color: 'lightgray' }}>
          La erosión del suelo es una problemática bastante grave en el terreno del planeta, ya que implica un desgaste el cual puede ocasionar daños al medio ambiente.
          Es un proceso en el cual se va perdiendo la capa superficial del suelo, que proporciona a las plantas la mayoría de los nutrientes y el agua que necesitan.
          Es la causa de la desertificación y de que algunos suelos se vean agrietados.
        </p>
      <div style={{ width: '100%', height: '600px' }}>
        <Canvas shadows 
        camera={{
          position: [-7, 9, -20],
          fov: 50,
        }}
        >
          <OrbitControls 
          minPolarAngle={0} // Ángulo mínimo de elevación (0 radianes = horizonte)
          maxPolarAngle={Math.PI / 2.1} // Ángulo máximo de elevación (90 grados = no mirar debajo del piso)
          minDistance={20}
          maxDistance={50}
          />
          <Lights />
          <Staging />
          <Suelo  />
          <Video name="screen" position={[0, 6, -16]} scale={15} />
        </Canvas>
        <div onClick={handleEro2Click} style={{ float: 'right', padding: '10px'}}>
            <Button_Home text={"Continuar"}/>
          </div>
      </div>
    </div>
    </>
  );
};

export default ErosionPage;
//Miguel Ángel Echeverry Solarte