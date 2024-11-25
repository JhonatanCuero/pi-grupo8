import React, { useEffect, useState } from "react";
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

    // Asegurarse de que la página inicie desde el tope
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <Lake />
                        <StagingSky showCloud={showCloud} />
                        <Html3d showCloudOnce={showCloudOnce} />
                    </Canvas>
                </div>
                <h2>Soluciones</h2>
                <p><b>Existen acciones que el ser humano puede realizar en conjunto para dar solución a la pérdida de biodiversidad.</b></p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ul style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'left', margin: 0 }}>
                        <li >Preservar y restaurar hábitats: Participa en actividades de restauración de hábitats naturales, como la reforestación o la creación de jardines nativos. Además, evita la destrucción de hábitats naturales y apoya la creación de áreas protegidas.</li>
                        <br /><li>Utilizar recursos de manera responsable: Reduce tu consumo de recursos naturales, como el agua y la energía. Opta por productos sostenibles y promueve la economía circular.</li>
                        <br /><li>Promover la agricultura sostenible: Apoya a los agricultores que utilizan prácticas agrícolas sostenibles, como la agricultura orgánica o la agroecología. Además, consume alimentos locales y de temporada.</li>
                        <br /><li>Fomentar la educación ambiental: Participa en programas de educación ambiental y comparte tus conocimientos sobre la importancia de la biodiversidad con otras personas. Promueve la conservación en tu comunidad.</li>
                        <br /><li>Combatir las especies invasoras: Aprende a identificar y controlar las especies invasoras en tu área. Evita la introducción de especies exóticas y denuncia su presencia a las autoridades competentes.</li>
                        <br /><li>Apoyar la investigación y la conservación: Contribuye económicamente a organizaciones y proyectos dedicados a la investigación y conservación de la biodiversidad. Participa en actividades de monitoreo de especies y hábitats.</li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Biodiversity2;