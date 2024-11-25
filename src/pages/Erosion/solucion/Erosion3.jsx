import React from 'react';
import { Canvas } from '@react-three/fiber';
import Staging from './Staging.jsx';
import { OrbitControls } from '@react-three/drei';
import Lights from "../Lights.jsx";
import { useNavigate } from 'react-router-dom';
import WelcomeText from './Text.jsx';
import Button_Home from '../Button_Home.jsx';
import Stop from '../models-3d/Stop.jsx';
import Terreno from '../models-3d/Terreno.jsx';
import { Physics } from "@react-three/rapier";
import Tronco from '../models-3d/Tronco.jsx';

const ErosionPage = () => {
  const navigate = useNavigate();

  const handleEro2Click = () => {
    navigate("/biodiversidad");
  };

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{color: 'lightgray'}}>
          ¿Cómo podemos solucionar este problema?
          </h1>
      <div style={{ width: '100%', height: '600px' }}>
        <Canvas shadows 
        camera={{
          position: [0, 9, 60],
          fov: 50,
        }}
        >
          <OrbitControls 
          minPolarAngle={0} // Ángulo mínimo de elevación (0 radianes = horizonte)
          maxPolarAngle={Math.PI / 2.1} // Ángulo máximo de elevación (90 grados = no mirar debajo del piso)
          minDistance={50}
          maxDistance={95}
          minAzimuthAngle={Math.PI / -5}
          maxAzimuthAngle={Math.PI / 5}
          />
          <Lights />
          <Staging />
          <WelcomeText />
          <Physics >
            <Stop />
            <Tronco />
            <Terreno />
          </Physics>
        </Canvas>
        <div onClick={handleEro2Click} style={{ float: 'right', padding: '10px'}}>
            <Button_Home text={"Siguiente Tema"}/>
          </div>
      </div>
    </div>
    </>
  );
};

export default ErosionPage;
//Miguel Ángel Echeverry Solarte

//<p style={{ color: 'lightgray' }}>

//</p>