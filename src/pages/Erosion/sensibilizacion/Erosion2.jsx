import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Pico from "../models-3d/Pico.jsx";
import { Html, OrbitControls } from '@react-three/drei';
import Lights from "../Lights.jsx";
import Staging from './Staging.jsx';
import './Erosion2.css';
import Arbol from '../models-3d/Arbol.jsx';
import Maquina from '../models-3d/Maquina.jsx';
import Button_Home from '../Button_Home.jsx';
import { useNavigate } from 'react-router-dom';

const Erosion2 = () => {

  const navigate = useNavigate();

  const handleEro3Click = () => {
    navigate('/erosion3');
  };

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{color: 'lightgray'}}>
          La importancia de la erosión
          </h1>
        <p style={{ color: 'lightgray' }}>
          ¿Sabías que la erosión del suelo a pesar de que puede ser ocasionada de forma natural, es causada en su mayoría por humanos?
          La maquinaria, deforestación y minería son sus principales causantes, teniendo varias consecuencias como
          el desplazamiento de personas, mayor riesgo de inundaciones y un deterioro en la biodiversidad y el agua.
        </p>
      <div style={{ width: '100%', height: '600px' }}>
        <Canvas  shadows 
        camera={{
          position: [0, 20, 75],
          fov: 50,
        }}
        >
          <Html 
          occlude
            center
            distanceFactor={15}
            position={[-10, 8, 0]}>
              <h1
            style={{
              color: 'pink',
              fontSize: "75pt"}}>Minería</h1>
          </Html>

          <Html 
          occlude
            center
            distanceFactor={15}
            position={[-15, 10, 35]}>
              <h1
            style={{
              color: 'Cyan',
              fontSize: "75pt"}}>Haz click sobre el árbol para cortarlo</h1>
          </Html>

          <Html 
          occlude
            center
            distanceFactor={15}
            position={[20, 15, 0]}>
            <h1
            style={{
              color: 'pink',
              fontSize: "75pt"}}>Maquinaria</h1>
          </Html>

          <Html
            occlude
            center
            distanceFactor={15}
            position={[6, 10, 28]}>
            <h1
            style={{
              color: 'pink',
              fontSize: "75pt"}}>Deforestación</h1>
          </Html>

          <OrbitControls 
          minPolarAngle={0} // Ángulo mínimo de elevación (0 radianes = horizonte)
          maxPolarAngle={Math.PI / 2.1} // Ángulo máximo de elevación (90 grados = no mirar debajo del piso)
          minDistance={100}
          maxDistance={150}
          />
          <Lights />
          <Staging />
          <mesh position-y={10}>
          <Pico />
          <Arbol />
          <Maquina />
          </mesh>
        </Canvas>
        <div onClick={handleEro3Click} style={{ float: 'right', padding: '10px'}}>
            <Button_Home text={"Continuar"}/>
          </div>
      </div>
    </div>
    </>
  );
};

export default Erosion2;
//Miguel Ángel Echeverry Solarte