import React from 'react';
import { Canvas } from "@react-three/fiber";
import Zorro from "./models-3d/Zorro.jsx";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";

const BiodiversityPage = () => {
  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Pérdida de Biodiversidad</h1>
        <p>La pérdida de biodiversidad se refiere a la desaparición de especies y ecosistemas a nivel global, lo que amenaza la estabilidad y resiliencia de los ecosistemas naturales.</p>
        
        <div style={{ width: '100%', height: '600px' }}>
          <Canvas shadows>
            <OrbitControls />
            <Lights />
            <Zorro />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default BiodiversityPage;
//Jhonatan Andres Cuero Chirino