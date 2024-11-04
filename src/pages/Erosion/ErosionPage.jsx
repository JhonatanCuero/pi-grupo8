import React from 'react';
import { Canvas } from '@react-three/fiber';
import Suelo from "./models-3d/Suelo.jsx";
import { OrbitControls } from '@react-three/drei';
import Lights from "./Lights.jsx";

const ErosionPage = () => {
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
        <Canvas  shadows>
          <OrbitControls />
          <Lights />
          <mesh position-y={-2}>
          <Suelo  />
          </mesh>
        </Canvas>
      </div>
    </div>
    </>
  );
};

export default ErosionPage;
//Miguel Ángel Echeverry Solarte