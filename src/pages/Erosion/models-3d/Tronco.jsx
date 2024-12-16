import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";

const Tronco = (props) => {

    const rbTroncoRef = useRef();

    const { nodes, materials } = useGLTF('/models-3d/TreeStump.glb')

    useFrame(() => {
      rbTroncoRef.current.addForce({x: 30, y: 1, z: 1}, true);
    });

  return (
    <RigidBody type='dynamic' ref={rbTroncoRef} colliders="hull">
    <group {...props} dispose={null}>
        <group position={[19, 9, -10]} >
            <mesh
            scale={[15, 15, 15]}
            castShadow
            receiveShadow
            geometry={nodes.Stump001_1k.geometry}
            material={materials['Default OBJ']}
            rotation={[Math.PI / 2, 0, 0]}
            />
      </group>
    </group>
    </RigidBody>
  )
}
export default Tronco;