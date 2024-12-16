import { Canvas } from '@react-three/fiber';
import React, { useCallback, useRef } from 'react';
import TreeSakura from "./model-3D/TreeSakura.jsx";
import { OrbitControls, PositionalAudio } from '@react-three/drei';
import { Physics, useBox } from '@react-three/cannon';
import Lights from './Lights';
import { useNavigate } from 'react-router-dom';
import Button_Home from '../components/Button_Home.jsx';
import StagingForest from './StagingForest.jsx';
import PostProcessing from './postprocessing/PostProcessing.jsx';
//import Video from './Video.jsx';




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

  const handleNavigate = () => {
    navigate('/sensibilization');
  };


  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'white' }}>Deforestación</h1>
      <p style={{ fontSize: '20px', color: 'white' }}>
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
          <StagingForest />
          <PostProcessing />
          
        </Canvas>
      </div>
      <div onClick={handleNavigate} style={{ marginTop: '20px' }}>
        <Button_Home text="Continuar" />
      </div>
    </div>
  );
};

export default DeforestationPage;