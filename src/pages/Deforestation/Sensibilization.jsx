
import { Canvas } from '@react-three/fiber';
import React from 'react';
import ForestScene from './ForestScene';  
import { Html, OrbitControls } from '@react-three/drei';
import Texto from './Texto';



const Sensibilization = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Sensibilización</h1>
      <p style={{ fontSize: '24px', color: 'white' }}>Cada vez estamos perdiendo mas territorio forestal, donde estamos a un 10% de el punto de ya no retorno, esto generando perdida de biodiversidad, inundaciones, golpes de calor y erosion del suelo entre otras cuida el medio ambiente recicla</p>

      <div className='container' style={{ color: "blue", width: '100%', height: '600px' }}>
          <Canvas shadows>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 10]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}  
              shadow-mapSize-height={1024}
              shadow-camera-near={0.1}
              shadow-camera-far={50}
              shadow-camera-left={-50}
              shadow-camera-right={50}
              shadow-camera-top={50}
              shadow-camera-bottom={-50}
            />
            <ForestScene /> 
            <Texto />
        </Canvas>
      </div>
    </div>
  );
};

export default Sensibilization;