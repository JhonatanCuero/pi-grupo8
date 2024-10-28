import { Canvas } from '@react-three/fiber';
import React from 'react';
import TreeSakura from './Model-3D/TreeSakura';
import { OrbitControls } from '@react-three/drei';
import { Physics, useBox } from '@react-three/cannon';

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
  return (
    <div style={{ padding: '20px', textAlign: 'center'}}>
      <h1>Deforestación</h1>
      <p style={{ color: 'white' }}>
        La deforestación un gran problema de la humanidad donde las consecuencias van a ser heredadas por nuestros hijos o siguientes generaciones si no hacemos un cambio, primero ¿qué es la deforestación?
        La deforestación se refiere a la eliminación de las áreas de bosques, para la creación de terrenos agrícolas, infraestructuras o extracción de madera afectando a todo el ecosistema causando verdaderos efectos que pueden acabar con la vida del planeta debido a estos efectos.
      </p>
      <div style={{ width: '100%', height: '600px' }}>
        <Canvas  shadows camera={{ position: [0, 2, 5], fov: 50 }}>
          <OrbitControls enableZoom={true}/>
          <ambientLight/>
          <directionalLight position={[10, 10, 10]} intensity={5}/>
          <TreeSakura />
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1}
          />

          <Physics>
            <TreeWithPhysics /> 
          </Physics>
          
        </Canvas>
      </div>
    </div>
    
  );
};

export default DeforestationPage;
