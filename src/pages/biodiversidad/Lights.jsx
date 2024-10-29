//import { useHelper } from "@react-three/drei";
//import { useRef } from "react";
//import { DirectionalLightHelper, PointLightHelper, } from "three";

const Lights = () => {
    /*const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper);*/

    return (
        <>
            <ambientLight
                color={"#07595D"}
                intensity={3} />

            <directionalLight
                position={[10, 10, 6]}
                intensity={5} 
                castShadow
                />
                
            <pointLight
                //ref={pointLightRef}
                color={"#CC4749"}
                position={[-2, 4, -5]}
                intensity={10}
                
            />
        </>
    );
}

export default Lights;