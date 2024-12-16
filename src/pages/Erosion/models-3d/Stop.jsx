import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Stop = (props) => {

  const rbStopRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === "z") { // Cambia 'c' a cualquier tecla que prefieras
            rbStopRef.current.applyImpulse({x: 0, y: 600, z: 60}, true); 
        }
    };

    // Agregar el evento de escucha
    window.addEventListener("keydown", handleKeyDown);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("keydown", handleKeyDown);
}, []);

  const { nodes, materials } = useGLTF("/models-3d/Stop.glb")
  
  return (
    <RigidBody type='dynamic' ref={rbStopRef} >
    <group {...props} dispose={null}>
      <group name="Scene" position={[-19, 2, -10]} scale={7} rotation-y={-12}>
        <mesh
          name="1_003_low"
          castShadow
          receiveShadow
          geometry={nodes['1_003_low'].geometry}
          material={materials['Material.001']}
          position={[0, 1.444, -0.064]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="1_001_low"
          castShadow
          receiveShadow
          geometry={nodes['1_001_low'].geometry}
          material={materials['Material.001']}
          position={[0, 1.13, -0.003]}
          rotation={[0, 0.396, 0]}
        />
        <mesh
          name="1_005_low"
          castShadow
          receiveShadow
          geometry={nodes['1_005_low'].geometry}
          material={materials['Material.001']}
          position={[0, 0.49, -0.04]}
        />
        <mesh
          name="1_004_low"
          castShadow
          receiveShadow
          geometry={nodes['1_004_low'].geometry}
          material={materials['Material.001']}
        />
        <mesh
          name="1_002_low"
          castShadow
          receiveShadow
          geometry={nodes['1_002_low'].geometry}
          material={materials['Material.001']}
          position={[0, 1.445, 0.005]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
    </RigidBody>
  )
}

export default Stop;