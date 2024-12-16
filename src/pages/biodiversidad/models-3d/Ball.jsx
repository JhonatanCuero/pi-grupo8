import { RigidBody } from "@react-three/rapier";

const Ball = (props) => {
    return (
       <RigidBody colliders="ball">
        <mesh {...props}>
            <sphereGeometry args={[2,32,32]}/>
            <meshStandardMaterial color={"blue"}/>          
        </mesh>
       </RigidBody> 
    );
};

export default Ball;