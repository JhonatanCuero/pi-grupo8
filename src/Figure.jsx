import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import House from "./motion";


const Figure = () => {
    const cameraSettings = {
        position : [2, 2, 5],
    };

    return(
        <>
        <h1 className="title"> Hello this is the cosine motion </h1>
        <Canvas camera={cameraSettings}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 10, 10]} intensity={5} />
          <OrbitControls enablePan={false} />
          <House />
        </Canvas>
      </>
    );
};

export default Figure;