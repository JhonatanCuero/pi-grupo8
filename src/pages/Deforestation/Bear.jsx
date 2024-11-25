import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Bear = (props) => {
  const bearRef = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/uploads_files_3842645_bear.glb");
  const { actions } = useAnimations(animations, bearRef);

  useEffect(() => {
    if (actions && actions["Idle"]) {
      actions["Idle"].reset().fadeIn(0.5).play(); 
    }
    return () => {
      if (actions && actions["Idle"]) actions["Idle"].stop();
    };
  }, [actions]);

  return (
    <RigidBody
      type="dynamic"
      colliders="cuboid" 
      position={[0, 2, 0]} 
      rotation={[0, 0, 0]} 
      restitution={0.2} 
      friction={1} 
    >
      <group
        ref={bearRef}
        {...props}
        dispose={null}
        scale={[1, 1, 1]} 
        position={[0, -1, 0]} 
      >
        <group name="Scene001">
          <group name="metarig003" position={[0.196, 0, 0]} scale={[1.011, 1.011, -1.011]}>
            <skinnedMesh
              name="Sphere_005005"
              geometry={nodes.Sphere_005005.geometry}
              material={materials["Sphere_005.002"]}
              skeleton={nodes.Sphere_005005.skeleton}
            />
            <primitive object={nodes.spine_1} />
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Bear;

useGLTF.preload("/models-3d/uploads_files_3842645_bear.glb");
