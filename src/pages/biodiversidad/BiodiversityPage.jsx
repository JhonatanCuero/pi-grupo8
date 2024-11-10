import React from 'react';
import { Canvas } from "@react-three/fiber";
import Zorro from "./models-3d/Zorro.jsx";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import Staging from './Staging.jsx';
import { useNavigate } from 'react-router-dom';

const BiodiversityPage = () => {
  const navigate = useNavigate();

  const handleBio2Click = () => {
    navigate('/biodiversidad2');
  };

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Pérdida de Biodiversidad</h1>
        <p style={{ color: 'lightgray' }}>La pérdida de biodiversidad se refiere a la desaparición de especies y ecosistemas a nivel global, lo que amenaza la estabilidad y resiliencia de los ecosistemas naturales.</p>
        <div style={{ width: '100%', height: '600px' }}>
          <Canvas shadows
            camera={{
              position: [-4, 3, -20],
              fov: 50,             //campo de visión
            }}
          >
            <OrbitControls />
            <Lights />
            <Staging />
            <Zorro />
          </Canvas>
          <button onClick={handleBio2Click}>
            Continuar
          </button>
        </div>
      </div>
    </>
  );
};

export default BiodiversityPage;
//Jhonatan Andres Cuero Chirino