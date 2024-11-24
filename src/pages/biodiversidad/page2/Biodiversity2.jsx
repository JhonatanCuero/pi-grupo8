import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Lake from "../models-3d/Lake";
import { OrbitControls } from "@react-three/drei";
import Html3d from "./Html3d";
import StagingSky from "./StagingSky";

const Biodiversity2 = () => {
    // Estado para controlar la visibilidad de la nube
    const [showCloud, setShowCloud] = useState(false);

    // Función para activar visibilidad de la nube
    const showCloudOnce = () => {
        if (!showCloud) {
            setShowCloud(true);
        }
    };
    
    return (
        <>
        <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Pérdida de Biodiversidad</h1>
            <h2>Sensibilización</h2>
            <p>¿Sabías que? Según Naciones Unidas, en el último siglo han desaparecido tantas especies como las que se habrían
            extinguido en 10 000 años si se asume un escenario normal. Además, el 25 por ciento de las especies evaluadas por
            la Unión Internacional para la Conservación de la Naturaleza se encuentran en peligro de extinción. Si las tendencias actuales continúan, la pérdida de biodiversidad prevista para finales de este siglo podría tardar
            millones de años en recuperarse, posiblemente más allá de nuestra propia existencia como especie", afirma Michael Benton, 
            profesor de la Universidad de Bristol.</p>
            <div style={{ width: '100%', height: '600px', marginTop: '20px' }}>
            <Canvas shadows 
            camera={{
                position: [0, 0.7, 1.9],
                fov: 60, //campo de visión
              }}
              >
                <OrbitControls
                    minPolarAngle={0} // Ángulo mínimo de elevación (0 radianes = horizonte)
                    maxPolarAngle={Math.PI / 2.1} // Ángulo máximo de elevación (90 grados = no mirar debajo del piso)
                />
                <ambientLight color={"#ffffff"} intensity={0.3} /> 
                <Lake/>
                <StagingSky showCloud={showCloud}/>
                <Html3d showCloudOnce={showCloudOnce}/>
            </Canvas>
            </div>
        </div>
        </>
    );
};

export default Biodiversity2;