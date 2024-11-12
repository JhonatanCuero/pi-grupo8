import { Canvas } from '@react-three/fiber';
import React from 'react';
import TreeSakura from "./model-3D/TreeSakura.jsx";
import { OrbitControls } from '@react-three/drei';
import { Physics, useBox } from '@react-three/cannon';
import Lights from './Lights';
import { useNavigate } from 'react-router-dom';

const TreeWithPhysics = () => {
  const [ref] = useBox(() => ({
    mass: 0, 
    position: [0, 0, 0], 
    args: [2, 5, 2], 
  }));

  

  return (
    <mesh ref={ref}>
      <TreeSakura /> 
    </mesh>
  );
};

const DeforestationPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'white' }}>Deforestación</h1>
      <p style={{ fontSize: '24px', color: 'white' }}>
        La deforestación es un gran problema de la humanidad donde las consecuencias van a ser heredadas por nuestros hijos o siguientes generaciones si no hacemos un cambio. Primero, ¿qué es la deforestación?
        La deforestación se refiere a la eliminación de las áreas de bosques para la creación de terrenos agrícolas, infraestructuras o extracción de madera, afectando a todo el ecosistema, causando efectos que pueden acabar con la vida del planeta debido a estos efectos.
      </p>
      <div style={{ width: '100%', height: '600px' }}>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
          <OrbitControls enableZoom={true} />
          <Lights />
          <Physics>
            <TreeWithPhysics /> 
          </Physics>
        </Canvas>
      </div>
      <button
        onClick={() => navigate('/sensibilization')} 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Sensibilización
      </button>
    </div>
  );
};

export default DeforestationPage;
