import React from 'react';
import { Canvas } from "@react-three/fiber";
import Zorro from "../models-3d/Zorro.jsx";
import Ball from '../models-3d/Ball.jsx';
import { OrbitControls } from "@react-three/drei";
import Lights from "../Lights.jsx";
import StagingForest from './StagingForest.jsx';
import { useNavigate } from 'react-router-dom';
import Button_Home from '../../components/Button_Home.jsx';
import TextBio from './TextBio.jsx';
import { Physics } from '@react-three/rapier';

const BiodiversityPage = () => {
  const navigate = useNavigate();

  const handleBio2Click = () => {
    navigate('/biodiversidad2');
  };

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Pérdida de Biodiversidad</h1>
        <h2>Introducción</h2>
        <p>La pérdida de biodiversidad se refiere a la desaparición de especies y ecosistemas a nivel global,
          lo que amenaza la estabilidad y resiliencia de los ecosistemas naturales. El término biodiversidad hace
          referencia a toda la variedad de seres vivos del planeta, desde organismos individuales hasta los complejos
          ecosistemas que conforman, como praderas, bosques, selvas, ecosistemas de agua dulce y salada, etc. </p>
        <p> Esta pérdida de biodiversidad se debe a diversos factores entre los que se encuentran principalmente: </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'left', margin: 0 }}>
            <li >Sobreexplotación del medio natural.</li>
            <li>Pérdida de los hábitats de las especies.</li>
            <li>Contaminación del medio ambiente.</li>
            <li>Introducción de especies exóticas invasoras.</li>
            <li>Efectos del cambio climático.</li>
          </ul>
        </div>
        <div style={{ width: '100%', height: '600px', marginTop: '20px' }}>
          <Canvas shadows
            camera={{
              position: [-4, 3, -20],
              fov: 50, //campo de visión
            }}
          >
            <OrbitControls />
            <Lights />
            <StagingForest />
            <Physics>
              <Zorro />
              <Ball position = {[1,35,1]} />
            </Physics>
            <TextBio />
          </Canvas>
          <div onClick={handleBio2Click} style={{ float: 'right', padding: '10px' }}>
            <Button_Home text={"Continuar"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BiodiversityPage;
//Jhonatan Andres Cuero Chirino