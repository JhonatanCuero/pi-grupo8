import { Canvas } from "@react-three/fiber";
import React from "react";
import ForestScene from "./ForestScene";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Bear from "./Bear";
import { Physics } from "@react-three/rapier";
import Texto from "./Texto"; 

const Sensibilization = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Sensibilización</h1>
      <p style={{ fontSize: "24px", color: "white" }}>
        Cada vez estamos perdiendo más territorio forestal, donde estamos a un
        10% del punto de no retorno. Esto genera pérdida de biodiversidad,
        inundaciones, golpes de calor, erosión del suelo, entre otros. ¡Cuida el
        medio ambiente reciclando!
      </p>

      <div className="container" style={{ color: "blue", width: "100%", height: "600px" }}>
        <Canvas shadows>
          <Physics>
            <Bear position={[0, 7, 0]} />
            <ForestScene />
            <Texto position={[0, 10, 0]} />
          </Physics>
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
        </Canvas>
      </div>
    </div>
  );
};

export default Sensibilization;
