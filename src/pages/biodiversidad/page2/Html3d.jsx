import { Html } from "@react-three/drei";

const Html3d = ({showCloudOnce}) => {
    return (
        <>
            <Html
                className="text"
                center
                distanceFactor={2}
                position={[0, 0.9, 0]}
                occlude
            >
                <h2>Presiona la tecla "Q" para cambiar el color del lago y haz click en el botón para generar contaminación</h2>
            </Html>
            <Html
                className="btn"
                //center
                distanceFactor={3}
                //transform
                position={[-1.1, 0.5, 0]}
                occlude
            >
                <button onClick={showCloudOnce }>
                    Contaminar
                </button>
            </Html>
        </>
    );
};

export default Html3d;