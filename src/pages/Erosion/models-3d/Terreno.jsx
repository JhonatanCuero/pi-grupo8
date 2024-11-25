import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Terreno = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/Terreno.glb")
  return (
    <RigidBody type='fixed' colliders="trimesh">
    <group {...props} dispose={null}>
      <group name="AuxScene">
        <group scale={0.25}>
          <group name="Terrain" position={[0, 0, 0]}>
            <group
              name="6284c182-30af-4e0f-8336-761921b5b6a5"
              position={[-42.815, -17.13, 78.48]}
              rotation={[-Math.PI, 1.047, -Math.PI]}>
              <group name="64f3fe0e-2448-4dbc-8dc0-63bbab279e72" position={[1.677, 5.875, 3.249]}>
                <mesh
                  name="box"
                  castShadow
                  receiveShadow
                  geometry={nodes.box.geometry}
                  material={nodes.box.material}
                  position={[-1.195, -1.007, 0.69]}
                  rotation={[1.571, 0, 1.047]}
                  scale={[0.25, 0.25, 0.5]}
                />
                <mesh
                  name="box_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_1.geometry}
                  material={nodes.box_1.material}
                  position={[1.163, 0.653, -0.671]}
                  rotation={[1.702, 0.225, 1.03]}
                  scale={[0.25, 0.499, 0.25]}
                />
                <mesh
                  name="box_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_2.geometry}
                  material={nodes.box_2.material}
                  position={[1.087, 0.5, -0.627]}
                  rotation={[1.703, 0.226, 1.031]}
                  scale={[0.25, 0.25, 0.5]}
                />
                <mesh
                  name="box_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_3.geometry}
                  material={nodes.box_3.material}
                  position={[-0.043, 0.539, 0.025]}
                  rotation={[1.701, 0.225, 1.03]}
                  scale={[0.25, 0.25, 0.249]}
                />
                <mesh
                  name="box_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_4.geometry}
                  material={nodes.box_4.material}
                  position={[0.041, 0.177, -0.024]}
                  rotation={[1.703, 0.226, 1.031]}
                  scale={[0.25, 0.25, 0.5]}
                />
                <mesh
                  name="box_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_5.geometry}
                  material={nodes.box_5.material}
                  position={[1.477, 0.75, -0.853]}
                  rotation={[1.701, 0.225, 1.03]}
                  scale={[0.25, 0.25, 0.249]}
                />
                <mesh
                  name="box_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_6.geometry}
                  material={nodes.box_6.material}
                  position={[0.975, 0.983, -0.563]}
                  rotation={[1.703, 0.226, 1.031]}
                  scale={[0.25, 0.25, 0.5]}
                />
                <mesh
                  name="box_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_7.geometry}
                  material={nodes.box_7.material}
                  position={[0.174, 0.088, -0.1]}
                  rotation={[1.701, 0.225, 1.031]}
                  scale={[0.25, 1.998, 0.249]}
                />
                <mesh
                  name="box_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_8.geometry}
                  material={nodes.box_8.material}
                  position={[-0.795, -0.082, 0.459]}
                  rotation={[1.703, 0.226, 1.031]}
                  scale={[0.25, 0.25, 0.5]}
                />
                <mesh
                  name="box_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_9.geometry}
                  material={nodes.box_9.material}
                  position={[-0.92, -0.492, 0.531]}
                  rotation={[2.034, 0.659, 0.887]}
                  scale={[0.25, 1, 0.25]}
                />
                <mesh
                  name="truncatedPyramid4"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4.geometry}
                  material={nodes.truncatedPyramid4.material}
                  position={[-1.38, -0.668, 0.797]}
                  rotation={[0, 0.523, 0.785]}
                  scale={[0.25, 1, 0.25]}
                />
              </group>
              <group name="61421649-12a4-49fb-9471-e63ca00342c5" position={[-1.677, 5.875, 3.249]}>
                <mesh
                  name="box_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_10.geometry}
                  material={nodes.box_10.material}
                  position={[0.921, -0.492, 0.531]}
                  rotation={[1.107, 0.659, 2.255]}
                  scale={[0.25, 0.249, 1]}
                />
                <mesh
                  name="box_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_11.geometry}
                  material={nodes.box_11.material}
                  position={[-0.174, 0.088, -0.1]}
                  rotation={[0.491, 0.991, 2.721]}
                  scale={[0.25, 0.25, 2]}
                />
                <mesh
                  name="box_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_12.geometry}
                  material={nodes.box_12.material}
                  position={[0.795, -0.082, 0.459]}
                  rotation={[0.492, 0.991, 2.72]}
                  scale={[0.25, 0.5, 0.25]}
                />
                <mesh
                  name="box_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_13.geometry}
                  material={nodes.box_13.material}
                  position={[-0.974, 0.983, -0.563]}
                  rotation={[0.492, 0.991, 2.72]}
                  scale={[0.25, 0.5, 0.25]}
                />
                <mesh
                  name="box_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_14.geometry}
                  material={nodes.box_14.material}
                  position={[-1.163, 0.653, -0.671]}
                  rotation={[0.491, 0.992, 2.721]}
                  scale={[0.25, 0.25, 0.5]}
                />
                <mesh
                  name="box_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_15.geometry}
                  material={nodes.box_15.material}
                  position={[0.043, 0.539, 0.025]}
                  rotation={[0.491, 0.991, 2.721]}
                  scale={0.25}
                />
                <mesh
                  name="box_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_16.geometry}
                  material={nodes.box_16.material}
                  position={[-1.477, 0.75, -0.853]}
                  rotation={[0.491, 0.991, 2.721]}
                  scale={0.25}
                />
                <mesh
                  name="box_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_17.geometry}
                  material={nodes.box_17.material}
                  position={[-1.087, 0.5, -0.627]}
                  rotation={[0.492, 0.991, 2.72]}
                  scale={[0.25, 0.5, 0.25]}
                />
                <mesh
                  name="box_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_18.geometry}
                  material={nodes.box_18.material}
                  position={[-0.041, 0.177, -0.024]}
                  rotation={[0.492, 0.991, 2.72]}
                  scale={[0.25, 0.5, 0.25]}
                />
                <mesh
                  name="truncatedPyramid4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_1.geometry}
                  material={nodes.truncatedPyramid4_1.material}
                  position={[1.38, -0.668, 0.797]}
                  rotation={[0, -0.523, -0.785]}
                  scale={[0.25, 1, 0.25]}
                />
                <mesh
                  name="box_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_19.geometry}
                  material={nodes.box_19.material}
                  position={[1.195, -1.007, 0.69]}
                  rotation={[1.571, 0, 2.093]}
                  scale={[0.25, 0.25, 0.5]}
                />
              </group>
              <group name="0ad1f254-c82a-4175-a52a-f1fc7cd12373" position={[0, -0.96, 0]}>
                <mesh
                  name="cornerPyramid3"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3.geometry}
                  material={nodes.cornerPyramid3.material}
                  position={[-0.75, 4.329, 5.504]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[0.5, 1, 3]}
                />
                <mesh
                  name="cornerPyramid3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_1.geometry}
                  material={nodes.cornerPyramid3_1.material}
                  position={[-0.75, 3.329, 2.004]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[3, 2, 0.5]}
                />
                <mesh
                  name="cornerPyramid3_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_2.geometry}
                  material={nodes.cornerPyramid3_2.material}
                  position={[-0.75, 5.329, 3.504]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 1, 0.5]}
                />
                <mesh
                  name="box_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_20.geometry}
                  material={nodes.box_20.material}
                  position={[0, 0.829, 2.504]}
                  scale={[2, 2, 1]}
                />
                <group name="360eb1a7-8b4e-494f-b7d0-0eb14c481fa3" position={[0, 0.829, -5.995]} />
                <mesh
                  name="box_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_21.geometry}
                  material={nodes.box_21.material}
                  position={[0, 1.579, -5.87]}
                  scale={[2, 0.5, 0.75]}
                />
                <mesh
                  name="box_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_22.geometry}
                  material={nodes.box_22.material}
                  position={[0, 0.329, -5.87]}
                  scale={[1, 1, 0.75]}
                />
                <mesh
                  name="box_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_23.geometry}
                  material={nodes.box_23.material}
                  position={[0, 1.079, -5.87]}
                  scale={[2, 0.5, 0.75]}
                />
                <mesh
                  name="wedge"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge.geometry}
                  material={nodes.wedge.material}
                  position={[1.5, -0.671, 2.504]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                />
                <mesh
                  name="cornerPyramid3_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_3.geometry}
                  material={nodes.cornerPyramid3_3.material}
                  position={[2.125, 1.079, 2.504]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[1, 0.25, 1]}
                />
                <mesh
                  name="wedge_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_1.geometry}
                  material={nodes.wedge_1.material}
                  position={[2.125, 0.203, 2.504]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.25, 1, 0.75]}
                />
                <mesh
                  name="cornerPyramid3_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_4.geometry}
                  material={nodes.cornerPyramid3_4.material}
                  position={[2.125, -0.671, 2.504]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.25, 1, 1]}
                />
                <mesh
                  name="wedge_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_2.geometry}
                  material={nodes.wedge_2.material}
                  position={[1.5, 2.204, -1.245]}
                  scale={[1, 0.75, 6]}
                />
                <mesh
                  name="wedge_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_3.geometry}
                  material={nodes.wedge_3.material}
                  position={[-1.5, 2.204, -1.245]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[1, 0.75, 6]}
                />
                <mesh
                  name="wedge_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_4.geometry}
                  material={nodes.wedge_4.material}
                  position={[-2.25, 0.329, -5.87]}
                  rotation={[Math.PI / 2, 0, Math.PI]}
                  scale={[0.5, 0.75, 1]}
                />
                <mesh
                  name="cornerPyramid3_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_5.geometry}
                  material={nodes.cornerPyramid3_5.material}
                  position={[-2.25, -1.171, -5.87]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={[2, 0.5, 0.75]}
                />
                <mesh
                  name="cornerPyramid3_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_6.geometry}
                  material={nodes.cornerPyramid3_6.material}
                  position={[-2.25, 1.329, -5.87]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.75, 0.5]}
                />
                <mesh
                  name="wedge_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_5.geometry}
                  material={nodes.wedge_5.material}
                  position={[-1.5, 1.329, -5.87]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.75, 1]}
                />
                <mesh
                  name="truncatedPyramid4_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_2.geometry}
                  material={nodes.truncatedPyramid4_2.material}
                  position={[-1.5, -4.607, -5.124]}
                  rotation={[-0.262, 0, 0]}
                  scale={[0.5, 6, 0.5]}
                />
                <mesh
                  name="wedge_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_6.geometry}
                  material={nodes.wedge_6.material}
                  position={[-2.25, 1.329, -4.995]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[1, 0.5, 1]}
                />
                <mesh
                  name="cornerPyramid3_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_7.geometry}
                  material={nodes.cornerPyramid3_7.material}
                  position={[-2.25, 1.329, -3.995]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[1, 0.5, 1]}
                />
                <mesh
                  name="wedge_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_7.geometry}
                  material={nodes.wedge_7.material}
                  position={[-1.5, 0.829, -5.245]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[2, 1, 2]}
                />
                <mesh
                  name="cornerPyramid3_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_8.geometry}
                  material={nodes.cornerPyramid3_8.material}
                  position={[-1.5, -0.671, -4.995]}
                  rotation={[Math.PI, -Math.PI / 2, 0]}
                  scale={[2, 1, 1]}
                />
                <mesh
                  name="cornerPyramid4"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid4.geometry}
                  material={nodes.cornerPyramid4.material}
                  position={[-1.875, -2.671, -4.745]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[0.25, 1, 0.5]}
                />
                <mesh
                  name="wedge_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_8.geometry}
                  material={nodes.wedge_8.material}
                  position={[-1.125, -2.671, -5.245]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[1, 0.25, 0.5]}
                />
                <mesh
                  name="wedge_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_9.geometry}
                  material={nodes.wedge_9.material}
                  position={[-1.875, -2.671, -5.245]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={[1, 0.25, 0.5]}
                />
                <mesh
                  name="wedge_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_10.geometry}
                  material={nodes.wedge_10.material}
                  position={[-1.5, -2.671, -4.745]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.5, 0.5]}
                />
                <mesh
                  name="wedge_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_11.geometry}
                  material={nodes.wedge_11.material}
                  position={[-1.5, -2.671, -5.62]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.5]}
                />
                <mesh
                  name="box_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_24.geometry}
                  material={nodes.box_24.material}
                  position={[-1.5, -2.671, -5.245]}
                  scale={[0.5, 1, 0.5]}
                />
                <mesh
                  name="box_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_25.geometry}
                  material={nodes.box_25.material}
                  position={[-1.5, 0.329, -5.87]}
                  scale={[1, 1, 0.75]}
                />
                <mesh
                  name="wedge_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_12.geometry}
                  material={nodes.wedge_12.material}
                  position={[-1.5, -1.171, -5.87]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[2, 0.75, 1]}
                />
                <mesh
                  name="box_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_26.geometry}
                  material={nodes.box_26.material}
                  position={[-2.25, 0.329, -4.995]}
                  scale={[0.5, 1, 1]}
                />
                <mesh
                  name="wedge_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_13.geometry}
                  material={nodes.wedge_13.material}
                  position={[-2.25, -1.171, -4.995]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={[2, 0.5, 1]}
                />
                <mesh
                  name="cornerPyramid3_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_9.geometry}
                  material={nodes.cornerPyramid3_9.material}
                  position={[-2.25, -1.171, -3.995]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[2, 1, 0.5]}
                />
                <mesh
                  name="wedge_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_14.geometry}
                  material={nodes.wedge_14.material}
                  position={[-2.25, 0.329, -3.995]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.5, 1, 1]}
                />
                <mesh
                  name="truncatedPyramid4_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_3.geometry}
                  material={nodes.truncatedPyramid4_3.material}
                  position={[-1.5, -3.546, -5.37]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[0.5, 1.5, 0.75]}
                />
                <mesh
                  name="box_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_27.geometry}
                  material={nodes.box_27.material}
                  position={[-1.5, -0.171, -4.995]}
                  scale={[1, 4, 1]}
                />
                <mesh
                  name="truncatedPyramid4_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_4.geometry}
                  material={nodes.truncatedPyramid4_4.material}
                  position={[1.5, -3.546, -5.37]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[0.5, 1.5, 0.75]}
                />
                <mesh
                  name="cornerPyramid3_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_10.geometry}
                  material={nodes.cornerPyramid3_10.material}
                  position={[2.25, -1.171, -5.87]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.75, 0.5, 2]}
                />
                <mesh
                  name="wedge_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_15.geometry}
                  material={nodes.wedge_15.material}
                  position={[1.5, -1.171, -5.87]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[2, 0.75, 1]}
                />
                <mesh
                  name="box_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_28.geometry}
                  material={nodes.box_28.material}
                  position={[1.5, -2.671, -5.245]}
                  scale={[0.5, 1, 0.5]}
                />
                <mesh
                  name="wedge_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_16.geometry}
                  material={nodes.wedge_16.material}
                  position={[1.5, -2.671, -5.62]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.5]}
                />
                <mesh
                  name="wedge_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_17.geometry}
                  material={nodes.wedge_17.material}
                  position={[1.125, -2.671, -5.245]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={[1, 0.25, 0.5]}
                />
                <mesh
                  name="wedge_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_18.geometry}
                  material={nodes.wedge_18.material}
                  position={[-1.5, -1.171, -3.995]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[2, 1, 1]}
                />
                <mesh
                  name="cornerPyramid4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid4_1.geometry}
                  material={nodes.cornerPyramid4_1.material}
                  position={[-1.125, -2.671, -4.745]}
                  rotation={[Math.PI, Math.PI / 2, 0]}
                  scale={[0.5, 1, 0.25]}
                />
                <mesh
                  name="wedge_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_19.geometry}
                  material={nodes.wedge_19.material}
                  position={[0, -0.671, -5.745]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1, 1, 2]}
                />
                <mesh
                  name="cornerPyramid4_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid4_2.geometry}
                  material={nodes.cornerPyramid4_2.material}
                  position={[1.125, -2.671, -4.745]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[0.25, 1, 0.5]}
                />
                <mesh
                  name="wedge_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_20.geometry}
                  material={nodes.wedge_20.material}
                  position={[1.875, -2.671, -5.245]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[1, 0.25, 0.5]}
                />
                <mesh
                  name="truncatedPyramid4_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_5.geometry}
                  material={nodes.truncatedPyramid4_5.material}
                  position={[1.5, -4.607, -5.124]}
                  rotation={[-0.262, 0, 0]}
                  scale={[0.5, 6, 0.5]}
                />
                <mesh
                  name="wedge_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_21.geometry}
                  material={nodes.wedge_21.material}
                  position={[1.5, -2.671, -4.745]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.5, 0.5]}
                />
                <mesh
                  name="truncatedPyramid4_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_6.geometry}
                  material={nodes.truncatedPyramid4_6.material}
                  position={[1.5, -3.671, 1.504]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[0.5, 2, 0.5]}
                />
                <mesh
                  name="truncatedPyramid4_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_7.geometry}
                  material={nodes.truncatedPyramid4_7.material}
                  position={[1.5, -4.671, 1.504]}
                  scale={[0.5, 6, 0.5]}
                />
                <mesh
                  name="truncatedPyramid4_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_8.geometry}
                  material={nodes.truncatedPyramid4_8.material}
                  position={[1.5, -2.171, 1.504]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[1, 4, 1]}
                />
                <mesh
                  name="cornerPyramid3_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_11.geometry}
                  material={nodes.cornerPyramid3_11.material}
                  position={[-2.125, 1.079, 2.504]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[1, 0.25, 1]}
                />
                <mesh
                  name="cornerPyramid4_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid4_3.geometry}
                  material={nodes.cornerPyramid4_3.material}
                  position={[1.875, -2.671, -4.745]}
                  rotation={[Math.PI, Math.PI / 2, 0]}
                  scale={[0.5, 1, 0.25]}
                />
                <mesh
                  name="box_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_29.geometry}
                  material={nodes.box_29.material}
                  position={[1.5, -0.671, 1.504]}
                />
                <mesh
                  name="wedge_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_22.geometry}
                  material={nodes.wedge_22.material}
                  position={[1.5, -0.671, 0.754]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1, 0.5, 1]}
                />
                <mesh
                  name="wedge_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_23.geometry}
                  material={nodes.wedge_23.material}
                  position={[2.125, 1.079, 1.504]}
                  rotation={[-Math.PI, 0, -Math.PI / 2]}
                  scale={[1, 0.25, 1]}
                />
                <mesh
                  name="wedge_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_24.geometry}
                  material={nodes.wedge_24.material}
                  position={[2.125, -0.671, 1.504]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[1, 0.25, 1]}
                />
                <mesh
                  name="box_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_30.geometry}
                  material={nodes.box_30.material}
                  position={[2.125, 0.203, 1.504]}
                  scale={[0.25, 0.75, 1]}
                />
                <mesh
                  name="wedge_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_25.geometry}
                  material={nodes.wedge_25.material}
                  position={[2.125, 0.203, 0.754]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.25, 0.5, 0.75]}
                />
                <mesh
                  name="cornerPyramid3_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_12.geometry}
                  material={nodes.cornerPyramid3_12.material}
                  position={[2.125, -0.671, 0.754]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.5, 0.25, 1]}
                />
                <mesh
                  name="cornerPyramid3_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_13.geometry}
                  material={nodes.cornerPyramid3_13.material}
                  position={[2.125, 1.079, 0.754]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.25, 0.5, 1]}
                />
                <mesh
                  name="box_31"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_31.geometry}
                  material={nodes.box_31.material}
                  position={[1.5, 0.829, -1.245]}
                  scale={[1, 2, 6]}
                />
                <mesh
                  name="wedge_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_26.geometry}
                  material={nodes.wedge_26.material}
                  position={[1.5, -0.671, -1.245]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[1, 1, 6]}
                />
                <mesh
                  name="truncatedPyramid4_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_9.geometry}
                  material={nodes.truncatedPyramid4_9.material}
                  position={[-1.5, -4.671, 1.504]}
                  scale={[0.5, 6, 0.5]}
                />
                <mesh
                  name="truncatedPyramid4_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_10.geometry}
                  material={nodes.truncatedPyramid4_10.material}
                  position={[-1.5, -3.671, 1.504]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[0.5, 2, 0.5]}
                />
                <mesh
                  name="wedge_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_27.geometry}
                  material={nodes.wedge_27.material}
                  position={[2.25, 0.329, -5.87]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.5, 0.75, 1]}
                />
                <mesh
                  name="box_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_32.geometry}
                  material={nodes.box_32.material}
                  position={[1.5, 0.329, -5.87]}
                  scale={[1, 1, 0.75]}
                />
                <mesh
                  name="wedge_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_28.geometry}
                  material={nodes.wedge_28.material}
                  position={[1.5, 0.329, -5.745]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                />
                <mesh
                  name="box_33"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_33.geometry}
                  material={nodes.box_33.material}
                  position={[0.75, 0.329, -5.87]}
                  scale={[0.5, 1, 0.75]}
                />
                <mesh
                  name="wedge_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_29.geometry}
                  material={nodes.wedge_29.material}
                  position={[2.25, 1.329, -4.995]}
                  rotation={[-Math.PI, 0, -Math.PI / 2]}
                  scale={[1, 0.5, 1]}
                />
                <mesh
                  name="cornerPyramid3_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_14.geometry}
                  material={nodes.cornerPyramid3_14.material}
                  position={[2.25, 1.329, -3.995]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[1, 0.5, 1]}
                />
                <mesh
                  name="wedge_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_30.geometry}
                  material={nodes.wedge_30.material}
                  position={[1.5, 0.829, -5.245]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[2, 1, 2]}
                />
                <mesh
                  name="box_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_34.geometry}
                  material={nodes.box_34.material}
                  position={[0, 0.329, -4.745]}
                  scale={[2, 3, 1]}
                />
                <mesh
                  name="cornerPyramid3_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_15.geometry}
                  material={nodes.cornerPyramid3_15.material}
                  position={[1.5, -0.671, -4.995]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[1, 1, 2]}
                />
                <mesh
                  name="box_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_35.geometry}
                  material={nodes.box_35.material}
                  position={[-1.5, 0.829, -1.245]}
                  scale={[1, 2, 6]}
                />
                <mesh
                  name="box_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_36.geometry}
                  material={nodes.box_36.material}
                  position={[1.5, -0.171, -4.995]}
                  scale={[1, 4, 1]}
                />
                <mesh
                  name="truncatedPyramid4_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_11.geometry}
                  material={nodes.truncatedPyramid4_11.material}
                  position={[-1.5, -2.171, 1.504]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[1, 4, 1]}
                />
                <mesh
                  name="wedge_31"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_31.geometry}
                  material={nodes.wedge_31.material}
                  position={[-1.5, -0.671, 2.504]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                />
                <mesh
                  name="wedge_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_32.geometry}
                  material={nodes.wedge_32.material}
                  position={[-1.5, -0.671, 0.754]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1, 0.5, 1]}
                />
                <mesh
                  name="wedge_33"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_33.geometry}
                  material={nodes.wedge_33.material}
                  position={[-2.125, -0.671, 1.504]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={[1, 0.25, 1]}
                />
                <mesh
                  name="wedge_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_34.geometry}
                  material={nodes.wedge_34.material}
                  position={[-2.125, 0.203, 2.504]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.25, 1, 0.75]}
                />
                <mesh
                  name="cornerPyramid3_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_16.geometry}
                  material={nodes.cornerPyramid3_16.material}
                  position={[-2.125, -0.671, 2.504]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 1, 0.25]}
                />
                <mesh
                  name="cornerPyramid3_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_17.geometry}
                  material={nodes.cornerPyramid3_17.material}
                  position={[-2.125, -0.671, 0.754]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={[1, 0.25, 0.5]}
                />
                <mesh
                  name="wedge_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_35.geometry}
                  material={nodes.wedge_35.material}
                  position={[1.5, -1.171, -3.995]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[2, 1, 1]}
                />
                <mesh
                  name="cornerPyramid3_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_18.geometry}
                  material={nodes.cornerPyramid3_18.material}
                  position={[2.25, -1.171, -3.995]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.5, 1, 2]}
                />
                <mesh
                  name="wedge_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_36.geometry}
                  material={nodes.wedge_36.material}
                  position={[2.25, -1.171, -4.995]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[2, 0.5, 1]}
                />
                <mesh
                  name="wedge_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_37.geometry}
                  material={nodes.wedge_37.material}
                  position={[-1.5, -0.671, -0.995]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[1, 1, 6]}
                />
                <mesh
                  name="box_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_37.geometry}
                  material={nodes.box_37.material}
                  position={[-2.125, 0.203, 1.504]}
                  scale={[0.25, 0.75, 1]}
                />
                <mesh
                  name="wedge_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_38.geometry}
                  material={nodes.wedge_38.material}
                  position={[-2.125, 1.079, 1.504]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[1, 0.25, 1]}
                />
                <mesh
                  name="cornerPyramid3_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_19.geometry}
                  material={nodes.cornerPyramid3_19.material}
                  position={[-2.125, 1.079, 0.754]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.5, 0.25]}
                />
                <mesh
                  name="wedge_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_39.geometry}
                  material={nodes.wedge_39.material}
                  position={[-2.125, 0.203, 0.754]}
                  rotation={[Math.PI / 2, 0, Math.PI]}
                  scale={[0.25, 0.5, 0.75]}
                />
                <mesh
                  name="wedge_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_40.geometry}
                  material={nodes.wedge_40.material}
                  position={[2.25, 0.329, -3.995]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.5, 1, 1]}
                />
                <mesh
                  name="box_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_38.geometry}
                  material={nodes.box_38.material}
                  position={[2.25, 0.329, -4.995]}
                  scale={[0.5, 1, 1]}
                />
                <mesh
                  name="box_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_39.geometry}
                  material={nodes.box_39.material}
                  position={[1.5, 1.079, 1.504]}
                />
                <mesh
                  name="box_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_40.geometry}
                  material={nodes.box_40.material}
                  position={[1.5, 0.203, 2.004]}
                  scale={[1, 0.75, 2]}
                />
                <mesh
                  name="box_41"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_41.geometry}
                  material={nodes.box_41.material}
                  position={[-1.5, 1.079, 1.504]}
                />
                <mesh
                  name="box_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_42.geometry}
                  material={nodes.box_42.material}
                  position={[-1.5, 0.203, 2.004]}
                  scale={[1, 0.75, 2]}
                />
                <mesh
                  name="wedge_41"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_41.geometry}
                  material={nodes.wedge_41.material}
                  position={[1.5, 1.079, 2.504]}
                  rotation={[Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                  name="wedge_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_42.geometry}
                  material={nodes.wedge_42.material}
                  position={[-1.5, 1.079, 2.504]}
                  rotation={[Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                  name="box_43"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_43.geometry}
                  material={nodes.box_43.material}
                  position={[0, 0.329, 1.879]}
                  scale={[2, 3, 0.25]}
                />
                <mesh
                  name="wedge_43"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_43.geometry}
                  material={nodes.wedge_43.material}
                  position={[0, -0.671, 2.504]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 1, 2]}
                />
                <mesh
                  name="wedge_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_44.geometry}
                  material={nodes.wedge_44.material}
                  position={[0, 2.204, -5.245]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[2, 0.75, 2]}
                />
                <mesh
                  name="cornerPyramid3_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_20.geometry}
                  material={nodes.cornerPyramid3_20.material}
                  position={[-1.5, 2.204, -5.245]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[1, 0.75, 2]}
                />
                <mesh
                  name="cornerPyramid3_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_21.geometry}
                  material={nodes.cornerPyramid3_21.material}
                  position={[1.5, 2.204, 2.254]}
                  scale={[1, 0.75, 1]}
                />
                <mesh
                  name="cornerPyramid3_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_22.geometry}
                  material={nodes.cornerPyramid3_22.material}
                  position={[-1.5, 2.204, 2.254]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 0.75, 1]}
                />
                <mesh
                  name="cornerPyramid3_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_23.geometry}
                  material={nodes.cornerPyramid3_23.material}
                  position={[-0.75, 2.829, -1.245]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[0.5, 6, 0.5]}
                />
                <mesh
                  name="cornerPyramid3_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_24.geometry}
                  material={nodes.cornerPyramid3_24.material}
                  position={[-0.75, 2.829, 2.254]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.5, 1, 0.5]}
                />
                <mesh
                  name="cornerPyramid3_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_25.geometry}
                  material={nodes.cornerPyramid3_25.material}
                  position={[0.75, 2.829, 2.254]}
                  rotation={[Math.PI / 2, Math.PI / 2, 0]}
                  scale={[0.5, 1, 0.5]}
                />
                <mesh
                  name="wedge_45"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_45.geometry}
                  material={nodes.wedge_45.material}
                  position={[0, 0.329, 3.379]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.75, 1]}
                />
                <mesh
                  name="box_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_44.geometry}
                  material={nodes.box_44.material}
                  position={[0, 0.329, 2.504]}
                  scale={[2, 1, 1]}
                />
                <mesh
                  name="box_45"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_45.geometry}
                  material={nodes.box_45.material}
                  position={[0, 1.329, 3.504]}
                  scale={[1, 1, 0.5]}
                />
                <mesh
                  name="wedge_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_46.geometry}
                  material={nodes.wedge_46.material}
                  position={[0, 1.329, 4.004]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.5, 1]}
                />
                <mesh
                  name="wedge_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_47.geometry}
                  material={nodes.wedge_47.material}
                  position={[0, 1.329, 3.004]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.5, 1]}
                />
                <mesh
                  name="cornerPyramid3_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_26.geometry}
                  material={nodes.cornerPyramid3_26.material}
                  position={[0.75, 3.329, 3.504]}
                  scale={[0.5, 3, 1]}
                />
                <mesh
                  name="cornerPyramid3_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_27.geometry}
                  material={nodes.cornerPyramid3_27.material}
                  position={[-0.75, 3.329, 3.504]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 3, 0.5]}
                />
                <mesh
                  name="cornerPyramid3_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_28.geometry}
                  material={nodes.cornerPyramid3_28.material}
                  position={[0.75, 3.329, 3.504]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[0.5, 3, 1]}
                />
                <mesh
                  name="cornerPyramid3_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_29.geometry}
                  material={nodes.cornerPyramid3_29.material}
                  position={[-0.75, 3.329, 3.504]}
                  rotation={[Math.PI, -Math.PI / 2, 0]}
                  scale={[1, 3, 0.5]}
                />
                <mesh
                  name="cornerPyramid3_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_30.geometry}
                  material={nodes.cornerPyramid3_30.material}
                  position={[-0.75, 3.329, 4.379]}
                  rotation={[0, 0, -Math.PI]}
                  scale={[0.5, 3, 0.75]}
                />
                <mesh
                  name="cornerPyramid3_31"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_31.geometry}
                  material={nodes.cornerPyramid3_31.material}
                  position={[0.75, 3.329, 4.379]}
                  rotation={[Math.PI, Math.PI / 2, 0]}
                  scale={[0.75, 3, 0.5]}
                />
                <mesh
                  name="cornerPyramid3_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_32.geometry}
                  material={nodes.cornerPyramid3_32.material}
                  position={[0.75, 0.829, 3.504]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.5, 1, 2]}
                />
                <mesh
                  name="cornerPyramid3_33"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_33.geometry}
                  material={nodes.cornerPyramid3_33.material}
                  position={[-0.75, 0.829, 3.504]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[2, 1, 0.5]}
                />
                <mesh
                  name="truncatedPyramid4_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_12.geometry}
                  material={nodes.truncatedPyramid4_12.material}
                  position={[0, 0.745, -6.724]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[0.5, 1.5, 0.75]}
                />
                <mesh
                  name="truncatedPyramid4_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_13.geometry}
                  material={nodes.truncatedPyramid4_13.material}
                  position={[0, 1.275, -6.194]}
                  rotation={[Math.PI / 4, 0, 0]}
                  scale={[0.5, 1.5, 0.75]}
                />
                <mesh
                  name="cornerPyramid3_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_34.geometry}
                  material={nodes.cornerPyramid3_34.material}
                  position={[2.25, 1.329, -5.87]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.5, 0.75, 1]}
                />
                <mesh
                  name="wedge_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_48.geometry}
                  material={nodes.wedge_48.material}
                  position={[1.5, 1.329, -5.87]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.75, 1]}
                />
                <mesh
                  name="cornerPyramid3_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_35.geometry}
                  material={nodes.cornerPyramid3_35.material}
                  position={[1.5, 2.204, -5.245]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[2, 0.75, 1]}
                />
                <mesh
                  name="cornerPyramid3_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_36.geometry}
                  material={nodes.cornerPyramid3_36.material}
                  position={[0.75, 2.829, -1.245]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.5, 6, 0.5]}
                />
                <mesh
                  name="cornerPyramid3_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_37.geometry}
                  material={nodes.cornerPyramid3_37.material}
                  position={[0.75, 3.329, 2.004]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.5, 2, 3]}
                />
                <mesh
                  name="cornerPyramid3_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_38.geometry}
                  material={nodes.cornerPyramid3_38.material}
                  position={[0.75, 5.329, 3.504]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.5, 1, 1]}
                />
                <mesh
                  name="cornerPyramid3_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_39.geometry}
                  material={nodes.cornerPyramid3_39.material}
                  position={[0.75, 5.329, 5.504]}
                  scale={[0.5, 1, 3]}
                />
                <mesh
                  name="cornerPyramid3_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_40.geometry}
                  material={nodes.cornerPyramid3_40.material}
                  position={[0.75, 4.329, 5.504]}
                  rotation={[Math.PI, Math.PI / 2, 0]}
                  scale={[3, 1, 0.5]}
                />
                <group
                  name="4f4164e5-3648-438c-adf8-f73b40bde23d"
                  position={[1.085, 5.704, 3.674]}
                  rotation={[0, 0.524, -1.309]}>
                  <mesh
                    name="pyramid4"
                    castShadow
                    receiveShadow
                    geometry={nodes.pyramid4.geometry}
                    material={nodes.pyramid4.material}
                    position={[0, 0.5, 0]}
                    scale={[0.5, 0.75, 0.5]}
                  />
                  <mesh
                    name="pyramid4_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.pyramid4_1.geometry}
                    material={nodes.pyramid4_1.material}
                    position={[0, -0.375, 0]}
                    rotation={[0, 0, -Math.PI]}
                    scale={[0.5, 1, 0.5]}
                  />
                </group>
                <mesh
                  name="cornerPyramid3_41"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_41.geometry}
                  material={nodes.cornerPyramid3_41.material}
                  position={[-0.75, 5.329, 5.504]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[3, 1, 0.5]}
                />
                <group
                  name="4f4164e5-3648-438c-adf8-f73b40bde23d_1"
                  position={[-1.115, 5.704, 3.674]}
                  rotation={[0, -0.523, 1.309]}>
                  <mesh
                    name="pyramid4_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.pyramid4_2.geometry}
                    material={nodes.pyramid4_2.material}
                    position={[0, 0.5, 0]}
                    scale={[0.5, 0.75, 0.5]}
                  />
                  <mesh
                    name="pyramid4_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.pyramid4_3.geometry}
                    material={nodes.pyramid4_3.material}
                    position={[0, -0.375, 0]}
                    rotation={[0, 0, -Math.PI]}
                    scale={[0.5, 1, 0.5]}
                  />
                </group>
                <mesh
                  name="wedge_49"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_49.geometry}
                  material={nodes.wedge_49.material}
                  position={[0, 2.829, -1.245]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[6, 0.5, 1]}
                />
                <mesh
                  name="box_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_46.geometry}
                  material={nodes.box_46.material}
                  position={[0, 2.204, -1.245]}
                  scale={[2, 0.75, 6]}
                />
                <mesh
                  name="box_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_47.geometry}
                  material={nodes.box_47.material}
                  position={[-0.75, 0.329, -5.87]}
                  scale={[0.5, 1, 0.75]}
                />
                <mesh
                  name="box_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_48.geometry}
                  material={nodes.box_48.material}
                  position={[0, 0.329, -1.245]}
                  scale={[2, 3, 6]}
                />
                <mesh
                  name="wedge_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_50.geometry}
                  material={nodes.wedge_50.material}
                  position={[0, 2.829, 2.254]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 0.5, 1]}
                />
                <mesh
                  name="box_49"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_49.geometry}
                  material={nodes.box_49.material}
                  position={[0, 2.829, 4.004]}
                  scale={[1, 2, 0.5]}
                />
                <mesh
                  name="wedge_51"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_51.geometry}
                  material={nodes.wedge_51.material}
                  position={[0, 2.829, 4.504]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[2, 0.5, 1]}
                />
                <mesh
                  name="wedge_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_52.geometry}
                  material={nodes.wedge_52.material}
                  position={[0, 3.329, 2.004]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[3, 2, 1]}
                />
                <mesh
                  name="wedge_53"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_53.geometry}
                  material={nodes.wedge_53.material}
                  position={[0, 5.329, 3.504]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                />
                <mesh
                  name="wedge_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_54.geometry}
                  material={nodes.wedge_54.material}
                  position={[0, 3.329, 3.629]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.25, 1]}
                />
                <mesh
                  name="box_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_50.geometry}
                  material={nodes.box_50.material}
                  position={[0, 2.329, 3.629]}
                  scale={[1, 1, 0.25]}
                />
                <mesh
                  name="wedge_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_55.geometry}
                  material={nodes.wedge_55.material}
                  position={[0, 2.329, 3.379]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.25, 1]}
                />
                <mesh
                  name="box_51"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_51.geometry}
                  material={nodes.box_51.material}
                  position={[0, 3.954, 5.004]}
                  scale={[1, 0.25, 2]}
                />
                <mesh
                  name="wedge_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_56.geometry}
                  material={nodes.wedge_56.material}
                  position={[0, 5.329, 5.504]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[3, 1, 1]}
                />
                <mesh
                  name="box_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_52.geometry}
                  material={nodes.box_52.material}
                  position={[0, 4.454, 5.504]}
                  scale={[1, 0.75, 3]}
                />
                <mesh
                  name="wedge_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_57.geometry}
                  material={nodes.wedge_57.material}
                  position={[0, 3.954, 6.504]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[0.25, 1, 1]}
                />
                <mesh
                  name="wedge_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_58.geometry}
                  material={nodes.wedge_58.material}
                  position={[0, 2.204, 2.254]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 0.75, 2]}
                />
                <mesh
                  name="wedge_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_59.geometry}
                  material={nodes.wedge_59.material}
                  position={[1.5, 1.329, 2.254]}
                  rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="wedge_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_60.geometry}
                  material={nodes.wedge_60.material}
                  position={[-1.5, 1.329, 2.254]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                />
                <mesh
                  name="wedge_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_61.geometry}
                  material={nodes.wedge_61.material}
                  position={[0.75, 2.204, 2.254]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.5, 1, 0.75]}
                />
                <mesh
                  name="wedge_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_62.geometry}
                  material={nodes.wedge_62.material}
                  position={[-0.75, 2.204, 2.254]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.5, 1, 0.75]}
                />
                <mesh
                  name="truncatedPyramid4_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_14.geometry}
                  material={nodes.truncatedPyramid4_14.material}
                  position={[0, 4.579, 7.004]}
                  rotation={[Math.PI / 2, Math.PI / 2, 0]}
                  scale={[0.75, 1, 0.75]}
                />
                <mesh
                  name="hemisphere"
                  castShadow
                  receiveShadow
                  geometry={nodes.hemisphere.geometry}
                  material={nodes.hemisphere.material}
                  position={[0.75, 5.152, 4.797]}
                  rotation={[1.579, -0.066, 0.009]}
                  scale={[0.25, 1, 0.25]}
                />
                <mesh
                  name="hemisphere_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.hemisphere_1.geometry}
                  material={nodes.hemisphere_1.material}
                  position={[-0.75, 5.152, 4.797]}
                  rotation={[1.579, 0.067, -0.009]}
                  scale={[0.25, 1, 0.25]}
                />
                <mesh
                  name="truncatedPyramid4_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_15.geometry}
                  material={nodes.truncatedPyramid4_15.material}
                  position={[-1.5, -5.921, -4.495]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.75, 1, 0.75]}
                />
                <mesh
                  name="truncatedPyramid4_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_16.geometry}
                  material={nodes.truncatedPyramid4_16.material}
                  position={[1.5, -5.921, -4.495]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.75, 1, 0.75]}
                />
                <mesh
                  name="truncatedPyramid4_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_17.geometry}
                  material={nodes.truncatedPyramid4_17.material}
                  position={[1.5, -5.921, 1.754]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.75, 1, 0.75]}
                />
                <mesh
                  name="truncatedPyramid4_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_18.geometry}
                  material={nodes.truncatedPyramid4_18.material}
                  position={[-1.5, -5.921, 1.754]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.75, 1, 0.75]}
                />
              </group>
            </group>
            <mesh
              name="box_53"
              castShadow
              receiveShadow
              geometry={nodes.box_53.geometry}
              material={nodes.box_53.material}
              position={[-11.206, -58, 3.83]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[320, 50, 320]}
            />
            <mesh
              name="box_54"
              castShadow
              receiveShadow
              geometry={nodes.box_54.geometry}
              material={nodes.box_54.material}
              position={[-65.206, -28, 102.33]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[123, 10, 210]}
            />
            <mesh
              name="box_55"
              castShadow
              receiveShadow
              geometry={nodes.box_55.geometry}
              material={nodes.box_55.material}
              position={[65.295, -28.5, 156.83]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[14, 11, 167]}
            />
            <mesh
              name="box_56"
              castShadow
              receiveShadow
              geometry={nodes.box_56.geometry}
              material={nodes.box_56.material}
              position={[85.294, -28, 49.83]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[18, 10, 127]}
            />
            <mesh
              name="box_57"
              castShadow
              receiveShadow
              geometry={nodes.box_57.geometry}
              material={nodes.box_57.material}
              position={[140.295, -28, 103.33]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[121, 10, 17]}
            />
            <mesh
              name="pyramid4_4"
              castShadow
              receiveShadow
              geometry={nodes.pyramid4_4.geometry}
              material={nodes.pyramid4_4.material}
              position={[-24.307, -26, 93.51]}
              rotation={[0, Math.PI / 6, 0]}
              scale={[142, 28, 76]}
            />
            <mesh
              name="pyramid4_5"
              castShadow
              receiveShadow
              geometry={nodes.pyramid4_5.geometry}
              material={nodes.pyramid4_5.material}
              position={[-77.705, -18, 126.33]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[73, 12, 187]}
            />
            <mesh
              name="pyramid4_6"
              castShadow
              receiveShadow
              geometry={nodes.pyramid4_6.geometry}
              material={nodes.pyramid4_6.material}
              position={[-97.285, -18.5, 97.404]}
              rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
              scale={[81, 33, 122]}
            />
            <group name="a318fbec-cab6-4195-86f2-87b056ff3c9d" position={[86.62, -28, 104.33]}>
              <mesh
                name="box_58"
                castShadow
                receiveShadow
                geometry={nodes.box_58.geometry}
                material={nodes.box_58.material}
                position={[0.843, 0, 0]}
                rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                scale={[39, 10, 92]}
              />
              <mesh
                name="box_59"
                castShadow
                receiveShadow
                geometry={nodes.box_59.geometry}
                material={nodes.box_59.material}
                position={[-0.843, 0, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[39, 10, 92]}
              />
              <mesh
                name="box_60"
                castShadow
                receiveShadow
                geometry={nodes.box_60.geometry}
                material={nodes.box_60.material}
                position={[-0.843, 0, 0]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={[38.999, 10, 92]}
              />
              <mesh
                name="box_61"
                castShadow
                receiveShadow
                geometry={nodes.box_61.geometry}
                material={nodes.box_61.material}
                position={[-0.843, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[39, 10, 92]}
              />
            </group>
            <mesh
              name="box_62"
              castShadow
              receiveShadow
              geometry={nodes.box_62.geometry}
              material={nodes.box_62.material}
              position={[42.958, -27.5, 69.758]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[20, 9, 62]}
            />
            <mesh
              name="box_63"
              castShadow
              receiveShadow
              geometry={nodes.box_63.geometry}
              material={nodes.box_63.material}
              position={[41.544, -28.5, 139.581]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[49, 11, 21]}
            />
            <mesh
              name="box_64"
              castShadow
              receiveShadow
              geometry={nodes.box_64.geometry}
              material={nodes.box_64.material}
              position={[126.642, -28, 65.162]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[40, 10, 23]}
            />
            <mesh
              name="box_65"
              castShadow
              receiveShadow
              geometry={nodes.box_65.geometry}
              material={nodes.box_65.material}
              position={[126.731, -28, 143.112]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[19, 10, 39]}
            />
            <mesh
              name="box_66"
              castShadow
              receiveShadow
              geometry={nodes.box_66.geometry}
              material={nodes.box_66.material}
              position={[-11.706, -31, 10.83]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[62, 4, 321]}
            />
            <mesh
              name="box_67"
              castShadow
              receiveShadow
              geometry={nodes.box_67.geometry}
              material={nodes.box_67.material}
              position={[-11.206, -28, -88.67]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[135, 10, 320]}
            />
            <mesh
              name="pyramid4_7"
              castShadow
              receiveShadow
              geometry={nodes.pyramid4_7.geometry}
              material={nodes.pyramid4_7.material}
              position={[21.776, -22, -93.482]}
              rotation={[0, 0.262, 0]}
              scale={[172, 36, 85]}
            />
            <mesh
              name="pyramid4_8"
              castShadow
              receiveShadow
              geometry={nodes.pyramid4_8.geometry}
              material={nodes.pyramid4_8.material}
              position={[-94.19, -20, -88.643]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[89, 8, 102]}
            />
            <group name="b29c3674-f33a-4968-ad5b-99ae0b1f8ceb" position={[-136.185, 23.5, 132.85]}>
              <mesh
                name="cylinder"
                castShadow
                receiveShadow
                geometry={nodes.cylinder.geometry}
                material={nodes.cylinder.material}
                position={[-0.02, -38.5, 1.83]}
                scale={[10, 16, 10]}
              />
              <mesh
                name="pyramid4_9"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_9.geometry}
                material={nodes.pyramid4_9.material}
                position={[-1.02, -16.5, 1.83]}
                scale={[70, 38, 70]}
              />
              <mesh
                name="pyramid4_10"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_10.geometry}
                material={nodes.pyramid4_10.material}
                position={[0, -0.5, 0]}
                rotation={[0, -Math.PI / 3, 0]}
                scale={[60, 38, 60]}
              />
              <mesh
                name="pyramid4_11"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_11.geometry}
                material={nodes.pyramid4_11.material}
                position={[0.966, 7.5, 0.259]}
                rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                scale={[50, 12, 50]}
              />
              <mesh
                name="pyramid4_12"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_12.geometry}
                material={nodes.pyramid4_12.material}
                position={[0, 27.5, 0]}
                rotation={[Math.PI, -1.309, Math.PI]}
                scale={[40, 38, 40]}
              />
            </group>
            <group
              name="2bd4569f-c959-4969-af8d-5adfb292d934"
              position={[-66.985, 16.5, 141.98]}
              rotation={[0, 0.524, 0]}>
              <group name="9c9f0803-2681-4ac3-9c03-30b60450c052" position={[0, 5.5, 0]}>
                <mesh
                  name="pyramid4_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.pyramid4_13.geometry}
                  material={nodes.pyramid4_13.material}
                  position={[-0.7, 16, 1.652]}
                  rotation={[Math.PI, -1.309, Math.PI]}
                  scale={[40, 38, 36]}
                />
                <mesh
                  name="pyramid4_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.pyramid4_14.geometry}
                  material={nodes.pyramid4_14.material}
                  position={[0, 2.5, 0]}
                  rotation={[0, -Math.PI / 3, 0]}
                  scale={[47, 51, 46]}
                />
                <mesh
                  name="pyramid4_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.pyramid4_15.geometry}
                  material={nodes.pyramid4_15.material}
                  position={[-0.635, -7.5, 1]}
                  scale={[49, 55, 52]}
                />
              </group>
              <mesh
                name="cylinder_1"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_1.geometry}
                material={nodes.cylinder_1.material}
                position={[-2.135, -32.5, 4]}
                scale={[10, 16, 10]}
              />
            </group>
            <group name="8d119034-40f0-4cc2-ba4d-404731229197" position={[-24.205, -31, -7.17]}>
              <mesh
                name="box_68"
                castShadow
                receiveShadow
                geometry={nodes.box_68.geometry}
                material={nodes.box_68.material}
                position={[0, -2, 1]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[4, 13, 8]}
              />
              <mesh
                name="cornerPyramid4_4"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_4.geometry}
                material={nodes.cornerPyramid4_4.material}
                position={[0, 0, 8.5]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[4, 2, 4]}
              />
              <mesh
                name="cornerPyramid4_5"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_5.geometry}
                material={nodes.cornerPyramid4_5.material}
                position={[0, -4, 8.5]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[3.999, 2, 3.999]}
              />
              <mesh
                name="wedge_63"
                castShadow
                receiveShadow
                geometry={nodes.wedge_63.geometry}
                material={nodes.wedge_63.material}
                position={[0, -4, -7.5]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={4}
              />
              <mesh
                name="wedge_64"
                castShadow
                receiveShadow
                geometry={nodes.wedge_64.geometry}
                material={nodes.wedge_64.material}
                position={[0, 4, 5.5]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[4, 4, 3.999]}
              />
              <mesh
                name="box_69"
                castShadow
                receiveShadow
                geometry={nodes.box_69.geometry}
                material={nodes.box_69.material}
                position={[0, 4, -2]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[4, 11, 4]}
              />
              <mesh
                name="wedge_65"
                castShadow
                receiveShadow
                geometry={nodes.wedge_65.geometry}
                material={nodes.wedge_65.material}
                position={[0, 4, -8.5]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                scale={[4, 1.999, 3.999]}
              />
              <mesh
                name="box_70"
                castShadow
                receiveShadow
                geometry={nodes.box_70.geometry}
                material={nodes.box_70.material}
                position={[2, 0, -7.5]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[8, 4, 4]}
              />
              <mesh
                name="wedge_66"
                castShadow
                receiveShadow
                geometry={nodes.wedge_66.geometry}
                material={nodes.wedge_66.material}
                position={[4, -4, 1]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[3.999, 4, 13]}
              />
              <mesh
                name="cornerPyramid3_42"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_42.geometry}
                material={nodes.cornerPyramid3_42.material}
                position={[4, -4, 8.5]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[4, 2, 4]}
              />
              <mesh
                name="box_71"
                castShadow
                receiveShadow
                geometry={nodes.box_71.geometry}
                material={nodes.box_71.material}
                position={[4, 0, 1]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[4, 13, 4]}
              />
              <mesh
                name="cornerPyramid4_6"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_6.geometry}
                material={nodes.cornerPyramid4_6.material}
                position={[4, 0, 8.5]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[4, 2, 4]}
              />
              <mesh
                name="cornerPyramid4_7"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_7.geometry}
                material={nodes.cornerPyramid4_7.material}
                position={[4, -4, -7.5]}
                rotation={[-Math.PI, 0, 0]}
                scale={4}
              />
              <mesh
                name="cornerPyramid4_8"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_8.geometry}
                material={nodes.cornerPyramid4_8.material}
                position={[4, 4, 5.5]}
                scale={4}
              />
              <mesh
                name="wedge_67"
                castShadow
                receiveShadow
                geometry={nodes.wedge_67.geometry}
                material={nodes.wedge_67.material}
                position={[4, 4, -2]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={[4, 4, 11]}
              />
              <mesh
                name="cornerPyramid4_9"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_9.geometry}
                material={nodes.cornerPyramid4_9.material}
                position={[4, 4, -8.5]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2, 4, 4]}
              />
              <mesh
                name="wedge_68"
                castShadow
                receiveShadow
                geometry={nodes.wedge_68.geometry}
                material={nodes.wedge_68.material}
                position={[-4, 4, -2]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[4, 3.999, 11]}
              />
              <mesh
                name="cornerPyramid3_43"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_43.geometry}
                material={nodes.cornerPyramid3_43.material}
                position={[-4, 4, 5.5]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={4}
              />
              <mesh
                name="box_72"
                castShadow
                receiveShadow
                geometry={nodes.box_72.geometry}
                material={nodes.box_72.material}
                position={[-4, 0, -2]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[4, 11, 4]}
              />
              <mesh
                name="cornerPyramid4_10"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_10.geometry}
                material={nodes.cornerPyramid4_10.material}
                position={[-4, 0, 5.5]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={4}
              />
              <mesh
                name="wedge_69"
                castShadow
                receiveShadow
                geometry={nodes.wedge_69.geometry}
                material={nodes.wedge_69.material}
                position={[-4, -4, -1]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
                scale={[4, 4, 9]}
              />
              <mesh
                name="cornerPyramid3_44"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_44.geometry}
                material={nodes.cornerPyramid3_44.material}
                position={[-4, 4, -8.5]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                scale={[4, 1.999, 3.999]}
              />
              <mesh
                name="wedge_70"
                castShadow
                receiveShadow
                geometry={nodes.wedge_70.geometry}
                material={nodes.wedge_70.material}
                position={[-4, 0, -8.5]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[2, 3.999, 4]}
              />
              <mesh
                name="cornerPyramid3_45"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_45.geometry}
                material={nodes.cornerPyramid3_45.material}
                position={[-4, -4, -7.5]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={4}
              />
            </group>
            <group name="be3271b6-7c52-410b-92cb-ffc07ef2d52f" position={[-26.206, -29, 21.33]}>
              <mesh
                name="box_73"
                castShadow
                receiveShadow
                geometry={nodes.box_73.geometry}
                material={nodes.box_73.material}
                position={[0, 0.5, 1.5]}
                scale={[4, 3, 8]}
              />
              <mesh
                name="wedge_71"
                castShadow
                receiveShadow
                geometry={nodes.wedge_71.geometry}
                material={nodes.wedge_71.material}
                position={[4, 1, 1.5]}
                scale={[4, 2, 8]}
              />
              <mesh
                name="wedge_72"
                castShadow
                receiveShadow
                geometry={nodes.wedge_72.geometry}
                material={nodes.wedge_72.material}
                position={[-4, 1, 1.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[4, 2, 8]}
              />
              <mesh
                name="cornerPyramid3_46"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_46.geometry}
                material={nodes.cornerPyramid3_46.material}
                position={[-4, 1, -5.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[4, 2, 6]}
              />
              <mesh
                name="wedge_73"
                castShadow
                receiveShadow
                geometry={nodes.wedge_73.geometry}
                material={nodes.wedge_73.material}
                position={[0, 1, -5.5]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[6, 2, 4]}
              />
              <mesh
                name="cornerPyramid3_47"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_47.geometry}
                material={nodes.cornerPyramid3_47.material}
                position={[4, 1, -5.5]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[6, 2, 4]}
              />
              <mesh
                name="cornerPyramid3_48"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_48.geometry}
                material={nodes.cornerPyramid3_48.material}
                position={[-4, 1, 7]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[3, 2, 4]}
              />
              <mesh
                name="wedge_74"
                castShadow
                receiveShadow
                geometry={nodes.wedge_74.geometry}
                material={nodes.wedge_74.material}
                position={[0, 1, 7]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[3, 2, 4]}
              />
              <mesh
                name="cornerPyramid3_49"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_49.geometry}
                material={nodes.cornerPyramid3_49.material}
                position={[4, 1, 7]}
                scale={[4, 2, 3]}
              />
              <mesh
                name="box_74"
                castShadow
                receiveShadow
                geometry={nodes.box_74.geometry}
                material={nodes.box_74.material}
                position={[0, -0.5, -5.5]}
                scale={[4, 1, 6]}
              />
              <mesh
                name="wedge_75"
                castShadow
                receiveShadow
                geometry={nodes.wedge_75.geometry}
                material={nodes.wedge_75.material}
                position={[-4, -0.5, -5.5]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[4, 6, 1]}
              />
              <mesh
                name="box_75"
                castShadow
                receiveShadow
                geometry={nodes.box_75.geometry}
                material={nodes.box_75.material}
                position={[4, -0.5, 1.5]}
                scale={[4, 1, 8]}
              />
              <mesh
                name="box_76"
                castShadow
                receiveShadow
                geometry={nodes.box_76.geometry}
                material={nodes.box_76.material}
                position={[-4, -0.5, 1.5]}
                scale={[4, 1, 8]}
              />
              <mesh
                name="wedge_76"
                castShadow
                receiveShadow
                geometry={nodes.wedge_76.geometry}
                material={nodes.wedge_76.material}
                position={[4, -0.5, -5.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[4, 6, 1]}
              />
              <mesh
                name="box_77"
                castShadow
                receiveShadow
                geometry={nodes.box_77.geometry}
                material={nodes.box_77.material}
                position={[0, -0.5, 7]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[4, 1, 3]}
              />
              <mesh
                name="wedge_77"
                castShadow
                receiveShadow
                geometry={nodes.wedge_77.geometry}
                material={nodes.wedge_77.material}
                position={[4, -0.5, 7]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[4, 3, 1]}
              />
              <mesh
                name="wedge_78"
                castShadow
                receiveShadow
                geometry={nodes.wedge_78.geometry}
                material={nodes.wedge_78.material}
                position={[-4, -0.5, 7]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[4, 3, 1]}
              />
              <mesh
                name="box_78"
                castShadow
                receiveShadow
                geometry={nodes.box_78.geometry}
                material={nodes.box_78.material}
                position={[0, -1.5, 1.5]}
                rotation={[0, 0, -Math.PI]}
                scale={[4, 1, 8]}
              />
              <mesh
                name="wedge_79"
                castShadow
                receiveShadow
                geometry={nodes.wedge_79.geometry}
                material={nodes.wedge_79.material}
                position={[-4, -1.5, 1.5]}
                rotation={[0, 0, -Math.PI]}
                scale={[4, 1, 8]}
              />
              <mesh
                name="wedge_80"
                castShadow
                receiveShadow
                geometry={nodes.wedge_80.geometry}
                material={nodes.wedge_80.material}
                position={[4, -1.5, 1.5]}
                rotation={[-Math.PI, 0, 0]}
                scale={[4, 1, 8]}
              />
              <mesh
                name="cornerPyramid3_50"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_50.geometry}
                material={nodes.cornerPyramid3_50.material}
                position={[4, -1.5, -5.5]}
                rotation={[-Math.PI, 0, 0]}
                scale={[4, 1, 6]}
              />
              <mesh
                name="wedge_81"
                castShadow
                receiveShadow
                geometry={nodes.wedge_81.geometry}
                material={nodes.wedge_81.material}
                position={[0, -1.5, -5.5]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[6, 1, 4]}
              />
              <mesh
                name="cornerPyramid3_51"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_51.geometry}
                material={nodes.cornerPyramid3_51.material}
                position={[-4, -1.5, -5.5]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[6, 1, 4]}
              />
              <mesh
                name="cornerPyramid3_52"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_52.geometry}
                material={nodes.cornerPyramid3_52.material}
                position={[4, -1.5, 7]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[3, 1, 4]}
              />
              <mesh
                name="wedge_82"
                castShadow
                receiveShadow
                geometry={nodes.wedge_82.geometry}
                material={nodes.wedge_82.material}
                position={[0, -1.5, 7]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[3, 1, 4]}
              />
              <mesh
                name="cornerPyramid3_53"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_53.geometry}
                material={nodes.cornerPyramid3_53.material}
                position={[-4, -1.5, 7]}
                rotation={[0, 0, -Math.PI]}
                scale={[4, 1, 3]}
              />
            </group>
            <group name="8a775de4-c831-44f6-925f-6d42c932e4af" position={[93.295, -8, 69.33]}>
              <mesh
                name="pyramid4_16"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_16.geometry}
                material={nodes.pyramid4_16.material}
                position={[0, 0, -1]}
                scale={[35, 30, 35]}
              />
              <mesh
                name="pyramid4_17"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_17.geometry}
                material={nodes.pyramid4_17.material}
                position={[0, -7.5, 8]}
                scale={[17, 15, 21]}
              />
            </group>
            <group name="f1a30881-9fe3-429a-97e6-b6f01df8fda6" position={[47.075, -13, 83.83]}>
              <group name="993ac5f4-fdb3-43af-9f6a-0422c77a7e02" rotation={[0, Math.PI / 4, 0]}>
                <mesh
                  name="circleWedge"
                  castShadow
                  receiveShadow
                  geometry={nodes.circleWedge.geometry}
                  material={nodes.circleWedge.material}
                  position={[19.5, 0, 0]}
                  scale={[39, 30, 40]}
                />
                <mesh
                  name="circleWedge_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.circleWedge_1.geometry}
                  material={nodes.circleWedge_1.material}
                  position={[-19.5, 0, 0]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[39, 30, 40]}
                />
              </group>
              <mesh
                name="cornerPyramid3_54"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_54.geometry}
                material={nodes.cornerPyramid3_54.material}
                position={[15.275, -2, 15.5]}
                scale={[3, 20, 3]}
              />
            </group>
            <group name="a64f145c-2a34-4c17-a656-d96601bde7f8" position={[-96.32, -17.5, 46.65]}>
              <group
                name="1f50e8b2-4f0f-4473-a94c-eb4ed0d1b226"
                position={[-1.752, -4.885, 1.628]}
                rotation={[-Math.PI, 0.524, -Math.PI]}>
                <mesh
                  name="box_79"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_79.geometry}
                  material={nodes.box_79.material}
                  position={[-0.5, -1.143, 1.222]}
                  rotation={[-0.262, 0, 0]}
                  scale={[0.5, 2, 0.25]}
                />
                <mesh
                  name="box_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_80.geometry}
                  material={nodes.box_80.material}
                  position={[0, 0.423, 0.553]}
                  rotation={[-Math.PI / 6, 0, 0]}
                  scale={[3, 2, 0.25]}
                />
                <mesh
                  name="box_81"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_81.geometry}
                  material={nodes.box_81.material}
                  position={[0.25, -1.384, 1.287]}
                  rotation={[-0.262, 0, 0]}
                  scale={[1, 2, 0.25]}
                />
                <mesh
                  name="wedge_83"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_83.geometry}
                  material={nodes.wedge_83.material}
                  position={[-1.125, -1.207, 1.231]}
                  rotation={[-0.262, 0, -Math.PI]}
                  scale={[0.75, 2, 0.25]}
                />
                <mesh
                  name="wedge_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_84.geometry}
                  material={nodes.wedge_84.material}
                  position={[1, -1.207, 1.231]}
                  rotation={[2.88, 0, 0]}
                  scale={[0.5, 2, 0.25]}
                />
                <mesh
                  name="truncatedPyramid4_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_19.geometry}
                  material={nodes.truncatedPyramid4_19.material}
                  position={[0, 1.774, -0.738]}
                  rotation={[-1.047, 0, 0]}
                  scale={[3, 4, 0.25]}
                />
              </group>
              <group name="fd9e36ef-bd54-4763-a29c-8ac214014ebd" position={[-0.763, 4.863, -0.323]}>
                <group
                  name="ac03e83d-8ed2-4665-9eea-82f6a188cd25"
                  position={[0.018, 0, 1.048]}
                  rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    name="wedge_85"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_85.geometry}
                    material={nodes.wedge_85.material}
                    position={[1.125, 0.121, -0.032]}
                    rotation={[2.88, 0, 0]}
                    scale={[0.25, 1, 0.25]}
                  />
                  <group name="facfbcbf-6a65-4f52-816b-905f9145c317" position={[-0.125, 0, 0]}>
                    <mesh
                      name="box_82"
                      castShadow
                      receiveShadow
                      geometry={nodes.box_82.geometry}
                      material={nodes.box_82.material}
                      position={[0.125, 0.121, -0.032]}
                      rotation={[2.88, 1.571, 0]}
                      scale={[0.25, 1, 2]}
                    />
                    <mesh
                      name="wedge_86"
                      castShadow
                      receiveShadow
                      geometry={nodes.wedge_86.geometry}
                      material={nodes.wedge_86.material}
                      position={[-1, 0.121, -0.032]}
                      rotation={[-0.262, 0, -Math.PI]}
                      scale={[0.25, 1, 0.25]}
                    />
                    <mesh
                      name="wedge_87"
                      castShadow
                      receiveShadow
                      geometry={nodes.wedge_87.geometry}
                      material={nodes.wedge_87.material}
                      position={[0.625, -0.483, 0.129]}
                      rotation={[2.88, 0, 0]}
                      scale={[1, 0.25, 0.25]}
                    />
                    <mesh
                      name="wedge_88"
                      castShadow
                      receiveShadow
                      geometry={nodes.wedge_88.geometry}
                      material={nodes.wedge_88.material}
                      position={[-0.375, -0.483, 0.129]}
                      rotation={[-0.262, 0, -Math.PI]}
                      scale={[1, 0.25, 0.25]}
                    />
                  </group>
                </group>
                <group
                  name="369ed88c-15dc-4dbc-ad46-01ac8fff737e"
                  position={[-0.986, 0, -0.081]}
                  rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    name="wedge_89"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_89.geometry}
                    material={nodes.wedge_89.material}
                    position={[0.032, 0.121, -1.125]}
                    rotation={[-1.571, -1.309, 1.571]}
                    scale={[0.25, 1, 0.25]}
                  />
                  <mesh
                    name="box_83"
                    castShadow
                    receiveShadow
                    geometry={nodes.box_83.geometry}
                    material={nodes.box_83.material}
                    position={[0.032, 0.121, 0]}
                    rotation={[0, 0, 2.88]}
                    scale={[0.25, 1, 2]}
                  />
                  <mesh
                    name="wedge_90"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_90.geometry}
                    material={nodes.wedge_90.material}
                    position={[0.032, 0.121, 1.125]}
                    rotation={[1.571, 1.309, 1.571]}
                    scale={[0.25, 1, 0.25]}
                  />
                  <mesh
                    name="wedge_91"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_91.geometry}
                    material={nodes.wedge_91.material}
                    position={[-0.129, -0.483, 0.5]}
                    rotation={[1.571, 1.309, 1.571]}
                    scale={[1, 0.25, 0.25]}
                  />
                  <mesh
                    name="wedge_92"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_92.geometry}
                    material={nodes.wedge_92.material}
                    position={[-0.129, -0.483, -0.5]}
                    rotation={[-Math.PI / 2, -1.309, Math.PI / 2]}
                    scale={[1, 0.25, 0.25]}
                  />
                </group>
                <group name="369ed88c-15dc-4dbc-ad46-01ac8fff737e_1" position={[0.986, 0, 0.081]}>
                  <mesh
                    name="wedge_93"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_93.geometry}
                    material={nodes.wedge_93.material}
                    position={[0.032, 0.121, -1.125]}
                    rotation={[-1.571, -1.309, 1.571]}
                    scale={[0.25, 1, 0.25]}
                  />
                  <mesh
                    name="box_84"
                    castShadow
                    receiveShadow
                    geometry={nodes.box_84.geometry}
                    material={nodes.box_84.material}
                    position={[0.032, 0.121, 0]}
                    rotation={[0, 0, 2.88]}
                    scale={[0.25, 1, 2]}
                  />
                  <mesh
                    name="wedge_94"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_94.geometry}
                    material={nodes.wedge_94.material}
                    position={[0.032, 0.121, 1.125]}
                    rotation={[1.571, 1.309, 1.571]}
                    scale={[0.25, 1, 0.25]}
                  />
                  <mesh
                    name="wedge_95"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_95.geometry}
                    material={nodes.wedge_95.material}
                    position={[-0.129, -0.483, 0.5]}
                    rotation={[1.571, 1.309, 1.571]}
                    scale={[1, 0.25, 0.25]}
                  />
                  <mesh
                    name="wedge_96"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_96.geometry}
                    material={nodes.wedge_96.material}
                    position={[-0.129, -0.483, -0.5]}
                    rotation={[-Math.PI / 2, -1.309, Math.PI / 2]}
                    scale={[1, 0.25, 0.25]}
                  />
                </group>
                <group name="ac03e83d-8ed2-4665-9eea-82f6a188cd25_1" position={[-0.018, 0, -1.048]}>
                  <mesh
                    name="wedge_97"
                    castShadow
                    receiveShadow
                    geometry={nodes.wedge_97.geometry}
                    material={nodes.wedge_97.material}
                    position={[1.125, 0.121, -0.032]}
                    rotation={[2.88, 0, 0]}
                    scale={[0.25, 1, 0.25]}
                  />
                  <group name="facfbcbf-6a65-4f52-816b-905f9145c317_1" position={[-0.125, 0, 0]}>
                    <mesh
                      name="box_85"
                      castShadow
                      receiveShadow
                      geometry={nodes.box_85.geometry}
                      material={nodes.box_85.material}
                      position={[0.125, 0.121, -0.032]}
                      rotation={[2.88, 1.571, 0]}
                      scale={[0.25, 1, 2]}
                    />
                    <mesh
                      name="wedge_98"
                      castShadow
                      receiveShadow
                      geometry={nodes.wedge_98.geometry}
                      material={nodes.wedge_98.material}
                      position={[-1, 0.121, -0.032]}
                      rotation={[-0.262, 0, -Math.PI]}
                      scale={[0.25, 1, 0.25]}
                    />
                    <mesh
                      name="wedge_99"
                      castShadow
                      receiveShadow
                      geometry={nodes.wedge_99.geometry}
                      material={nodes.wedge_99.material}
                      position={[0.625, -0.483, 0.129]}
                      rotation={[2.88, 0, 0]}
                      scale={[1, 0.25, 0.25]}
                    />
                    <mesh
                      name="wedge_100"
                      castShadow
                      receiveShadow
                      geometry={nodes.wedge_100.geometry}
                      material={nodes.wedge_100.material}
                      position={[-0.375, -0.483, 0.129]}
                      rotation={[-0.262, 0, -Math.PI]}
                      scale={[1, 0.25, 0.25]}
                    />
                  </group>
                </group>
              </group>
              <group name="2bba3062-6dbe-4ead-bc53-d40ccc5239bc" position={[0.343, 6.375, -0.243]}>
                <mesh
                  name="box_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_86.geometry}
                  material={nodes.box_86.material}
                  position={[0, -0.125, 0]}
                  scale={[0.25, 2, 2]}
                />
                <mesh
                  name="wedge_101"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_101.geometry}
                  material={nodes.wedge_101.material}
                  position={[0, -0.125, 1.125]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.25, 2, 0.25]}
                />
                <mesh
                  name="wedge_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_102.geometry}
                  material={nodes.wedge_102.material}
                  position={[0, -0.125, -1.125]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.25, 2, 0.25]}
                />
                <mesh
                  name="wedge_103"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_103.geometry}
                  material={nodes.wedge_103.material}
                  position={[0, 1, 0.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.25]}
                />
                <mesh
                  name="wedge_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_104.geometry}
                  material={nodes.wedge_104.material}
                  position={[0, 1, -0.5]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.25]}
                />
              </group>
              <group
                name="2bba3062-6dbe-4ead-bc53-d40ccc5239bc_1"
                position={[-0.782, 6.375, -1.493]}
                rotation={[0, Math.PI / 2, 0]}>
                <mesh
                  name="box_87"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_87.geometry}
                  material={nodes.box_87.material}
                  position={[0, -0.125, 0]}
                  scale={[0.25, 2, 2]}
                />
                <mesh
                  name="wedge_105"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_105.geometry}
                  material={nodes.wedge_105.material}
                  position={[0, -0.125, 1.125]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.25, 2, 0.25]}
                />
                <mesh
                  name="wedge_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_106.geometry}
                  material={nodes.wedge_106.material}
                  position={[0, -0.125, -1.125]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.25, 2, 0.25]}
                />
                <mesh
                  name="wedge_107"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_107.geometry}
                  material={nodes.wedge_107.material}
                  position={[0, 1, 0.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.25]}
                />
                <mesh
                  name="wedge_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_108.geometry}
                  material={nodes.wedge_108.material}
                  position={[0, 1, -0.5]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.25]}
                />
              </group>
              <group
                name="2bba3062-6dbe-4ead-bc53-d40ccc5239bc_2"
                position={[-1.907, 6.375, -0.368]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="box_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_88.geometry}
                  material={nodes.box_88.material}
                  position={[0, -0.125, 0]}
                  scale={[0.25, 2, 2]}
                />
                <mesh
                  name="wedge_109"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_109.geometry}
                  material={nodes.wedge_109.material}
                  position={[0, -0.125, 1.125]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.25, 2, 0.25]}
                />
                <mesh
                  name="wedge_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_110.geometry}
                  material={nodes.wedge_110.material}
                  position={[0, -0.125, -1.125]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.25, 2, 0.25]}
                />
                <mesh
                  name="wedge_111"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_111.geometry}
                  material={nodes.wedge_111.material}
                  position={[0, 1, 0.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.25]}
                />
                <mesh
                  name="wedge_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_112.geometry}
                  material={nodes.wedge_112.material}
                  position={[0, 1, -0.5]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.25]}
                />
              </group>
              <group
                name="2bba3062-6dbe-4ead-bc53-d40ccc5239bc_3"
                position={[-0.782, 6.375, 0.882]}
                rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                  name="box_89"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_89.geometry}
                  material={nodes.box_89.material}
                  position={[0, -0.125, 0]}
                  scale={[0.25, 2, 2]}
                />
                <mesh
                  name="wedge_113"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_113.geometry}
                  material={nodes.wedge_113.material}
                  position={[0, -0.125, 1.125]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.25, 2, 0.25]}
                />
                <mesh
                  name="wedge_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_114.geometry}
                  material={nodes.wedge_114.material}
                  position={[0, -0.125, -1.125]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.25, 2, 0.25]}
                />
                <mesh
                  name="wedge_115"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_115.geometry}
                  material={nodes.wedge_115.material}
                  position={[0, 1, 0.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.25]}
                />
                <mesh
                  name="wedge_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_116.geometry}
                  material={nodes.wedge_116.material}
                  position={[0, 1, -0.5]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1, 0.25, 0.25]}
                />
              </group>
              <mesh
                name="truncatedCone"
                castShadow
                receiveShadow
                geometry={nodes.truncatedCone.geometry}
                material={nodes.truncatedCone.material}
                position={[-0.782, 4, -0.243]}
                rotation={[-Math.PI, 0, 0]}
                scale={2}
              />
              <group
                name="1f50e8b2-4f0f-4473-a94c-eb4ed0d1b226_1"
                position={[-0.782, -4.885, -2.154]}>
                <mesh
                  name="box_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_90.geometry}
                  material={nodes.box_90.material}
                  position={[-0.5, -1.143, 1.222]}
                  rotation={[-0.262, 0, 0]}
                  scale={[0.5, 2, 0.25]}
                />
                <mesh
                  name="box_91"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_91.geometry}
                  material={nodes.box_91.material}
                  position={[0, 0.423, 0.553]}
                  rotation={[-Math.PI / 6, 0, 0]}
                  scale={[3, 2, 0.25]}
                />
                <mesh
                  name="box_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_92.geometry}
                  material={nodes.box_92.material}
                  position={[0.25, -1.384, 1.287]}
                  rotation={[-0.262, 0, 0]}
                  scale={[1, 2, 0.25]}
                />
                <mesh
                  name="wedge_117"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_117.geometry}
                  material={nodes.wedge_117.material}
                  position={[-1.125, -1.207, 1.231]}
                  rotation={[-0.262, 0, -Math.PI]}
                  scale={[0.75, 2, 0.25]}
                />
                <mesh
                  name="wedge_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_118.geometry}
                  material={nodes.wedge_118.material}
                  position={[1, -1.207, 1.231]}
                  rotation={[2.88, 0, 0]}
                  scale={[0.5, 2, 0.25]}
                />
                <mesh
                  name="truncatedPyramid4_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedPyramid4_20.geometry}
                  material={nodes.truncatedPyramid4_20.material}
                  position={[0, 1.774, -0.738]}
                  rotation={[-1.047, 0, 0]}
                  scale={[3, 4, 0.25]}
                />
              </group>
              <mesh
                name="annulus"
                castShadow
                receiveShadow
                geometry={nodes.annulus.geometry}
                material={nodes.annulus.material}
                position={[-0.782, -7.25, -0.243]}
                scale={[1, 0.5, 1]}
              />
              <mesh
                name="annulus_1"
                castShadow
                receiveShadow
                geometry={nodes.annulus_1.geometry}
                material={nodes.annulus_1.material}
                position={[-0.782, -3.5, -0.243]}
                scale={[0.5, 8, 0.5]}
              />
              <mesh
                name="annulus_2"
                castShadow
                receiveShadow
                geometry={nodes.annulus_2.geometry}
                material={nodes.annulus_2.material}
                position={[-0.782, 2.5, -0.243]}
                scale={[0.5, 4, 0.5]}
              />
              <mesh
                name="truncatedCone_1"
                castShadow
                receiveShadow
                geometry={nodes.truncatedCone_1.geometry}
                material={nodes.truncatedCone_1.material}
                position={[-0.782, 5, -0.243]}
                rotation={[-Math.PI, 0, 0]}
                scale={2}
              />
              <mesh
                name="wedge_119"
                castShadow
                receiveShadow
                geometry={nodes.wedge_119.geometry}
                material={nodes.wedge_119.material}
                position={[-0.039, -6.092, 0.53]}
                rotation={[0.802, 1.203, 2.374]}
                scale={[0.5, 2, 0.25]}
              />
              <mesh
                name="wedge_120"
                castShadow
                receiveShadow
                geometry={nodes.wedge_120.geometry}
                material={nodes.wedge_120.material}
                position={[0.511, -6.092, -1.522]}
                rotation={[-2.337, -1.203, 0.769]}
                scale={[0.75, 2, 0.25]}
              />
              <mesh
                name="box_93"
                castShadow
                receiveShadow
                geometry={nodes.box_93.geometry}
                material={nodes.box_93.material}
                position={[0.101, -6.269, -0.209]}
                rotation={[-2.337, -1.203, -2.372]}
                scale={[1, 2, 0.25]}
              />
              <mesh
                name="box_94"
                castShadow
                receiveShadow
                geometry={nodes.box_94.geometry}
                material={nodes.box_94.material}
                position={[0.874, -4.462, -0.26]}
                rotation={[-1.991, -0.991, -2.062]}
                scale={[3, 2, 0.25]}
              />
              <mesh
                name="box_95"
                castShadow
                receiveShadow
                geometry={nodes.box_95.geometry}
                material={nodes.box_95.material}
                position={[0.357, -6.028, -0.917]}
                rotation={[-2.337, -1.203, -2.372]}
                scale={[0.5, 2, 0.25]}
              />
              <mesh
                name="truncatedPyramid4_21"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_21.geometry}
                material={nodes.truncatedPyramid4_21.material}
                position={[2.121, -3.111, 0.074]}
                rotation={[-1.717, -0.506, -1.868]}
                scale={[2.996, 3.998, 0.25]}
              />
              <mesh
                name="truncatedPyramid4_22"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_22.geometry}
                material={nodes.truncatedPyramid4_22.material}
                position={[3.236, -2.911, 0.088]}
                rotation={[-1.315, 0.485, -2.017]}
                scale={[1, 2, 0.25]}
              />
              <mesh
                name="truncatedPyramid4_23"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_23.geometry}
                material={nodes.truncatedPyramid4_23.material}
                position={[3.045, -2.928, 0.55]}
                rotation={[-1.315, 0.485, -2.017]}
                scale={[1, 2, 0.25]}
              />
            </group>
            <mesh
              name="cylinder_2"
              castShadow
              receiveShadow
              geometry={nodes.cylinder_2.geometry}
              material={nodes.cylinder_2.material}
              position={[-86.187, -20.498, 56.374]}
              scale={[0.25, 9, 0.25]}
            />
            <mesh
              name="annulus_3"
              castShadow
              receiveShadow
              geometry={nodes.annulus_3.geometry}
              material={nodes.annulus_3.material}
              position={[-86.187, -16.322, 56.374]}
              scale={[1, 0.25, 1]}
            />
            <mesh
              name="truncatedCone_2"
              castShadow
              receiveShadow
              geometry={nodes.truncatedCone_2.geometry}
              material={nodes.truncatedCone_2.material}
              position={[-86.187, -16.447, 56.374]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              name="truncatedPyramid4_24"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_24.geometry}
              material={nodes.truncatedPyramid4_24.material}
              position={[-85.707, -16.041, 56.862]}
              rotation={[-3.142, 0.786, 0.785]}
              scale={[0.25, 1.5, 1]}
            />
            <mesh
              name="truncatedPyramid4_25"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_25.geometry}
              material={nodes.truncatedPyramid4_25.material}
              position={[-86.683, -16.041, 55.886]}
              rotation={[-3.142, 0.785, -0.786]}
              scale={[0.25, 1.5, 1]}
            />
            <mesh
              name="truncatedPyramid4_26"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_26.geometry}
              material={nodes.truncatedPyramid4_26.material}
              position={[-86.195, -16.041, 57.065]}
              rotation={[-0.34, 1.565, -1.8]}
              scale={[0.25, 1.5, 1]}
            />
            <mesh
              name="truncatedPyramid4_27"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_27.geometry}
              material={nodes.truncatedPyramid4_27.material}
              position={[-86.195, -16.041, 55.684]}
              rotation={[-2.729, 1.568, -1.134]}
              scale={[0.25, 1.5, 1]}
            />
            <mesh
              name="truncatedPyramid4_28"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_28.geometry}
              material={nodes.truncatedPyramid4_28.material}
              position={[-86.683, -16.041, 56.862]}
              rotation={[0, 0.786, -2.356]}
              scale={[0.25, 1.5, 1]}
            />
            <mesh
              name="truncatedPyramid4_29"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_29.geometry}
              material={nodes.truncatedPyramid4_29.material}
              position={[-85.707, -16.041, 55.886]}
              rotation={[0, 0.785, 2.356]}
              scale={[0.25, 1.5, 1]}
            />
            <mesh
              name="truncatedPyramid4_30"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_30.geometry}
              material={nodes.truncatedPyramid4_30.material}
              position={[-85.504, -16.041, 56.374]}
              rotation={[0, 0, 2.356]}
              scale={[0.25, 1.499, 1]}
            />
            <mesh
              name="truncatedPyramid4_31"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_31.geometry}
              material={nodes.truncatedPyramid4_31.material}
              position={[-86.885, -16.041, 56.374]}
              rotation={[0, 0, -2.356]}
              scale={[0.25, 1.5, 1]}
            />
            <mesh
              name="truncatedCone_3"
              castShadow
              receiveShadow
              geometry={nodes.truncatedCone_3.geometry}
              material={nodes.truncatedCone_3.material}
              position={[-86.187, -16.072, 56.374]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 0.5, 1]}
            />
            <mesh
              name="truncatedPyramid4_32"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_32.geometry}
              material={nodes.truncatedPyramid4_32.material}
              position={[-87.407, -15.443, 56.354]}
              rotation={[-Math.PI, 0, -0.785]}
              scale={[0.25, 2, 1]}
            />
            <mesh
              name="truncatedPyramid4_33"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_33.geometry}
              material={nodes.truncatedPyramid4_33.material}
              position={[-84.983, -15.508, 56.354]}
              rotation={[Math.PI, 0, 0.785]}
              scale={[0.25, 2, 1]}
            />
            <mesh
              name="truncatedPyramid4_34"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_34.geometry}
              material={nodes.truncatedPyramid4_34.material}
              position={[-87.052, -15.443, 57.211]}
              rotation={[-3.142, -0.785, -0.785]}
              scale={[0.25, 2, 1]}
            />
            <mesh
              name="truncatedPyramid4_35"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_35.geometry}
              material={nodes.truncatedPyramid4_35.material}
              position={[-85.338, -15.508, 55.497]}
              rotation={[3.141, -0.785, 0.785]}
              scale={[0.25, 2, 1]}
            />
            <mesh
              name="truncatedPyramid4_36"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_36.geometry}
              material={nodes.truncatedPyramid4_36.material}
              position={[-86.195, -15.443, 57.566]}
              rotation={[-2.356, -1.57, 0]}
              scale={[0.25, 2, 1]}
            />
            <mesh
              name="truncatedPyramid4_37"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_37.geometry}
              material={nodes.truncatedPyramid4_37.material}
              position={[-86.195, -15.508, 55.142]}
              rotation={[-2.729, -1.569, 1.134]}
              scale={[0.25, 2, 1]}
            />
            <mesh
              name="truncatedPyramid4_38"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_38.geometry}
              material={nodes.truncatedPyramid4_38.material}
              position={[-85.338, -15.443, 57.211]}
              rotation={[0, -0.785, 2.356]}
              scale={[0.25, 2, 1]}
            />
            <mesh
              name="truncatedPyramid4_39"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_39.geometry}
              material={nodes.truncatedPyramid4_39.material}
              position={[-87.052, -15.508, 55.497]}
              rotation={[0, -0.785, -2.357]}
              scale={[0.25, 2, 1]}
            />
            <mesh
              name="truncatedPyramid4_40"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_40.geometry}
              material={nodes.truncatedPyramid4_40.material}
              position={[-86.187, -23.998, 55.999]}
              rotation={[-0.262, 0, -Math.PI]}
              scale={[2, 4, 0.25]}
            />
            <mesh
              name="truncatedPyramid4_41"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_41.geometry}
              material={nodes.truncatedPyramid4_41.material}
              position={[-86.187, -22.253, 54.514]}
              rotation={[-1.309, 0, 0]}
              scale={[1, 2, 0.25]}
            />
            <mesh
              name="truncatedPyramid4_42"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_42.geometry}
              material={nodes.truncatedPyramid4_42.material}
              position={[-86.187, -22.719, 55.286]}
              rotation={[-Math.PI / 4, 0, 0]}
              scale={[2, 2, 0.25]}
            />
            <mesh
              name="truncatedPyramid4_43"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_43.geometry}
              material={nodes.truncatedPyramid4_43.material}
              position={[-86.187, -22.306, 53.685]}
              rotation={[-2.094, 0, 0]}
              scale={[0.5, 2, 0.25]}
            />
            <group name="3fa23c96-1bac-44d1-92ab-099691fe374e" position={[-85.744, -23.5, 56.828]}>
              <mesh
                name="truncatedPyramid4_44"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_44.geometry}
                material={nodes.truncatedPyramid4_44.material}
                position={[0.108, 0.781, 0.108]}
                rotation={[-2.185, -0.523, -2.526]}
                scale={[2, 2, 0.25]}
              />
              <mesh
                name="truncatedPyramid4_45"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_45.geometry}
                material={nodes.truncatedPyramid4_45.material}
                position={[0.654, 1.247, 0.654]}
                rotation={[-1.757, -0.184, -2.374]}
                scale={[1, 2, 0.25]}
              />
              <mesh
                name="truncatedPyramid4_46"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_46.geometry}
                material={nodes.truncatedPyramid4_46.material}
                position={[-0.396, -0.498, -0.396]}
                rotation={[-2.779, -0.752, 0.253]}
                scale={[2, 4, 0.25]}
              />
            </group>
            <mesh
              name="truncatedPyramid4_47"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_47.geometry}
              material={nodes.truncatedPyramid4_47.material}
              position={[-86.499, -23.998, 56.33]}
              rotation={[-2.337, 1.203, -0.77]}
              scale={[2, 4, 0.25]}
            />
            <mesh
              name="truncatedPyramid4_48"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_48.geometry}
              material={nodes.truncatedPyramid4_48.material}
              position={[-87.603, -21.909, 56.635]}
              rotation={[-1.646, 0.515, 1.86]}
              scale={[0.999, 1.999, 0.25]}
            />
            <mesh
              name="truncatedPyramid4_49"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_49.geometry}
              material={nodes.truncatedPyramid4_49.material}
              position={[-86.978, -22.592, 56.469]}
              rotation={[-1.917, 1.003, 2.053]}
              scale={[1.999, 2, 0.25]}
            />
            <group
              name="a8a1e29d-3524-4e2b-9cd6-de9c36e07c39"
              position={[-67.59, -19.915, 54.475]}
              rotation={[2.855, -1.273, -0.22]}
              scale={[0.999, 1, 1]}>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7"
                position={[0, 0.141, 5.704]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="wedge_121"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_121.geometry}
                  material={nodes.wedge_121.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_96.geometry}
                  material={nodes.box_96.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_122.geometry}
                  material={nodes.wedge_122.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_123"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_123.geometry}
                  material={nodes.wedge_123.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_97"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_97.geometry}
                  material={nodes.box_97.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_124.geometry}
                  material={nodes.wedge_124.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_125"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_125.geometry}
                  material={nodes.wedge_125.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_98.geometry}
                  material={nodes.box_98.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_126.geometry}
                  material={nodes.wedge_126.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_1" position={[0, -0.141, -5.704]}>
                <mesh
                  name="wedge_127"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_127.geometry}
                  material={nodes.wedge_127.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_99"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_99.geometry}
                  material={nodes.box_99.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_128.geometry}
                  material={nodes.wedge_128.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_129"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_129.geometry}
                  material={nodes.wedge_129.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_100.geometry}
                  material={nodes.box_100.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_130.geometry}
                  material={nodes.wedge_130.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_131"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_131.geometry}
                  material={nodes.wedge_131.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_101"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_101.geometry}
                  material={nodes.box_101.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_132.geometry}
                  material={nodes.wedge_132.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_2"
                position={[-4.94, -0.141, 2.852]}
                rotation={[-Math.PI, 1.047, -Math.PI]}>
                <mesh
                  name="wedge_133"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_133.geometry}
                  material={nodes.wedge_133.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_102.geometry}
                  material={nodes.box_102.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_134.geometry}
                  material={nodes.wedge_134.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_135"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_135.geometry}
                  material={nodes.wedge_135.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_103"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_103.geometry}
                  material={nodes.box_103.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_136.geometry}
                  material={nodes.wedge_136.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_137"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_137.geometry}
                  material={nodes.wedge_137.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_104.geometry}
                  material={nodes.box_104.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_138.geometry}
                  material={nodes.wedge_138.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_3"
                position={[4.94, 0.141, -2.852]}
                rotation={[0, -1.047, 0]}>
                <mesh
                  name="wedge_139"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_139.geometry}
                  material={nodes.wedge_139.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_105"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_105.geometry}
                  material={nodes.box_105.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_140.geometry}
                  material={nodes.wedge_140.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_141"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_141.geometry}
                  material={nodes.wedge_141.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_106.geometry}
                  material={nodes.box_106.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_142.geometry}
                  material={nodes.wedge_142.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_143"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_143.geometry}
                  material={nodes.wedge_143.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_107"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_107.geometry}
                  material={nodes.box_107.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_144.geometry}
                  material={nodes.wedge_144.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_4"
                position={[-4.94, 0.141, -2.852]}
                rotation={[0, 1.047, 0]}>
                <mesh
                  name="wedge_145"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_145.geometry}
                  material={nodes.wedge_145.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_108.geometry}
                  material={nodes.box_108.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_146.geometry}
                  material={nodes.wedge_146.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_147"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_147.geometry}
                  material={nodes.wedge_147.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_109"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_109.geometry}
                  material={nodes.box_109.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_148.geometry}
                  material={nodes.wedge_148.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_149"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_149.geometry}
                  material={nodes.wedge_149.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_110.geometry}
                  material={nodes.box_110.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_150.geometry}
                  material={nodes.wedge_150.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_5"
                position={[4.94, -0.141, 2.852]}
                rotation={[Math.PI, -1.048, Math.PI]}
                scale={[1, 1, 0.999]}>
                <mesh
                  name="wedge_151"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_151.geometry}
                  material={nodes.wedge_151.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_111"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_111.geometry}
                  material={nodes.box_111.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_152.geometry}
                  material={nodes.wedge_152.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_153"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_153.geometry}
                  material={nodes.wedge_153.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_112.geometry}
                  material={nodes.box_112.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_154.geometry}
                  material={nodes.wedge_154.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_155"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_155.geometry}
                  material={nodes.wedge_155.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_113"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_113.geometry}
                  material={nodes.box_113.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_156.geometry}
                  material={nodes.wedge_156.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
            </group>
            <group
              name="a8a1e29d-3524-4e2b-9cd6-de9c36e07c39_1"
              position={[-33.59, -19.915, 43.475]}
              rotation={[2.855, -1.273, -0.22]}
              scale={[0.999, 1, 1]}>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_6"
                position={[0, 0.141, 5.704]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="wedge_157"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_157.geometry}
                  material={nodes.wedge_157.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_114.geometry}
                  material={nodes.box_114.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_158.geometry}
                  material={nodes.wedge_158.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_159"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_159.geometry}
                  material={nodes.wedge_159.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_115"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_115.geometry}
                  material={nodes.box_115.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_160.geometry}
                  material={nodes.wedge_160.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_161"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_161.geometry}
                  material={nodes.wedge_161.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_116.geometry}
                  material={nodes.box_116.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_162"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_162.geometry}
                  material={nodes.wedge_162.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_7" position={[0, -0.141, -5.704]}>
                <mesh
                  name="wedge_163"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_163.geometry}
                  material={nodes.wedge_163.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_117"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_117.geometry}
                  material={nodes.box_117.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_164"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_164.geometry}
                  material={nodes.wedge_164.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_165"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_165.geometry}
                  material={nodes.wedge_165.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_118.geometry}
                  material={nodes.box_118.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_166"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_166.geometry}
                  material={nodes.wedge_166.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_167"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_167.geometry}
                  material={nodes.wedge_167.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_119"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_119.geometry}
                  material={nodes.box_119.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_168"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_168.geometry}
                  material={nodes.wedge_168.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_8"
                position={[-4.94, -0.141, 2.852]}
                rotation={[-Math.PI, 1.047, -Math.PI]}>
                <mesh
                  name="wedge_169"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_169.geometry}
                  material={nodes.wedge_169.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_120.geometry}
                  material={nodes.box_120.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_170"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_170.geometry}
                  material={nodes.wedge_170.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_171"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_171.geometry}
                  material={nodes.wedge_171.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_121"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_121.geometry}
                  material={nodes.box_121.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_172"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_172.geometry}
                  material={nodes.wedge_172.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_173"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_173.geometry}
                  material={nodes.wedge_173.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_122.geometry}
                  material={nodes.box_122.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_174.geometry}
                  material={nodes.wedge_174.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_9"
                position={[4.94, 0.141, -2.852]}
                rotation={[0, -1.047, 0]}>
                <mesh
                  name="wedge_175"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_175.geometry}
                  material={nodes.wedge_175.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_123"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_123.geometry}
                  material={nodes.box_123.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_176"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_176.geometry}
                  material={nodes.wedge_176.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_177"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_177.geometry}
                  material={nodes.wedge_177.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_124.geometry}
                  material={nodes.box_124.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_178"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_178.geometry}
                  material={nodes.wedge_178.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_179"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_179.geometry}
                  material={nodes.wedge_179.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_125"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_125.geometry}
                  material={nodes.box_125.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_180"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_180.geometry}
                  material={nodes.wedge_180.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_10"
                position={[-4.94, 0.141, -2.852]}
                rotation={[0, 1.047, 0]}>
                <mesh
                  name="wedge_181"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_181.geometry}
                  material={nodes.wedge_181.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_126.geometry}
                  material={nodes.box_126.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_182"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_182.geometry}
                  material={nodes.wedge_182.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_183"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_183.geometry}
                  material={nodes.wedge_183.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_127"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_127.geometry}
                  material={nodes.box_127.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_184"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_184.geometry}
                  material={nodes.wedge_184.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_185"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_185.geometry}
                  material={nodes.wedge_185.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_128.geometry}
                  material={nodes.box_128.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_186"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_186.geometry}
                  material={nodes.wedge_186.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_11"
                position={[4.94, -0.141, 2.852]}
                rotation={[Math.PI, -1.048, Math.PI]}
                scale={[1, 1, 0.999]}>
                <mesh
                  name="wedge_187"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_187.geometry}
                  material={nodes.wedge_187.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_129"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_129.geometry}
                  material={nodes.box_129.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_188"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_188.geometry}
                  material={nodes.wedge_188.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_189"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_189.geometry}
                  material={nodes.wedge_189.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_130.geometry}
                  material={nodes.box_130.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_190"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_190.geometry}
                  material={nodes.wedge_190.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_191"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_191.geometry}
                  material={nodes.wedge_191.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_131"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_131.geometry}
                  material={nodes.box_131.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_192"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_192.geometry}
                  material={nodes.wedge_192.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
            </group>
            <group
              name="a8a1e29d-3524-4e2b-9cd6-de9c36e07c39_2"
              position={[-60.59, -19.915, -26.815]}
              rotation={[2.855, -1.273, -0.22]}
              scale={[0.999, 1, 1]}>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_12"
                position={[0, 0.141, 5.704]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="wedge_193"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_193.geometry}
                  material={nodes.wedge_193.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_132.geometry}
                  material={nodes.box_132.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_194"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_194.geometry}
                  material={nodes.wedge_194.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_195"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_195.geometry}
                  material={nodes.wedge_195.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_133"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_133.geometry}
                  material={nodes.box_133.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_196"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_196.geometry}
                  material={nodes.wedge_196.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_197"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_197.geometry}
                  material={nodes.wedge_197.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_134.geometry}
                  material={nodes.box_134.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_198"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_198.geometry}
                  material={nodes.wedge_198.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_13" position={[0, -0.141, -5.704]}>
                <mesh
                  name="wedge_199"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_199.geometry}
                  material={nodes.wedge_199.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_135"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_135.geometry}
                  material={nodes.box_135.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_200"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_200.geometry}
                  material={nodes.wedge_200.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_201"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_201.geometry}
                  material={nodes.wedge_201.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_136.geometry}
                  material={nodes.box_136.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_202"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_202.geometry}
                  material={nodes.wedge_202.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_203"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_203.geometry}
                  material={nodes.wedge_203.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_137"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_137.geometry}
                  material={nodes.box_137.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_204"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_204.geometry}
                  material={nodes.wedge_204.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_14"
                position={[-4.94, -0.141, 2.852]}
                rotation={[-Math.PI, 1.047, -Math.PI]}>
                <mesh
                  name="wedge_205"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_205.geometry}
                  material={nodes.wedge_205.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_138.geometry}
                  material={nodes.box_138.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_206"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_206.geometry}
                  material={nodes.wedge_206.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_207"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_207.geometry}
                  material={nodes.wedge_207.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_139"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_139.geometry}
                  material={nodes.box_139.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_208"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_208.geometry}
                  material={nodes.wedge_208.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_209"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_209.geometry}
                  material={nodes.wedge_209.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_140.geometry}
                  material={nodes.box_140.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_210"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_210.geometry}
                  material={nodes.wedge_210.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_15"
                position={[4.94, 0.141, -2.852]}
                rotation={[0, -1.047, 0]}>
                <mesh
                  name="wedge_211"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_211.geometry}
                  material={nodes.wedge_211.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_141"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_141.geometry}
                  material={nodes.box_141.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_212"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_212.geometry}
                  material={nodes.wedge_212.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_213"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_213.geometry}
                  material={nodes.wedge_213.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_142.geometry}
                  material={nodes.box_142.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_214"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_214.geometry}
                  material={nodes.wedge_214.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_215"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_215.geometry}
                  material={nodes.wedge_215.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_143"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_143.geometry}
                  material={nodes.box_143.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_216"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_216.geometry}
                  material={nodes.wedge_216.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_16"
                position={[-4.94, 0.141, -2.852]}
                rotation={[0, 1.047, 0]}>
                <mesh
                  name="wedge_217"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_217.geometry}
                  material={nodes.wedge_217.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_144.geometry}
                  material={nodes.box_144.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_218"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_218.geometry}
                  material={nodes.wedge_218.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_219"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_219.geometry}
                  material={nodes.wedge_219.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_145"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_145.geometry}
                  material={nodes.box_145.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_220"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_220.geometry}
                  material={nodes.wedge_220.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_221"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_221.geometry}
                  material={nodes.wedge_221.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_146.geometry}
                  material={nodes.box_146.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_222"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_222.geometry}
                  material={nodes.wedge_222.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_17"
                position={[4.94, -0.141, 2.852]}
                rotation={[Math.PI, -1.048, Math.PI]}
                scale={[1, 1, 0.999]}>
                <mesh
                  name="wedge_223"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_223.geometry}
                  material={nodes.wedge_223.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_147"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_147.geometry}
                  material={nodes.box_147.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_224"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_224.geometry}
                  material={nodes.wedge_224.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_225"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_225.geometry}
                  material={nodes.wedge_225.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_148.geometry}
                  material={nodes.box_148.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_226"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_226.geometry}
                  material={nodes.wedge_226.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_227"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_227.geometry}
                  material={nodes.wedge_227.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_149"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_149.geometry}
                  material={nodes.box_149.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_228"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_228.geometry}
                  material={nodes.wedge_228.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
            </group>
            <group
              name="a8a1e29d-3524-4e2b-9cd6-de9c36e07c39_3"
              position={[132.18, -19.915, 151.185]}
              rotation={[2.855, -1.273, -0.22]}
              scale={[0.999, 1, 1]}>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_18"
                position={[0, 0.141, 5.704]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="wedge_229"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_229.geometry}
                  material={nodes.wedge_229.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_150.geometry}
                  material={nodes.box_150.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_230"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_230.geometry}
                  material={nodes.wedge_230.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_231"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_231.geometry}
                  material={nodes.wedge_231.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_151"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_151.geometry}
                  material={nodes.box_151.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_232"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_232.geometry}
                  material={nodes.wedge_232.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_233"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_233.geometry}
                  material={nodes.wedge_233.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_152.geometry}
                  material={nodes.box_152.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_234"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_234.geometry}
                  material={nodes.wedge_234.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_19" position={[0, -0.141, -5.704]}>
                <mesh
                  name="wedge_235"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_235.geometry}
                  material={nodes.wedge_235.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_153"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_153.geometry}
                  material={nodes.box_153.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_236"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_236.geometry}
                  material={nodes.wedge_236.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_237"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_237.geometry}
                  material={nodes.wedge_237.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_154.geometry}
                  material={nodes.box_154.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_238"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_238.geometry}
                  material={nodes.wedge_238.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_239"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_239.geometry}
                  material={nodes.wedge_239.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_155"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_155.geometry}
                  material={nodes.box_155.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_240"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_240.geometry}
                  material={nodes.wedge_240.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_20"
                position={[-4.94, -0.141, 2.852]}
                rotation={[-Math.PI, 1.047, -Math.PI]}>
                <mesh
                  name="wedge_241"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_241.geometry}
                  material={nodes.wedge_241.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_156.geometry}
                  material={nodes.box_156.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_242"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_242.geometry}
                  material={nodes.wedge_242.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_243"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_243.geometry}
                  material={nodes.wedge_243.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_157"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_157.geometry}
                  material={nodes.box_157.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_244"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_244.geometry}
                  material={nodes.wedge_244.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_245"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_245.geometry}
                  material={nodes.wedge_245.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_158.geometry}
                  material={nodes.box_158.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_246"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_246.geometry}
                  material={nodes.wedge_246.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_21"
                position={[4.94, 0.141, -2.852]}
                rotation={[0, -1.047, 0]}>
                <mesh
                  name="wedge_247"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_247.geometry}
                  material={nodes.wedge_247.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_159"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_159.geometry}
                  material={nodes.box_159.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_248"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_248.geometry}
                  material={nodes.wedge_248.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_249"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_249.geometry}
                  material={nodes.wedge_249.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_160.geometry}
                  material={nodes.box_160.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_250"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_250.geometry}
                  material={nodes.wedge_250.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_251"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_251.geometry}
                  material={nodes.wedge_251.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_161"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_161.geometry}
                  material={nodes.box_161.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_252"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_252.geometry}
                  material={nodes.wedge_252.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_22"
                position={[-4.94, 0.141, -2.852]}
                rotation={[0, 1.047, 0]}>
                <mesh
                  name="wedge_253"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_253.geometry}
                  material={nodes.wedge_253.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_162"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_162.geometry}
                  material={nodes.box_162.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_254"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_254.geometry}
                  material={nodes.wedge_254.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_255"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_255.geometry}
                  material={nodes.wedge_255.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_163"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_163.geometry}
                  material={nodes.box_163.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_256"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_256.geometry}
                  material={nodes.wedge_256.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_257"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_257.geometry}
                  material={nodes.wedge_257.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_164"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_164.geometry}
                  material={nodes.box_164.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_258"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_258.geometry}
                  material={nodes.wedge_258.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
              <group
                name="02a99a12-98fe-4bc3-bef6-8be0b670ece7_23"
                position={[4.94, -0.141, 2.852]}
                rotation={[Math.PI, -1.048, Math.PI]}
                scale={[1, 1, 0.999]}>
                <mesh
                  name="wedge_259"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_259.geometry}
                  material={nodes.wedge_259.material}
                  position={[-1, 2.223, 4.344]}
                  rotation={[-1.047, 0, -Math.PI]}
                  scale={[0.999, 3, 0.25]}
                />
                <mesh
                  name="box_165"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_165.geometry}
                  material={nodes.box_165.material}
                  position={[0, 2.223, 4.344]}
                  rotation={[0.095, -1.567, 1.06]}
                  scale={[0.25, 2.999, 0.999]}
                />
                <mesh
                  name="wedge_260"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_260.geometry}
                  material={nodes.wedge_260.material}
                  position={[1, 2.223, 4.344]}
                  rotation={[2.094, 0, 0]}
                  scale={[1, 3, 0.249]}
                />
                <mesh
                  name="wedge_261"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_261.geometry}
                  material={nodes.wedge_261.material}
                  position={[2, 2.442, 1.208]}
                  rotation={[1.309, 0, 0]}
                  scale={[1, 4, 0.25]}
                />
                <mesh
                  name="box_166"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_166.geometry}
                  material={nodes.box_166.material}
                  position={[0, 2.442, 1.208]}
                  rotation={[-1.832, -Math.PI / 2, 0]}
                  scale={[0.25, 3.998, 2.999]}
                />
                <mesh
                  name="wedge_262"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_262.geometry}
                  material={nodes.wedge_262.material}
                  position={[-2, 2.442, 1.208]}
                  rotation={[-1.833, 0, -Math.PI]}
                  scale={[0.999, 4, 0.25]}
                />
                <mesh
                  name="wedge_263"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_263.geometry}
                  material={nodes.wedge_263.material}
                  position={[1.5, -0.518, -3.142]}
                  rotation={[-2.356, 0, 0]}
                  scale={[2, 6.999, 0.25]}
                />
                <mesh
                  name="box_167"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_167.geometry}
                  material={nodes.box_167.material}
                  position={[0, -0.518, -3.142]}
                  rotation={[2.149, -1.564, 1.356]}
                  scale={[0.25, 7, 1]}
                />
                <mesh
                  name="wedge_264"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_264.geometry}
                  material={nodes.wedge_264.material}
                  position={[-1.5, -0.518, -3.142]}
                  rotation={[0.785, 0, Math.PI]}
                  scale={[1.999, 6.999, 0.25]}
                />
              </group>
            </group>
            <group
              name="73272db1-7dc8-431e-972f-067c0bd9f502"
              position={[70.88, -14, 124.925]}
              rotation={[-Math.PI, 1.309, -Math.PI]}>
              <mesh
                name="wedge_265"
                castShadow
                receiveShadow
                geometry={nodes.wedge_265.geometry}
                material={nodes.wedge_265.material}
                position={[-0.125, 6.5, -1.125]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="cornerPyramid3_55"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_55.geometry}
                material={nodes.cornerPyramid3_55.material}
                position={[0.625, 6.5, -1.125]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.5, 1, 0.5]}
              />
              <mesh
                name="box_168"
                castShadow
                receiveShadow
                geometry={nodes.box_168.geometry}
                material={nodes.box_168.material}
                position={[-0.125, 7.5, -0.125]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[2, 1, 0.5]}
              />
              <mesh
                name="wedge_266"
                castShadow
                receiveShadow
                geometry={nodes.wedge_266.geometry}
                material={nodes.wedge_266.material}
                position={[0.625, 6.5, -0.375]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="box_169"
                castShadow
                receiveShadow
                geometry={nodes.box_169.geometry}
                material={nodes.box_169.material}
                position={[-0.125, 7.5, 0.375]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="wedge_267"
                castShadow
                receiveShadow
                geometry={nodes.wedge_267.geometry}
                material={nodes.wedge_267.material}
                position={[0.625, 7.5, 0.375]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_56"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_56.geometry}
                material={nodes.cornerPyramid3_56.material}
                position={[0.625, 6.5, 0.375]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[0.5, 1, 0.5]}
              />
              <mesh
                name="box_170"
                castShadow
                receiveShadow
                geometry={nodes.box_170.geometry}
                material={nodes.box_170.material}
                position={[-0.125, 5, -0.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 2, 0.75]}
              />
              <mesh
                name="wedge_268"
                castShadow
                receiveShadow
                geometry={nodes.wedge_268.geometry}
                material={nodes.wedge_268.material}
                position={[-0.5, 5.125, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.75}
              />
              <mesh
                name="wedge_269"
                castShadow
                receiveShadow
                geometry={nodes.wedge_269.geometry}
                material={nodes.wedge_269.material}
                position={[-0.375, 4.375, 0.125]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
                scale={[0.75, 0.5, 0.5]}
              />
              <mesh
                name="cornerPyramid3_57"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_57.geometry}
                material={nodes.cornerPyramid3_57.material}
                position={[-0.875, 6.5, 0.375]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.5, 1, 0.5]}
              />
              <mesh
                name="wedge_270"
                castShadow
                receiveShadow
                geometry={nodes.wedge_270.geometry}
                material={nodes.wedge_270.material}
                position={[-0.875, 7.5, 0.375]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.5, 0.499, 1]}
              />
              <mesh
                name="wedge_271"
                castShadow
                receiveShadow
                geometry={nodes.wedge_271.geometry}
                material={nodes.wedge_271.material}
                position={[-0.125, 6.5, 0.375]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="wedge_272"
                castShadow
                receiveShadow
                geometry={nodes.wedge_272.geometry}
                material={nodes.wedge_272.material}
                position={[0.25, 5.125, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.75}
              />
              <mesh
                name="wedge_273"
                castShadow
                receiveShadow
                geometry={nodes.wedge_273.geometry}
                material={nodes.wedge_273.material}
                position={[0.125, 4.375, 0.25]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.75, 0.5, 0.25]}
              />
              <mesh
                name="box_171"
                castShadow
                receiveShadow
                geometry={nodes.box_171.geometry}
                material={nodes.box_171.material}
                position={[-2.375, -0.5, -0.375]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="box_172"
                castShadow
                receiveShadow
                geometry={nodes.box_172.geometry}
                material={nodes.box_172.material}
                position={[2.125, -0.5, -0.375]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="wedge_274"
                castShadow
                receiveShadow
                geometry={nodes.wedge_274.geometry}
                material={nodes.wedge_274.material}
                position={[-1, 5.625, 0.25]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.25, 0.75, 0.25]}
              />
              <mesh
                name="wedge_275"
                castShadow
                receiveShadow
                geometry={nodes.wedge_275.geometry}
                material={nodes.wedge_275.material}
                position={[0.75, 5.625, 0.25]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.25, 0.75, 0.25]}
              />
              <mesh
                name="wedge_276"
                castShadow
                receiveShadow
                geometry={nodes.wedge_276.geometry}
                material={nodes.wedge_276.material}
                position={[-1, 5.25, 0.25]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.5, 0.75, 0.25]}
              />
              <mesh
                name="wedge_277"
                castShadow
                receiveShadow
                geometry={nodes.wedge_277.geometry}
                material={nodes.wedge_277.material}
                position={[0.75, 5.25, 0.25]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.5, 0.75, 0.25]}
              />
              <mesh
                name="wedge_278"
                castShadow
                receiveShadow
                geometry={nodes.wedge_278.geometry}
                material={nodes.wedge_278.material}
                position={[0.875, 0, 0.75]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
                scale={[2, 1, 0.25]}
              />
              <mesh
                name="wedge_279"
                castShadow
                receiveShadow
                geometry={nodes.wedge_279.geometry}
                material={nodes.wedge_279.material}
                position={[-1.125, 0, 0.625]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1.999, 1, 0.5]}
              />
              <mesh
                name="box_173"
                castShadow
                receiveShadow
                geometry={nodes.box_173.geometry}
                material={nodes.box_173.material}
                position={[-0.125, 2, 0.25]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[3, 4, 0.25]}
              />
              <mesh
                name="box_174"
                castShadow
                receiveShadow
                geometry={nodes.box_174.geometry}
                material={nodes.box_174.material}
                position={[1.125, 3, 0.75]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 4, 0.25]}
              />
              <mesh
                name="wedge_280"
                castShadow
                receiveShadow
                geometry={nodes.wedge_280.geometry}
                material={nodes.wedge_280.material}
                position={[0.625, 3, 0.75]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[4, 0.5, 0.25]}
              />
              <mesh
                name="box_175"
                castShadow
                receiveShadow
                geometry={nodes.box_175.geometry}
                material={nodes.box_175.material}
                position={[-0.125, 2, -1.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[3, 6, 0.25]}
              />
              <mesh
                name="wedge_281"
                castShadow
                receiveShadow
                geometry={nodes.wedge_281.geometry}
                material={nodes.wedge_281.material}
                position={[1, 5.25, -1.25]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.75, 0.5, 0.75]}
              />
              <mesh
                name="wedge_282"
                castShadow
                receiveShadow
                geometry={nodes.wedge_282.geometry}
                material={nodes.wedge_282.material}
                position={[-1.25, 5.25, -1.25]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.75, 0.5, 0.75]}
              />
              <mesh
                name="cornerPyramid3_58"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_58.geometry}
                material={nodes.cornerPyramid3_58.material}
                position={[-2.125, 5.25, -1.25]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 0.5, 0.75]}
              />
              <mesh
                name="wedge_283"
                castShadow
                receiveShadow
                geometry={nodes.wedge_283.geometry}
                material={nodes.wedge_283.material}
                position={[-2.125, 5.25, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 0.5, 1]}
              />
              <mesh
                name="wedge_284"
                castShadow
                receiveShadow
                geometry={nodes.wedge_284.geometry}
                material={nodes.wedge_284.material}
                position={[-0.125, 8.75, 0.375]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_59"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_59.geometry}
                material={nodes.cornerPyramid3_59.material}
                position={[0.625, 8.75, 0.375]}
                scale={0.5}
              />
              <mesh
                name="cornerPyramid3_60"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_60.geometry}
                material={nodes.cornerPyramid3_60.material}
                position={[-0.875, 8.75, 0.375]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.5}
              />
              <mesh
                name="wedge_285"
                castShadow
                receiveShadow
                geometry={nodes.wedge_285.geometry}
                material={nodes.wedge_285.material}
                position={[-0.875, 7.5, -1.125]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.499, 0.499, 1]}
              />
              <mesh
                name="wedge_286"
                castShadow
                receiveShadow
                geometry={nodes.wedge_286.geometry}
                material={nodes.wedge_286.material}
                position={[0.625, 7.5, -1.125]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.499, 0.5, 1]}
              />
              <mesh
                name="wedge_287"
                castShadow
                receiveShadow
                geometry={nodes.wedge_287.geometry}
                material={nodes.wedge_287.material}
                position={[0.625, 8.75, -0.375]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="wedge_288"
                castShadow
                receiveShadow
                geometry={nodes.wedge_288.geometry}
                material={nodes.wedge_288.material}
                position={[-0.875, 8.75, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_61"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_61.geometry}
                material={nodes.cornerPyramid3_61.material}
                position={[-0.875, 8.75, -1.125]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.5}
              />
              <mesh
                name="cornerPyramid3_62"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_62.geometry}
                material={nodes.cornerPyramid3_62.material}
                position={[0.625, 8.75, -1.125]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.5}
              />
              <mesh
                name="wedge_289"
                castShadow
                receiveShadow
                geometry={nodes.wedge_289.geometry}
                material={nodes.wedge_289.material}
                position={[-0.125, 8.75, -1.125]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_63"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_63.geometry}
                material={nodes.cornerPyramid3_63.material}
                position={[-0.875, 6.5, -1.125]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[0.5, 1, 0.5]}
              />
              <mesh
                name="wedge_290"
                castShadow
                receiveShadow
                geometry={nodes.wedge_290.geometry}
                material={nodes.wedge_290.material}
                position={[-0.875, 6.5, -0.375]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="box_176"
                castShadow
                receiveShadow
                geometry={nodes.box_176.geometry}
                material={nodes.box_176.material}
                position={[-0.125, 7.5, -0.625]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[2, 1, 0.5]}
              />
              <mesh
                name="wedge_291"
                castShadow
                receiveShadow
                geometry={nodes.wedge_291.geometry}
                material={nodes.wedge_291.material}
                position={[0.625, 8.25, 0.375]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.5}
              />
              <mesh
                name="wedge_292"
                castShadow
                receiveShadow
                geometry={nodes.wedge_292.geometry}
                material={nodes.wedge_292.material}
                position={[-0.875, 8.25, 0.375]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.5, 0.499, 0.5]}
              />
              <mesh
                name="wedge_293"
                castShadow
                receiveShadow
                geometry={nodes.wedge_293.geometry}
                material={nodes.wedge_293.material}
                position={[0.625, 8.25, -1.125]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.5}
              />
              <mesh
                name="wedge_294"
                castShadow
                receiveShadow
                geometry={nodes.wedge_294.geometry}
                material={nodes.wedge_294.material}
                position={[-0.875, 8.25, -1.125]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={0.499}
              />
              <mesh
                name="box_177"
                castShadow
                receiveShadow
                geometry={nodes.box_177.geometry}
                material={nodes.box_177.material}
                position={[-0.125, 8.25, 0.375]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="box_178"
                castShadow
                receiveShadow
                geometry={nodes.box_178.geometry}
                material={nodes.box_178.material}
                position={[-0.125, 8.25, -1.125]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="box_179"
                castShadow
                receiveShadow
                geometry={nodes.box_179.geometry}
                material={nodes.box_179.material}
                position={[-0.875, 8.25, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="box_180"
                castShadow
                receiveShadow
                geometry={nodes.box_180.geometry}
                material={nodes.box_180.material}
                position={[0.625, 8.25, -0.375]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="box_181"
                castShadow
                receiveShadow
                geometry={nodes.box_181.geometry}
                material={nodes.box_181.material}
                position={[-0.125, 8.5, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
              />
              <mesh
                name="wedge_295"
                castShadow
                receiveShadow
                geometry={nodes.wedge_295.geometry}
                material={nodes.wedge_295.material}
                position={[-1.375, 5.25, 0.5]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 0.5, 0.5]}
              />
              <mesh
                name="wedge_296"
                castShadow
                receiveShadow
                geometry={nodes.wedge_296.geometry}
                material={nodes.wedge_296.material}
                position={[0.25, 4.5, 0.25]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 0.75, 0.25]}
              />
              <mesh
                name="box_182"
                castShadow
                receiveShadow
                geometry={nodes.box_182.geometry}
                material={nodes.box_182.material}
                position={[0.75, 5.375, -0.625]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 0.75, 1]}
              />
              <mesh
                name="box_183"
                castShadow
                receiveShadow
                geometry={nodes.box_183.geometry}
                material={nodes.box_183.material}
                position={[-1, 5.375, -0.625]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 0.75, 1]}
              />
              <mesh
                name="box_184"
                castShadow
                receiveShadow
                geometry={nodes.box_184.geometry}
                material={nodes.box_184.material}
                position={[-1.375, 3, 0.75]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 4, 0.25]}
              />
              <mesh
                name="wedge_297"
                castShadow
                receiveShadow
                geometry={nodes.wedge_297.geometry}
                material={nodes.wedge_297.material}
                position={[-0.875, 3, 0.5]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={[4, 0.5, 0.75]}
              />
              <mesh
                name="wedge_298"
                castShadow
                receiveShadow
                geometry={nodes.wedge_298.geometry}
                material={nodes.wedge_298.material}
                position={[-0.5, 4.5, 0.25]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={[1, 0.75, 0.25]}
              />
              <mesh
                name="box_185"
                castShadow
                receiveShadow
                geometry={nodes.box_185.geometry}
                material={nodes.box_185.material}
                position={[-1, 4.5, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 1, 0.75]}
              />
              <mesh
                name="wedge_299"
                castShadow
                receiveShadow
                geometry={nodes.wedge_299.geometry}
                material={nodes.wedge_299.material}
                position={[0.25, 5.25, -1]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.75, 0.5, 0.75]}
              />
              <mesh
                name="wedge_300"
                castShadow
                receiveShadow
                geometry={nodes.wedge_300.geometry}
                material={nodes.wedge_300.material}
                position={[-0.5, 5.25, -1]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.75, 0.5, 0.75]}
              />
              <mesh
                name="box_186"
                castShadow
                receiveShadow
                geometry={nodes.box_186.geometry}
                material={nodes.box_186.material}
                position={[-0.125, 5.375, -1.25]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 0.75, 1]}
              />
              <mesh
                name="wedge_301"
                castShadow
                receiveShadow
                geometry={nodes.wedge_301.geometry}
                material={nodes.wedge_301.material}
                position={[-0.875, 5.25, -1.25]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.25, 0.5, 1]}
              />
              <mesh
                name="wedge_302"
                castShadow
                receiveShadow
                geometry={nodes.wedge_302.geometry}
                material={nodes.wedge_302.material}
                position={[-0.625, 5.25, -1]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.25, 0.5, 1]}
              />
              <mesh
                name="box_187"
                castShadow
                receiveShadow
                geometry={nodes.box_187.geometry}
                material={nodes.box_187.material}
                position={[0.25, 5.25, -1.5]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 0.5, 0.75]}
              />
              <mesh
                name="wedge_303"
                castShadow
                receiveShadow
                geometry={nodes.wedge_303.geometry}
                material={nodes.wedge_303.material}
                position={[0.625, 5.25, -1.25]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.249, 0.5, 0.999]}
              />
              <mesh
                name="wedge_304"
                castShadow
                receiveShadow
                geometry={nodes.wedge_304.geometry}
                material={nodes.wedge_304.material}
                position={[0.375, 5.25, -1]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.25, 0.5, 0.999]}
              />
              <mesh
                name="box_188"
                castShadow
                receiveShadow
                geometry={nodes.box_188.geometry}
                material={nodes.box_188.material}
                position={[-0.5, 5.25, -1.5]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 0.5, 0.75]}
              />
              <mesh
                name="wedge_305"
                castShadow
                receiveShadow
                geometry={nodes.wedge_305.geometry}
                material={nodes.wedge_305.material}
                position={[0.875, 5.125, -1.5]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.25, 0.5, 0.75]}
              />
              <mesh
                name="wedge_306"
                castShadow
                receiveShadow
                geometry={nodes.wedge_306.geometry}
                material={nodes.wedge_306.material}
                position={[0.625, 5.125, -1.25]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.25, 0.5, 0.75]}
              />
              <mesh
                name="wedge_307"
                castShadow
                receiveShadow
                geometry={nodes.wedge_307.geometry}
                material={nodes.wedge_307.material}
                position={[-0.875, 5.125, -1.25]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.25, 0.5, 0.75]}
              />
              <mesh
                name="wedge_308"
                castShadow
                receiveShadow
                geometry={nodes.wedge_308.geometry}
                material={nodes.wedge_308.material}
                position={[-1.125, 5.125, -1.5]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.25, 0.5, 0.75]}
              />
              <mesh
                name="box_189"
                castShadow
                receiveShadow
                geometry={nodes.box_189.geometry}
                material={nodes.box_189.material}
                position={[-1.25, 5.25, -0.875]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.25, 0.5, 1]}
              />
              <mesh
                name="wedge_309"
                castShadow
                receiveShadow
                geometry={nodes.wedge_309.geometry}
                material={nodes.wedge_309.material}
                position={[1.875, 5.25, -0.375]}
                scale={[1, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_64"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_64.geometry}
                material={nodes.cornerPyramid3_64.material}
                position={[1.875, 5.25, 0.5]}
                scale={[1, 0.5, 0.75]}
              />
              <mesh
                name="wedge_310"
                castShadow
                receiveShadow
                geometry={nodes.wedge_310.geometry}
                material={nodes.wedge_310.material}
                position={[1.125, 5.25, 0.5]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 0.5, 0.5]}
              />
              <mesh
                name="cornerPyramid3_65"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_65.geometry}
                material={nodes.cornerPyramid3_65.material}
                position={[1.875, 5.25, -1.25]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.75, 0.5, 1]}
              />
              <mesh
                name="box_190"
                castShadow
                receiveShadow
                geometry={nodes.box_190.geometry}
                material={nodes.box_190.material}
                position={[1, 5.25, -0.875]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_66"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_66.geometry}
                material={nodes.cornerPyramid3_66.material}
                position={[-2.125, 5.25, 0.5]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 0.5, 1]}
              />
              <mesh
                name="box_191"
                castShadow
                receiveShadow
                geometry={nodes.box_191.geometry}
                material={nodes.box_191.material}
                position={[0.75, 4.5, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 1, 0.75]}
              />
              <mesh
                name="box_192"
                castShadow
                receiveShadow
                geometry={nodes.box_192.geometry}
                material={nodes.box_192.material}
                position={[1.125, 5.375, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 0.25, 1]}
              />
              <mesh
                name="box_193"
                castShadow
                receiveShadow
                geometry={nodes.box_193.geometry}
                material={nodes.box_193.material}
                position={[-1.375, 5.375, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 0.25, 1]}
              />
              <mesh
                name="box_194"
                castShadow
                receiveShadow
                geometry={nodes.box_194.geometry}
                material={nodes.box_194.material}
                position={[0.875, -4.5, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 7, 1]}
              />
              <mesh
                name="wedge_311"
                castShadow
                receiveShadow
                geometry={nodes.wedge_311.geometry}
                material={nodes.wedge_311.material}
                position={[0.125, -4.5, -0.375]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
                scale={[7, 0.5, 1]}
              />
              <mesh
                name="wedge_312"
                castShadow
                receiveShadow
                geometry={nodes.wedge_312.geometry}
                material={nodes.wedge_312.material}
                position={[-0.375, -4.5, -0.375]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[7, 0.5, 1]}
              />
              <mesh
                name="box_195"
                castShadow
                receiveShadow
                geometry={nodes.box_195.geometry}
                material={nodes.box_195.material}
                position={[-1.125, -4.5, -0.375]}
                scale={[1, 7, 1]}
              />
              <mesh
                name="wedge_313"
                castShadow
                receiveShadow
                geometry={nodes.wedge_313.geometry}
                material={nodes.wedge_313.material}
                position={[0.875, -4.5, 0.375]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[7, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_67"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_67.geometry}
                material={nodes.cornerPyramid3_67.material}
                position={[0.125, -4.5, 0.375]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[7, 0.5, 0.5]}
              />
              <mesh
                name="wedge_314"
                castShadow
                receiveShadow
                geometry={nodes.wedge_314.geometry}
                material={nodes.wedge_314.material}
                position={[-1.125, -4.5, 0.375]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[7, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_68"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_68.geometry}
                material={nodes.cornerPyramid3_68.material}
                position={[-0.375, -4.5, 0.375]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[6.999, 0.5, 0.5]}
              />
              <mesh
                name="cornerPyramid3_69"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_69.geometry}
                material={nodes.cornerPyramid3_69.material}
                position={[0.125, -1, -1.125]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
                scale={[2, 0.499, 0.499]}
              />
              <mesh
                name="wedge_315"
                castShadow
                receiveShadow
                geometry={nodes.wedge_315.geometry}
                material={nodes.wedge_315.material}
                position={[0.875, -1, -1.125]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[2, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_70"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_70.geometry}
                material={nodes.cornerPyramid3_70.material}
                position={[-0.375, -1, -1.125]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[2, 0.5, 0.5]}
              />
              <mesh
                name="wedge_316"
                castShadow
                receiveShadow
                geometry={nodes.wedge_316.geometry}
                material={nodes.wedge_316.material}
                position={[-1.125, -1, -1.125]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[2, 0.5, 1]}
              />
              <mesh
                name="wedge_317"
                castShadow
                receiveShadow
                geometry={nodes.wedge_317.geometry}
                material={nodes.wedge_317.material}
                position={[1.625, 2, 0.5]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.5, 0.75, 6]}
              />
              <mesh
                name="wedge_318"
                castShadow
                receiveShadow
                geometry={nodes.wedge_318.geometry}
                material={nodes.wedge_318.material}
                position={[1.625, 2, -1.25]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.5, 0.75, 6]}
              />
              <mesh
                name="wedge_319"
                castShadow
                receiveShadow
                geometry={nodes.wedge_319.geometry}
                material={nodes.wedge_319.material}
                position={[-1.875, 2, 0.5]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.5, 0.75, 6]}
              />
              <mesh
                name="wedge_320"
                castShadow
                receiveShadow
                geometry={nodes.wedge_320.geometry}
                material={nodes.wedge_320.material}
                position={[-1.875, 2, -1.25]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.5, 0.75, 6]}
              />
              <mesh
                name="box_196"
                castShadow
                receiveShadow
                geometry={nodes.box_196.geometry}
                material={nodes.box_196.material}
                position={[-0.125, 2, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[4, 6, 1]}
              />
              <mesh
                name="box_197"
                castShadow
                receiveShadow
                geometry={nodes.box_197.geometry}
                material={nodes.box_197.material}
                position={[-0.125, -0.375, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[3, 0.25, 2]}
              />
              <mesh
                name="box_198"
                castShadow
                receiveShadow
                geometry={nodes.box_198.geometry}
                material={nodes.box_198.material}
                position={[-0.125, -0.75, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[3, 0.5, 2]}
              />
              <mesh
                name="box_199"
                castShadow
                receiveShadow
                geometry={nodes.box_199.geometry}
                material={nodes.box_199.material}
                position={[-0.125, -0.125, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[3, 0.25, 2]}
              />
              <mesh
                name="wedge_321"
                castShadow
                receiveShadow
                geometry={nodes.wedge_321.geometry}
                material={nodes.wedge_321.material}
                position={[0.75, 5.375, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 0.75, 0.25]}
              />
              <mesh
                name="wedge_322"
                castShadow
                receiveShadow
                geometry={nodes.wedge_322.geometry}
                material={nodes.wedge_322.material}
                position={[-1, 5.375, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 0.75, 0.25]}
              />
              <mesh
                name="box_200"
                castShadow
                receiveShadow
                geometry={nodes.box_200.geometry}
                material={nodes.box_200.material}
                position={[2.125, 2.5, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 5, 1]}
              />
              <mesh
                name="box_201"
                castShadow
                receiveShadow
                geometry={nodes.box_201.geometry}
                material={nodes.box_201.material}
                position={[-2.375, 2.5, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 5, 1]}
              />
              <mesh
                name="truncatedPyramid4_50"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_50.geometry}
                material={nodes.truncatedPyramid4_50.material}
                position={[-2.75, 2.5, -0.375]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[5, 0.499, 1]}
              />
              <mesh
                name="box_202"
                castShadow
                receiveShadow
                geometry={nodes.box_202.geometry}
                material={nodes.box_202.material}
                position={[-0.125, 7.5, -1.125]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="truncatedPyramid4_51"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_51.geometry}
                material={nodes.truncatedPyramid4_51.material}
                position={[2.625, 2.5, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={[5, 1, 1]}
              />
              <mesh
                name="cornerPyramid4_11"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_11.geometry}
                material={nodes.cornerPyramid4_11.material}
                position={[-1.625, 3.5, -1.25]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[1, 0.75, 3]}
              />
              <mesh
                name="truncatedPyramid4_52"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_52.geometry}
                material={nodes.truncatedPyramid4_52.material}
                position={[-2.375, 2.5, -0.375]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[5, 1, 1]}
              />
              <mesh
                name="cornerPyramid4_12"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_12.geometry}
                material={nodes.cornerPyramid4_12.material}
                position={[-1.625, 3.5, 0.5]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[2.999, 0.75, 0.999]}
              />
              <mesh
                name="cornerPyramid4_13"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_13.geometry}
                material={nodes.cornerPyramid4_13.material}
                position={[1.875, 3.5, 0.5]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 0.75, 3]}
              />
              <mesh
                name="cornerPyramid4_14"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_14.geometry}
                material={nodes.cornerPyramid4_14.material}
                position={[1.875, 3.5, -1.25]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[2.999, 0.749, 1]}
              />
              <mesh
                name="cornerPyramid4_15"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_15.geometry}
                material={nodes.cornerPyramid4_15.material}
                position={[-2.125, 3.5, 0.5]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[2.999, 0.75, 0.999]}
              />
              <mesh
                name="cornerPyramid4_16"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_16.geometry}
                material={nodes.cornerPyramid4_16.material}
                position={[-2.125, 3.5, -1.25]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[1, 0.75, 3]}
              />
              <mesh
                name="box_203"
                castShadow
                receiveShadow
                geometry={nodes.box_203.geometry}
                material={nodes.box_203.material}
                position={[0.875, -8.75, 0.125]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 0.5, 1]}
              />
              <mesh
                name="box_204"
                castShadow
                receiveShadow
                geometry={nodes.box_204.geometry}
                material={nodes.box_204.material}
                position={[0.875, -8.75, 1.125]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="wedge_323"
                castShadow
                receiveShadow
                geometry={nodes.wedge_323.geometry}
                material={nodes.wedge_323.material}
                position={[0.5, -8.75, 1.125]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.25, 1, 0.5]}
              />
              <mesh
                name="wedge_324"
                castShadow
                receiveShadow
                geometry={nodes.wedge_324.geometry}
                material={nodes.wedge_324.material}
                position={[1.25, -8.75, 1.125]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.25, 1, 0.5]}
              />
              <mesh
                name="wedge_325"
                castShadow
                receiveShadow
                geometry={nodes.wedge_325.geometry}
                material={nodes.wedge_325.material}
                position={[0.5, -8.5, -0.625]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.25, 0.5, 1]}
              />
              <mesh
                name="wedge_326"
                castShadow
                receiveShadow
                geometry={nodes.wedge_326.geometry}
                material={nodes.wedge_326.material}
                position={[1.25, -8.5, -0.625]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.25, 0.5, 1]}
              />
              <mesh
                name="box_205"
                castShadow
                receiveShadow
                geometry={nodes.box_205.geometry}
                material={nodes.box_205.material}
                position={[0.875, -8.5, -0.375]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="wedge_327"
                castShadow
                receiveShadow
                geometry={nodes.wedge_327.geometry}
                material={nodes.wedge_327.material}
                position={[0.875, -8.375, 0.625]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.25, 1, 0.5]}
              />
              <mesh
                name="wedge_328"
                castShadow
                receiveShadow
                geometry={nodes.wedge_328.geometry}
                material={nodes.wedge_328.material}
                position={[-1.125, -8.375, 0.625]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.25, 1, 0.5]}
              />
              <mesh
                name="box_206"
                castShadow
                receiveShadow
                geometry={nodes.box_206.geometry}
                material={nodes.box_206.material}
                position={[-1.125, -8.5, -0.375]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="wedge_329"
                castShadow
                receiveShadow
                geometry={nodes.wedge_329.geometry}
                material={nodes.wedge_329.material}
                position={[-0.75, -8.5, -0.625]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.25, 0.5, 1]}
              />
              <mesh
                name="wedge_330"
                castShadow
                receiveShadow
                geometry={nodes.wedge_330.geometry}
                material={nodes.wedge_330.material}
                position={[-1.5, -8.5, -0.625]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.25, 0.5, 1]}
              />
              <mesh
                name="wedge_331"
                castShadow
                receiveShadow
                geometry={nodes.wedge_331.geometry}
                material={nodes.wedge_331.material}
                position={[-0.75, -8.75, 1.125]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.25, 1, 0.5]}
              />
              <mesh
                name="wedge_332"
                castShadow
                receiveShadow
                geometry={nodes.wedge_332.geometry}
                material={nodes.wedge_332.material}
                position={[-1.5, -8.75, 1.125]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.25, 1, 0.5]}
              />
              <mesh
                name="box_207"
                castShadow
                receiveShadow
                geometry={nodes.box_207.geometry}
                material={nodes.box_207.material}
                position={[-1.125, -8.75, 1.125]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="box_208"
                castShadow
                receiveShadow
                geometry={nodes.box_208.geometry}
                material={nodes.box_208.material}
                position={[-1.125, -8.75, 0.125]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 0.5, 1]}
              />
            </group>
            <group
              name="2bb7208b-9b40-44eb-8315-d1d2cce4daf4"
              position={[95.74, -15.125, 131.885]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}>
              <mesh
                name="box_209"
                castShadow
                receiveShadow
                geometry={nodes.box_209.geometry}
                material={nodes.box_209.material}
                position={[0.688, -8, -0.188]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 0.25, 0.75]}
              />
              <mesh
                name="wedge_333"
                castShadow
                receiveShadow
                geometry={nodes.wedge_333.geometry}
                material={nodes.wedge_333.material}
                position={[0.688, -8, 0.563]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.5, 0.25, 0.75]}
              />
              <mesh
                name="wedge_334"
                castShadow
                receiveShadow
                geometry={nodes.wedge_334.geometry}
                material={nodes.wedge_334.material}
                position={[-0.813, -7.5, -0.188]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 0.75, 0.75]}
              />
              <mesh
                name="wedge_335"
                castShadow
                receiveShadow
                geometry={nodes.wedge_335.geometry}
                material={nodes.wedge_335.material}
                position={[-0.813, -8, 0.563]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.5, 0.25, 0.75]}
              />
              <mesh
                name="box_210"
                castShadow
                receiveShadow
                geometry={nodes.box_210.geometry}
                material={nodes.box_210.material}
                position={[-0.813, -8, -0.188]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 0.25, 0.75]}
              />
              <mesh
                name="wedge_336"
                castShadow
                receiveShadow
                geometry={nodes.wedge_336.geometry}
                material={nodes.wedge_336.material}
                position={[0.688, -7.5, -0.188]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 0.75, 0.75]}
              />
              <mesh
                name="cornerPyramid3_71"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_71.geometry}
                material={nodes.cornerPyramid3_71.material}
                position={[0.188, -5.375, -0.313]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
                scale={[5, 0.5, 0.5]}
              />
              <mesh
                name="cornerPyramid3_72"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_72.geometry}
                material={nodes.cornerPyramid3_72.material}
                position={[-0.313, -5.375, -0.313]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[5, 0.499, 0.5]}
              />
              <mesh
                name="cornerPyramid3_73"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_73.geometry}
                material={nodes.cornerPyramid3_73.material}
                position={[0.188, -5.375, 0.188]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[5, 0.5, 0.5]}
              />
              <mesh
                name="cornerPyramid3_74"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_74.geometry}
                material={nodes.cornerPyramid3_74.material}
                position={[-0.313, -5.375, 0.188]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[5, 0.5, 0.5]}
              />
              <mesh
                name="box_211"
                castShadow
                receiveShadow
                geometry={nodes.box_211.geometry}
                material={nodes.box_211.material}
                position={[-0.813, -5.375, -0.188]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 5, 0.5]}
              />
              <mesh
                name="wedge_337"
                castShadow
                receiveShadow
                geometry={nodes.wedge_337.geometry}
                material={nodes.wedge_337.material}
                position={[-0.813, -5.375, 0.313]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[5, 0.25, 0.5]}
              />
              <mesh
                name="wedge_338"
                castShadow
                receiveShadow
                geometry={nodes.wedge_338.geometry}
                material={nodes.wedge_338.material}
                position={[0.688, -5.375, 0.313]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[5, 0.25, 0.5]}
              />
              <mesh
                name="box_212"
                castShadow
                receiveShadow
                geometry={nodes.box_212.geometry}
                material={nodes.box_212.material}
                position={[0.688, -5.375, -0.188]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 5, 0.5]}
              />
              <mesh
                name="box_213"
                castShadow
                receiveShadow
                geometry={nodes.box_213.geometry}
                material={nodes.box_213.material}
                position={[-0.063, 4.625, -0.063]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 1, 2]}
              />
              <mesh
                name="wedge_339"
                castShadow
                receiveShadow
                geometry={nodes.wedge_339.geometry}
                material={nodes.wedge_339.material}
                position={[-0.688, 6.125, 0.188]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.75, 1, 0.5]}
              />
              <mesh
                name="wedge_340"
                castShadow
                receiveShadow
                geometry={nodes.wedge_340.geometry}
                material={nodes.wedge_340.material}
                position={[0.563, 6.125, 0.188]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.75, 1, 0.5]}
              />
              <mesh
                name="wedge_341"
                castShadow
                receiveShadow
                geometry={nodes.wedge_341.geometry}
                material={nodes.wedge_341.material}
                position={[1.438, 4.875, -0.063]}
                scale={[1, 0.5, 0.5]}
              />
              <mesh
                name="wedge_342"
                castShadow
                receiveShadow
                geometry={nodes.wedge_342.geometry}
                material={nodes.wedge_342.material}
                position={[-1.563, 4.875, -0.063]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 0.5, 0.5]}
              />
              <mesh
                name="wedge_343"
                castShadow
                receiveShadow
                geometry={nodes.wedge_343.geometry}
                material={nodes.wedge_343.material}
                position={[1.188, 4.625, -0.063]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="wedge_344"
                castShadow
                receiveShadow
                geometry={nodes.wedge_344.geometry}
                material={nodes.wedge_344.material}
                position={[-1.313, 4.625, -0.063]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="box_214"
                castShadow
                receiveShadow
                geometry={nodes.box_214.geometry}
                material={nodes.box_214.material}
                position={[1.188, 3.625, -0.063]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 1, 0.5]}
              />
              <mesh
                name="wedge_345"
                castShadow
                receiveShadow
                geometry={nodes.wedge_345.geometry}
                material={nodes.wedge_345.material}
                position={[1.188, 3.625, 0.813]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.5, 0.75, 0.999]}
              />
              <mesh
                name="cornerPyramid3_75"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_75.geometry}
                material={nodes.cornerPyramid3_75.material}
                position={[1.188, 4.5, 0.813]}
                scale={[0.5, 0.75, 0.75]}
              />
              <mesh
                name="wedge_346"
                castShadow
                receiveShadow
                geometry={nodes.wedge_346.geometry}
                material={nodes.wedge_346.material}
                position={[0.813, 6.625, 0.563]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.25, 0.25, 2]}
              />
              <mesh
                name="cornerPyramid3_76"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_76.geometry}
                material={nodes.cornerPyramid3_76.material}
                position={[-0.688, 6.125, 0.688]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.75, 1, 0.5]}
              />
              <mesh
                name="wedge_347"
                castShadow
                receiveShadow
                geometry={nodes.wedge_347.geometry}
                material={nodes.wedge_347.material}
                position={[-0.063, 6.125, 0.688]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[0.5, 1, 0.5]}
              />
              <mesh
                name="cornerPyramid3_77"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_77.geometry}
                material={nodes.cornerPyramid3_77.material}
                position={[0.563, 6.125, 0.688]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[0.5, 1, 0.75]}
              />
              <mesh
                name="cornerPyramid3_78"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_78.geometry}
                material={nodes.cornerPyramid3_78.material}
                position={[-0.688, 6.125, -0.563]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[1, 1, 0.75]}
              />
              <mesh
                name="box_215"
                castShadow
                receiveShadow
                geometry={nodes.box_215.geometry}
                material={nodes.box_215.material}
                position={[-0.063, 6.125, -0.188]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 2, 0.5]}
              />
              <mesh
                name="box_216"
                castShadow
                receiveShadow
                geometry={nodes.box_216.geometry}
                material={nodes.box_216.material}
                position={[-0.188, 6.125, -1.063]}
                scale={[1, 2, 0.25]}
              />
              <mesh
                name="wedge_348"
                castShadow
                receiveShadow
                geometry={nodes.wedge_348.geometry}
                material={nodes.wedge_348.material}
                position={[-0.063, 6.125, -0.563]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[1, 1, 0.5]}
              />
              <mesh
                name="cornerPyramid3_79"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_79.geometry}
                material={nodes.cornerPyramid3_79.material}
                position={[0.563, 6.125, -0.563]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.75, 1, 1]}
              />
              <mesh
                name="wedge_349"
                castShadow
                receiveShadow
                geometry={nodes.wedge_349.geometry}
                material={nodes.wedge_349.material}
                position={[-0.938, 6.625, 0.563]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.25, 0.25, 2]}
              />
              <mesh
                name="wedge_350"
                castShadow
                receiveShadow
                geometry={nodes.wedge_350.geometry}
                material={nodes.wedge_350.material}
                position={[0.438, 6.875, 0.813]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.5, 0.25, 0.5]}
              />
              <mesh
                name="wedge_351"
                castShadow
                receiveShadow
                geometry={nodes.wedge_351.geometry}
                material={nodes.wedge_351.material}
                position={[-0.563, 6.875, 0.813]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.5, 0.25, 0.5]}
              />
              <mesh
                name="box_217"
                castShadow
                receiveShadow
                geometry={nodes.box_217.geometry}
                material={nodes.box_217.material}
                position={[-0.063, 6.875, -0.063]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.5, 2, 0.5]}
              />
              <mesh
                name="box_218"
                castShadow
                receiveShadow
                geometry={nodes.box_218.geometry}
                material={nodes.box_218.material}
                position={[-0.063, 7.625, 0.063]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.75, 1, 0.5]}
              />
              <mesh
                name="cornerPyramid3_80"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_80.geometry}
                material={nodes.cornerPyramid3_80.material}
                position={[-0.688, 7.875, 0.688]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.5, 0.5, 0.75]}
              />
              <mesh
                name="cornerPyramid3_81"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_81.geometry}
                material={nodes.cornerPyramid3_81.material}
                position={[0.563, 7.875, 0.688]}
                scale={[0.75, 0.5, 0.5]}
              />
              <mesh
                name="cornerPyramid3_82"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_82.geometry}
                material={nodes.cornerPyramid3_82.material}
                position={[0.563, 7.875, -0.688]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.75, 0.5, 0.75]}
              />
              <mesh
                name="wedge_352"
                castShadow
                receiveShadow
                geometry={nodes.wedge_352.geometry}
                material={nodes.wedge_352.material}
                position={[0.563, 7.875, 0.063]}
                scale={[0.75, 0.5, 0.75]}
              />
              <mesh
                name="wedge_353"
                castShadow
                receiveShadow
                geometry={nodes.wedge_353.geometry}
                material={nodes.wedge_353.material}
                position={[-0.063, 7.875, 0.688]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.5}
              />
              <mesh
                name="wedge_354"
                castShadow
                receiveShadow
                geometry={nodes.wedge_354.geometry}
                material={nodes.wedge_354.material}
                position={[-0.063, 7.875, -0.688]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.75, 0.5, 0.5]}
              />
              <mesh
                name="cornerPyramid3_83"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_83.geometry}
                material={nodes.cornerPyramid3_83.material}
                position={[-0.688, 7.875, -0.688]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.75, 0.5, 0.75]}
              />
              <mesh
                name="wedge_355"
                castShadow
                receiveShadow
                geometry={nodes.wedge_355.geometry}
                material={nodes.wedge_355.material}
                position={[-0.688, 7.875, 0.063]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.75, 0.5, 0.75]}
              />
              <mesh
                name="box_219"
                castShadow
                receiveShadow
                geometry={nodes.box_219.geometry}
                material={nodes.box_219.material}
                position={[-0.063, 7.125, 0.063]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1.999, 0.75]}
              />
              <mesh
                name="wedge_356"
                castShadow
                receiveShadow
                geometry={nodes.wedge_356.geometry}
                material={nodes.wedge_356.material}
                position={[-0.688, 7.125, -0.688]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.75, 0.75, 0.999]}
              />
              <mesh
                name="wedge_357"
                castShadow
                receiveShadow
                geometry={nodes.wedge_357.geometry}
                material={nodes.wedge_357.material}
                position={[0.563, 7.125, -0.688]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.75, 0.75, 1]}
              />
              <mesh
                name="box_220"
                castShadow
                receiveShadow
                geometry={nodes.box_220.geometry}
                material={nodes.box_220.material}
                position={[-0.063, 7.375, -0.063]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.5, 2, 0.5]}
              />
              <mesh
                name="wedge_358"
                castShadow
                receiveShadow
                geometry={nodes.wedge_358.geometry}
                material={nodes.wedge_358.material}
                position={[-0.563, 7.375, 0.813]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.5, 0.25, 0.5]}
              />
              <mesh
                name="wedge_359"
                castShadow
                receiveShadow
                geometry={nodes.wedge_359.geometry}
                material={nodes.wedge_359.material}
                position={[2.063, 2.625, -0.063]}
                scale={[0.25, 4, 0.5]}
              />
              <mesh
                name="cornerPyramid3_84"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_84.geometry}
                material={nodes.cornerPyramid3_84.material}
                position={[1.438, 4.875, 0.313]}
                scale={[1, 0.5, 0.25]}
              />
              <mesh
                name="cornerPyramid3_85"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_85.geometry}
                material={nodes.cornerPyramid3_85.material}
                position={[-1.563, 4.875, 0.313]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 0.5, 1]}
              />
              <mesh
                name="wedge_360"
                castShadow
                receiveShadow
                geometry={nodes.wedge_360.geometry}
                material={nodes.wedge_360.material}
                position={[0.563, 4.5, 0.813]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.75}
              />
              <mesh
                name="cornerPyramid4_17"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_17.geometry}
                material={nodes.cornerPyramid4_17.material}
                position={[0.063, 4.5, 0.813]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 0.75, 0.25]}
              />
              <mesh
                name="wedge_361"
                castShadow
                receiveShadow
                geometry={nodes.wedge_361.geometry}
                material={nodes.wedge_361.material}
                position={[0.438, 7.375, 0.813]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.5, 0.25, 0.5]}
              />
              <mesh
                name="wedge_362"
                castShadow
                receiveShadow
                geometry={nodes.wedge_362.geometry}
                material={nodes.wedge_362.material}
                position={[1.188, 2.125, -0.063]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.5, 2, 1]}
              />
              <mesh
                name="wedge_363"
                castShadow
                receiveShadow
                geometry={nodes.wedge_363.geometry}
                material={nodes.wedge_363.material}
                position={[1.063, 2.125, -0.063]}
                scale={[0.25, 2, 1]}
              />
              <mesh
                name="wedge_364"
                castShadow
                receiveShadow
                geometry={nodes.wedge_364.geometry}
                material={nodes.wedge_364.material}
                position={[1.688, 2.625, -0.063]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.5, 4, 0.5]}
              />
              <mesh
                name="box_221"
                castShadow
                receiveShadow
                geometry={nodes.box_221.geometry}
                material={nodes.box_221.material}
                position={[0.566, 6.125, -0.563]}
                rotation={[0, -0.785, 0]}
                scale={[1, 2, 0.25]}
              />
              <mesh
                name="box_222"
                castShadow
                receiveShadow
                geometry={nodes.box_222.geometry}
                material={nodes.box_222.material}
                position={[-0.804, 6.125, -0.563]}
                rotation={[0, Math.PI / 4, 0]}
                scale={[1, 2, 0.25]}
              />
              <mesh
                name="wedge_365"
                castShadow
                receiveShadow
                geometry={nodes.wedge_365.geometry}
                material={nodes.wedge_365.material}
                position={[1.438, -1.375, -0.313]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.5, 3, 0.5]}
              />
              <mesh
                name="cornerPyramid3_86"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_86.geometry}
                material={nodes.cornerPyramid3_86.material}
                position={[1.438, -1.375, -0.813]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.5, 3, 0.5]}
              />
              <mesh
                name="cornerPyramid4_18"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_18.geometry}
                material={nodes.cornerPyramid4_18.material}
                position={[1.438, -1.375, 0.188]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[3, 0.5, 0.5]}
              />
              <mesh
                name="box_223"
                castShadow
                receiveShadow
                geometry={nodes.box_223.geometry}
                material={nodes.box_223.material}
                position={[2.063, 0.25, -0.063]}
                scale={[0.25, 0.75, 0.5]}
              />
              <mesh
                name="cornerPyramid3_87"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_87.geometry}
                material={nodes.cornerPyramid3_87.material}
                position={[1.438, 0.625, -0.813]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.5, 1, 0.5]}
              />
              <mesh
                name="box_224"
                castShadow
                receiveShadow
                geometry={nodes.box_224.geometry}
                material={nodes.box_224.material}
                position={[2.063, 0.5, -0.063]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 0.25, 0.5]}
              />
              <mesh
                name="cornerPyramid4_19"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_19.geometry}
                material={nodes.cornerPyramid4_19.material}
                position={[1.438, 0.625, 0.188]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.5, 0.5, 1]}
              />
              <mesh
                name="cornerPyramid3_88"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_88.geometry}
                material={nodes.cornerPyramid3_88.material}
                position={[1.188, 2.125, 0.813]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[0.75, 2, 0.5]}
              />
              <mesh
                name="wedge_366"
                castShadow
                receiveShadow
                geometry={nodes.wedge_366.geometry}
                material={nodes.wedge_366.material}
                position={[1.438, 0.625, -0.313]}
                scale={[0.5, 1, 0.5]}
              />
              <mesh
                name="wedge_367"
                castShadow
                receiveShadow
                geometry={nodes.wedge_367.geometry}
                material={nodes.wedge_367.material}
                position={[-0.688, 4.5, 0.813]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.75}
              />
              <mesh
                name="box_225"
                castShadow
                receiveShadow
                geometry={nodes.box_225.geometry}
                material={nodes.box_225.material}
                position={[-0.063, 3.625, 0.813]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.75, 1, 2]}
              />
              <mesh
                name="box_226"
                castShadow
                receiveShadow
                geometry={nodes.box_226.geometry}
                material={nodes.box_226.material}
                position={[-1.313, 3.625, -0.063]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1, 0.5]}
              />
              <mesh
                name="cornerPyramid3_89"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_89.geometry}
                material={nodes.cornerPyramid3_89.material}
                position={[-1.313, 2.125, 0.813]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.5, 2, 0.75]}
              />
              <mesh
                name="wedge_368"
                castShadow
                receiveShadow
                geometry={nodes.wedge_368.geometry}
                material={nodes.wedge_368.material}
                position={[-1.313, 3.625, 0.813]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.499, 0.75, 1]}
              />
              <mesh
                name="cornerPyramid3_90"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_90.geometry}
                material={nodes.cornerPyramid3_90.material}
                position={[-1.313, 4.5, 0.813]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.75, 0.75, 0.5]}
              />
              <mesh
                name="wedge_369"
                castShadow
                receiveShadow
                geometry={nodes.wedge_369.geometry}
                material={nodes.wedge_369.material}
                position={[-1.813, 2.625, -0.063]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.5, 4, 0.5]}
              />
              <mesh
                name="wedge_370"
                castShadow
                receiveShadow
                geometry={nodes.wedge_370.geometry}
                material={nodes.wedge_370.material}
                position={[-2.188, 2.625, -0.062]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 4, 0.5]}
              />
              <mesh
                name="cornerPyramid4_20"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_20.geometry}
                material={nodes.cornerPyramid4_20.material}
                position={[-0.188, 4.5, 0.813]}
                scale={[0.25, 0.75, 0.75]}
              />
              <mesh
                name="wedge_371"
                castShadow
                receiveShadow
                geometry={nodes.wedge_371.geometry}
                material={nodes.wedge_371.material}
                position={[-0.063, 2.125, 0.813]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[0.75, 2, 2]}
              />
              <mesh
                name="wedge_372"
                castShadow
                receiveShadow
                geometry={nodes.wedge_372.geometry}
                material={nodes.wedge_372.material}
                position={[-1.313, 2.125, -0.063]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.5, 2, 1]}
              />
              <mesh
                name="wedge_373"
                castShadow
                receiveShadow
                geometry={nodes.wedge_373.geometry}
                material={nodes.wedge_373.material}
                position={[-1.188, 2.125, -0.063]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 2, 1]}
              />
              <mesh
                name="box_227"
                castShadow
                receiveShadow
                geometry={nodes.box_227.geometry}
                material={nodes.box_227.material}
                position={[-0.063, 2.625, -0.063]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 3, 2]}
              />
              <mesh
                name="wedge_374"
                castShadow
                receiveShadow
                geometry={nodes.wedge_374.geometry}
                material={nodes.wedge_374.material}
                position={[0.188, -0.875, 0.313]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.25, 0.5, 4]}
              />
              <mesh
                name="box_228"
                castShadow
                receiveShadow
                geometry={nodes.box_228.geometry}
                material={nodes.box_228.material}
                position={[0.813, -0.875, -0.063]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 4, 0.75]}
              />
              <mesh
                name="wedge_375"
                castShadow
                receiveShadow
                geometry={nodes.wedge_375.geometry}
                material={nodes.wedge_375.material}
                position={[0.188, -1.375, -0.813]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[0.5, 3, 2]}
              />
              <mesh
                name="wedge_376"
                castShadow
                receiveShadow
                geometry={nodes.wedge_376.geometry}
                material={nodes.wedge_376.material}
                position={[-0.313, -1.375, -0.813]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[0.5, 3, 2]}
              />
              <mesh
                name="cornerPyramid3_91"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_91.geometry}
                material={nodes.cornerPyramid3_91.material}
                position={[-1.563, -1.375, -0.813]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[0.5, 3, 0.5]}
              />
              <mesh
                name="wedge_377"
                castShadow
                receiveShadow
                geometry={nodes.wedge_377.geometry}
                material={nodes.wedge_377.material}
                position={[-1.563, 0.625, -0.313]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 1, 0.5]}
              />
              <mesh
                name="wedge_378"
                castShadow
                receiveShadow
                geometry={nodes.wedge_378.geometry}
                material={nodes.wedge_378.material}
                position={[-1.563, -1.375, -0.313]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.5, 3, 0.5]}
              />
              <mesh
                name="wedge_379"
                castShadow
                receiveShadow
                geometry={nodes.wedge_379.geometry}
                material={nodes.wedge_379.material}
                position={[-0.313, -0.875, 0.313]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.5, 0.25, 4]}
              />
              <mesh
                name="box_229"
                castShadow
                receiveShadow
                geometry={nodes.box_229.geometry}
                material={nodes.box_229.material}
                position={[-0.938, -0.875, -0.063]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 4, 0.75]}
              />
              <mesh
                name="cornerPyramid4_21"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_21.geometry}
                material={nodes.cornerPyramid4_21.material}
                position={[-1.563, 0.625, 0.188]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 0.5, 0.5]}
              />
              <mesh
                name="cornerPyramid4_22"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_22.geometry}
                material={nodes.cornerPyramid4_22.material}
                position={[-1.563, -1.375, 0.188]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.5, 0.499, 3]}
              />
              <mesh
                name="box_230"
                castShadow
                receiveShadow
                geometry={nodes.box_230.geometry}
                material={nodes.box_230.material}
                position={[-0.063, 0.625, -0.313]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.5, 1, 1]}
              />
              <mesh
                name="wedge_380"
                castShadow
                receiveShadow
                geometry={nodes.wedge_380.geometry}
                material={nodes.wedge_380.material}
                position={[0.188, 0.625, -0.813]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.5, 1, 2]}
              />
              <mesh
                name="wedge_381"
                castShadow
                receiveShadow
                geometry={nodes.wedge_381.geometry}
                material={nodes.wedge_381.material}
                position={[-0.313, 0.625, -0.813]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.5, 1, 2]}
              />
              <mesh
                name="cornerPyramid3_92"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_92.geometry}
                material={nodes.cornerPyramid3_92.material}
                position={[-1.563, 0.625, -0.813]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 1, 0.5]}
              />
              <mesh
                name="wedge_382"
                castShadow
                receiveShadow
                geometry={nodes.wedge_382.geometry}
                material={nodes.wedge_382.material}
                position={[-0.063, 0.625, 0.313]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[0.25, 1, 2]}
              />
              <mesh
                name="box_231"
                castShadow
                receiveShadow
                geometry={nodes.box_231.geometry}
                material={nodes.box_231.material}
                position={[-2.188, 0.25, -0.063]}
                scale={[0.25, 0.75, 0.5]}
              />
            </group>
            <group
              name="28f4d234-7952-474b-b898-c74b20993e77"
              position={[103.795, -12.5, -111.795]}>
              <mesh
                name="box_232"
                castShadow
                receiveShadow
                geometry={nodes.box_232.geometry}
                material={nodes.box_232.material}
                position={[-3, 2, 2.625]}
                scale={[2, 3, 3]}
              />
              <mesh
                name="wedge_383"
                castShadow
                receiveShadow
                geometry={nodes.wedge_383.geometry}
                material={nodes.wedge_383.material}
                position={[0, -2, -5.875]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[1, 4, 6]}
              />
              <mesh
                name="wedge_384"
                castShadow
                receiveShadow
                geometry={nodes.wedge_384.geometry}
                material={nodes.wedge_384.material}
                position={[0, 6, -2.875]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[6, 1, 4]}
              />
              <mesh
                name="wedge_385"
                castShadow
                receiveShadow
                geometry={nodes.wedge_385.geometry}
                material={nodes.wedge_385.material}
                position={[0, 6, -0.375]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[7, 1, 4]}
              />
              <mesh
                name="box_233"
                castShadow
                receiveShadow
                geometry={nodes.box_233.geometry}
                material={nodes.box_233.material}
                position={[-3.5, 4.5, -7.875]}
                scale={[1, 2, 4]}
              />
              <mesh
                name="box_234"
                castShadow
                receiveShadow
                geometry={nodes.box_234.geometry}
                material={nodes.box_234.material}
                position={[-3, 2, -10.875]}
                scale={[2, 3, 2]}
              />
              <mesh
                name="wedge_386"
                castShadow
                receiveShadow
                geometry={nodes.wedge_386.geometry}
                material={nodes.wedge_386.material}
                position={[3, -2.5, -10.875]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[6, 2, 2]}
              />
              <mesh
                name="wedge_387"
                castShadow
                receiveShadow
                geometry={nodes.wedge_387.geometry}
                material={nodes.wedge_387.material}
                position={[-3, -2.5, -7.375]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[1, 6, 2]}
              />
              <mesh
                name="box_235"
                castShadow
                receiveShadow
                geometry={nodes.box_235.geometry}
                material={nodes.box_235.material}
                position={[0, 4.5, -7.875]}
                scale={[6, 2, 4]}
              />
              <mesh
                name="box_236"
                castShadow
                receiveShadow
                geometry={nodes.box_236.geometry}
                material={nodes.box_236.material}
                position={[0, 2, 4.625]}
                scale={[4, 1, 5]}
              />
              <mesh
                name="box_237"
                castShadow
                receiveShadow
                geometry={nodes.box_237.geometry}
                material={nodes.box_237.material}
                position={[0, 6, -7.875]}
                scale={[4, 1, 4]}
              />
              <mesh
                name="wedge_388"
                castShadow
                receiveShadow
                geometry={nodes.wedge_388.geometry}
                material={nodes.wedge_388.material}
                position={[0, 5, -10.875]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2, 3, 4]}
              />
              <mesh
                name="box_238"
                castShadow
                receiveShadow
                geometry={nodes.box_238.geometry}
                material={nodes.box_238.material}
                position={[3, 0, 2.625]}
                scale={[2, 1, 3]}
              />
              <mesh
                name="wedge_389"
                castShadow
                receiveShadow
                geometry={nodes.wedge_389.geometry}
                material={nodes.wedge_389.material}
                position={[3, -2.5, 0.625]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[6, 1, 2]}
              />
              <mesh
                name="wedge_390"
                castShadow
                receiveShadow
                geometry={nodes.wedge_390.geometry}
                material={nodes.wedge_390.material}
                position={[1.5, -2, -1.375]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 5, 3]}
              />
              <mesh
                name="box_239"
                castShadow
                receiveShadow
                geometry={nodes.box_239.geometry}
                material={nodes.box_239.material}
                position={[0, -1, 0.625]}
                scale={[8, 1, 1]}
              />
              <mesh
                name="box_240"
                castShadow
                receiveShadow
                geometry={nodes.box_240.geometry}
                material={nodes.box_240.material}
                position={[3, -3, 2.125]}
                scale={[2, 5, 2]}
              />
              <mesh
                name="wedge_391"
                castShadow
                receiveShadow
                geometry={nodes.wedge_391.geometry}
                material={nodes.wedge_391.material}
                position={[3, -3, 3.625]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[1, 5, 2]}
              />
              <mesh
                name="box_241"
                castShadow
                receiveShadow
                geometry={nodes.box_241.geometry}
                material={nodes.box_241.material}
                position={[3, 2, 2.625]}
                scale={[2, 3, 3]}
              />
              <mesh
                name="wedge_392"
                castShadow
                receiveShadow
                geometry={nodes.wedge_392.geometry}
                material={nodes.wedge_392.material}
                position={[-3, -2.5, 0.625]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[6, 1, 2]}
              />
              <mesh
                name="wedge_393"
                castShadow
                receiveShadow
                geometry={nodes.wedge_393.geometry}
                material={nodes.wedge_393.material}
                position={[-2.5, -1, -1.375]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 3, 3]}
              />
              <mesh
                name="box_242"
                castShadow
                receiveShadow
                geometry={nodes.box_242.geometry}
                material={nodes.box_242.material}
                position={[-3.875, -6, 3.625]}
                scale={[0.75, 1, 1]}
              />
              <mesh
                name="box_243"
                castShadow
                receiveShadow
                geometry={nodes.box_243.geometry}
                material={nodes.box_243.material}
                position={[-3, -3, 2.125]}
                scale={[2, 5, 2]}
              />
              <mesh
                name="wedge_394"
                castShadow
                receiveShadow
                geometry={nodes.wedge_394.geometry}
                material={nodes.wedge_394.material}
                position={[-3, -3, 3.625]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[1, 5, 2]}
              />
              <mesh
                name="box_244"
                castShadow
                receiveShadow
                geometry={nodes.box_244.geometry}
                material={nodes.box_244.material}
                position={[-1, 1.5, 2.625]}
                scale={[2, 4, 3]}
              />
              <mesh
                name="wedge_395"
                castShadow
                receiveShadow
                geometry={nodes.wedge_395.geometry}
                material={nodes.wedge_395.material}
                position={[-1.5, -2, -1.375]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 5, 3]}
              />
              <mesh
                name="wedge_396"
                castShadow
                receiveShadow
                geometry={nodes.wedge_396.geometry}
                material={nodes.wedge_396.material}
                position={[4.5, 4.5, -7.875]}
                scale={[1, 2, 4]}
              />
              <mesh
                name="wedge_397"
                castShadow
                receiveShadow
                geometry={nodes.wedge_397.geometry}
                material={nodes.wedge_397.material}
                position={[4.5, 2, -10.875]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[2, 1, 3]}
              />
              <mesh
                name="wedge_398"
                castShadow
                receiveShadow
                geometry={nodes.wedge_398.geometry}
                material={nodes.wedge_398.material}
                position={[4.5, -2.5, -8.875]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 6, 2]}
              />
              <mesh
                name="wedge_399"
                castShadow
                receiveShadow
                geometry={nodes.wedge_399.geometry}
                material={nodes.wedge_399.material}
                position={[4.5, 2, -3.875]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 4, 3]}
              />
              <mesh
                name="cornerPyramid3_93"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_93.geometry}
                material={nodes.cornerPyramid3_93.material}
                position={[4.5, 4.5, -10.875]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2, 2, 1]}
              />
              <mesh
                name="box_245"
                castShadow
                receiveShadow
                geometry={nodes.box_245.geometry}
                material={nodes.box_245.material}
                position={[0, 2, -7.875]}
                scale={[10, 3, 4]}
              />
              <mesh
                name="wedge_400"
                castShadow
                receiveShadow
                geometry={nodes.wedge_400.geometry}
                material={nodes.wedge_400.material}
                position={[3, -2.5, -7.375]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[1, 6, 2]}
              />
              <mesh
                name="cornerPyramid3_94"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_94.geometry}
                material={nodes.cornerPyramid3_94.material}
                position={[-1.5, -2.5, -10.875]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 6, 2]}
              />
              <mesh
                name="cornerPyramid3_95"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_95.geometry}
                material={nodes.cornerPyramid3_95.material}
                position={[-1.5, -2.5, -7.375]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[1, 6, 1]}
              />
              <mesh
                name="cornerPyramid3_96"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_96.geometry}
                material={nodes.cornerPyramid3_96.material}
                position={[-4.5, -2.5, -7.375]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 6, 1]}
              />
              <mesh
                name="cornerPyramid3_97"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_97.geometry}
                material={nodes.cornerPyramid3_97.material}
                position={[4.5, -2.5, -10.875]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 6, 2]}
              />
              <mesh
                name="cornerPyramid3_98"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_98.geometry}
                material={nodes.cornerPyramid3_98.material}
                position={[1.5, -2.5, -10.875]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[2, 6, 1]}
              />
              <mesh
                name="cornerPyramid3_99"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_99.geometry}
                material={nodes.cornerPyramid3_99.material}
                position={[1.5, -2.5, -7.375]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 6, 1]}
              />
              <mesh
                name="cornerPyramid3_100"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_100.geometry}
                material={nodes.cornerPyramid3_100.material}
                position={[4.5, -2.5, -7.375]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[1, 6, 1]}
              />
              <mesh
                name="box_246"
                castShadow
                receiveShadow
                geometry={nodes.box_246.geometry}
                material={nodes.box_246.material}
                position={[0, -0.5, -6.875]}
                scale={[8, 2, 2]}
              />
              <mesh
                name="wedge_401"
                castShadow
                receiveShadow
                geometry={nodes.wedge_401.geometry}
                material={nodes.wedge_401.material}
                position={[4.5, -0.5, -6.875]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="box_247"
                castShadow
                receiveShadow
                geometry={nodes.box_247.geometry}
                material={nodes.box_247.material}
                position={[3.5, 4.5, -7.875]}
                scale={[1, 2, 4]}
              />
              <mesh
                name="wedge_402"
                castShadow
                receiveShadow
                geometry={nodes.wedge_402.geometry}
                material={nodes.wedge_402.material}
                position={[-1.5, -2.5, -8.875]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 6, 2]}
              />
              <mesh
                name="wedge_403"
                castShadow
                receiveShadow
                geometry={nodes.wedge_403.geometry}
                material={nodes.wedge_403.material}
                position={[1.5, -2.5, -8.875]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 6, 2]}
              />
              <mesh
                name="cornerPyramid3_101"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_101.geometry}
                material={nodes.cornerPyramid3_101.material}
                position={[-4.5, -0.5, -3.875]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 2, 4]}
              />
              <mesh
                name="wedge_404"
                castShadow
                receiveShadow
                geometry={nodes.wedge_404.geometry}
                material={nodes.wedge_404.material}
                position={[-4.5, 2, -3.875]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[1, 4, 3]}
              />
              <mesh
                name="wedge_405"
                castShadow
                receiveShadow
                geometry={nodes.wedge_405.geometry}
                material={nodes.wedge_405.material}
                position={[-4.5, 4.5, -7.875]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 2, 4]}
              />
              <mesh
                name="cornerPyramid3_102"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_102.geometry}
                material={nodes.cornerPyramid3_102.material}
                position={[-4.5, 4.5, -10.875]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 2, 2]}
              />
              <mesh
                name="wedge_406"
                castShadow
                receiveShadow
                geometry={nodes.wedge_406.geometry}
                material={nodes.wedge_406.material}
                position={[-4.5, 2, -10.875]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[2, 1, 3]}
              />
              <mesh
                name="wedge_407"
                castShadow
                receiveShadow
                geometry={nodes.wedge_407.geometry}
                material={nodes.wedge_407.material}
                position={[-4.5, -0.5, -6.875]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="wedge_408"
                castShadow
                receiveShadow
                geometry={nodes.wedge_408.geometry}
                material={nodes.wedge_408.material}
                position={[-4.5, -2.5, -8.875]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 6, 2]}
              />
              <mesh
                name="cornerPyramid3_103"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_103.geometry}
                material={nodes.cornerPyramid3_103.material}
                position={[-4.5, -3, 0.625]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[1, 5, 1]}
              />
              <mesh
                name="wedge_409"
                castShadow
                receiveShadow
                geometry={nodes.wedge_409.geometry}
                material={nodes.wedge_409.material}
                position={[-4.5, -3, 2.125]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 5, 2]}
              />
              <mesh
                name="cornerPyramid3_104"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_104.geometry}
                material={nodes.cornerPyramid3_104.material}
                position={[-4.5, -3, 3.625]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 5, 1]}
              />
              <mesh
                name="cornerPyramid3_105"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_105.geometry}
                material={nodes.cornerPyramid3_105.material}
                position={[-4.5, 4.5, -1.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 2, 5]}
              />
              <mesh
                name="wedge_410"
                castShadow
                receiveShadow
                geometry={nodes.wedge_410.geometry}
                material={nodes.wedge_410.material}
                position={[-4.5, 1.5, -1.375]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[1, 5, 4]}
              />
              <mesh
                name="cornerPyramid3_106"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_106.geometry}
                material={nodes.cornerPyramid3_106.material}
                position={[-4.5, -1, -1.375]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[5, 1, 1]}
              />
              <mesh
                name="box_248"
                castShadow
                receiveShadow
                geometry={nodes.box_248.geometry}
                material={nodes.box_248.material}
                position={[-4.5, 1.5, 2.125]}
                scale={[1, 4, 2]}
              />
              <mesh
                name="wedge_411"
                castShadow
                receiveShadow
                geometry={nodes.wedge_411.geometry}
                material={nodes.wedge_411.material}
                position={[-4.5, 1.5, 3.625]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[1, 1, 4]}
              />
              <mesh
                name="wedge_412"
                castShadow
                receiveShadow
                geometry={nodes.wedge_412.geometry}
                material={nodes.wedge_412.material}
                position={[-4.5, 4.5, 2.125]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="cornerPyramid3_107"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_107.geometry}
                material={nodes.cornerPyramid3_107.material}
                position={[4.5, 4.5, -1.375]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[5, 2, 1]}
              />
              <mesh
                name="wedge_413"
                castShadow
                receiveShadow
                geometry={nodes.wedge_413.geometry}
                material={nodes.wedge_413.material}
                position={[4.5, 1.5, -1.375]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 5, 4]}
              />
              <mesh
                name="cornerPyramid3_108"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_108.geometry}
                material={nodes.cornerPyramid3_108.material}
                position={[4.5, -1, -1.375]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 1, 5]}
              />
              <mesh
                name="box_249"
                castShadow
                receiveShadow
                geometry={nodes.box_249.geometry}
                material={nodes.box_249.material}
                position={[4.5, 1.5, 2.125]}
                scale={[1, 4, 2]}
              />
              <mesh
                name="wedge_414"
                castShadow
                receiveShadow
                geometry={nodes.wedge_414.geometry}
                material={nodes.wedge_414.material}
                position={[4.5, 1.5, 3.625]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1, 1, 4]}
              />
              <mesh
                name="wedge_415"
                castShadow
                receiveShadow
                geometry={nodes.wedge_415.geometry}
                material={nodes.wedge_415.material}
                position={[4.5, 4.5, 2.125]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="cornerPyramid3_109"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_109.geometry}
                material={nodes.cornerPyramid3_109.material}
                position={[-4.5, 4.5, -3.875]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[4, 2, 1]}
              />
              <mesh
                name="cornerPyramid3_110"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_110.geometry}
                material={nodes.cornerPyramid3_110.material}
                position={[4.5, 4.5, -3.875]}
                scale={[1, 2, 4]}
              />
              <mesh
                name="cornerPyramid3_111"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_111.geometry}
                material={nodes.cornerPyramid3_111.material}
                position={[-4.5, 4.5, 3.625]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 2, 1]}
              />
              <mesh
                name="cornerPyramid3_112"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_112.geometry}
                material={nodes.cornerPyramid3_112.material}
                position={[4.5, 4.5, 3.625]}
                scale={[1, 2, 1]}
              />
              <mesh
                name="cornerPyramid3_113"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_113.geometry}
                material={nodes.cornerPyramid3_113.material}
                position={[-3.5, -2, -5.875]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 1, 4]}
              />
              <mesh
                name="cornerPyramid3_114"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_114.geometry}
                material={nodes.cornerPyramid3_114.material}
                position={[3.5, -2, -5.875]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[4, 1, 1]}
              />
              <mesh
                name="box_250"
                castShadow
                receiveShadow
                geometry={nodes.box_250.geometry}
                material={nodes.box_250.material}
                position={[0, 2, -2.375]}
                scale={[8, 7, 7]}
              />
              <mesh
                name="wedge_416"
                castShadow
                receiveShadow
                geometry={nodes.wedge_416.geometry}
                material={nodes.wedge_416.material}
                position={[-3, -2.5, -10.875]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[6, 2, 2]}
              />
              <mesh
                name="cornerPyramid3_115"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_115.geometry}
                material={nodes.cornerPyramid3_115.material}
                position={[-4.5, -2.5, -10.875]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[2, 6, 1]}
              />
              <mesh
                name="cornerPyramid3_116"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_116.geometry}
                material={nodes.cornerPyramid3_116.material}
                position={[-3.5, -2, -1.375]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[5, 1, 1]}
              />
              <mesh
                name="cornerPyramid3_117"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_117.geometry}
                material={nodes.cornerPyramid3_117.material}
                position={[3.5, -2, -1.375]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 1, 5]}
              />
              <mesh
                name="cornerPyramid3_118"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_118.geometry}
                material={nodes.cornerPyramid3_118.material}
                position={[4.5, -3, 3.625]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[1, 5, 1]}
              />
              <mesh
                name="wedge_417"
                castShadow
                receiveShadow
                geometry={nodes.wedge_417.geometry}
                material={nodes.wedge_417.material}
                position={[4.5, -3, 2.125]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 5, 2]}
              />
              <mesh
                name="cornerPyramid3_119"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_119.geometry}
                material={nodes.cornerPyramid3_119.material}
                position={[4.5, -3, 0.625]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 5, 1]}
              />
              <mesh
                name="cornerPyramid3_120"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_120.geometry}
                material={nodes.cornerPyramid3_120.material}
                position={[1.5, -3, 3.625]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 5, 1]}
              />
              <mesh
                name="wedge_418"
                castShadow
                receiveShadow
                geometry={nodes.wedge_418.geometry}
                material={nodes.wedge_418.material}
                position={[1.5, -3, 2.125]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 5, 2]}
              />
              <mesh
                name="cornerPyramid3_121"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_121.geometry}
                material={nodes.cornerPyramid3_121.material}
                position={[1.5, -3, 0.625]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[1, 5, 1]}
              />
              <mesh
                name="cornerPyramid3_122"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_122.geometry}
                material={nodes.cornerPyramid3_122.material}
                position={[-1.5, -3, 3.625]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[1, 5, 1]}
              />
              <mesh
                name="wedge_419"
                castShadow
                receiveShadow
                geometry={nodes.wedge_419.geometry}
                material={nodes.wedge_419.material}
                position={[-1.5, -3, 2.125]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 5, 2]}
              />
              <mesh
                name="cornerPyramid3_123"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_123.geometry}
                material={nodes.cornerPyramid3_123.material}
                position={[-1.5, -3, 0.625]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 5, 1]}
              />
              <mesh
                name="box_251"
                castShadow
                receiveShadow
                geometry={nodes.box_251.geometry}
                material={nodes.box_251.material}
                position={[1, 1.5, 2.625]}
                scale={[2, 4, 3]}
              />
              <mesh
                name="box_252"
                castShadow
                receiveShadow
                geometry={nodes.box_252.geometry}
                material={nodes.box_252.material}
                position={[-3, 0, 2.625]}
                scale={[2, 1, 3]}
              />
              <mesh
                name="cornerPyramid4_23"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_23.geometry}
                material={nodes.cornerPyramid4_23.material}
                position={[3, 6, -0.375]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[7, 1, 2]}
              />
              <mesh
                name="cornerPyramid4_24"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_24.geometry}
                material={nodes.cornerPyramid4_24.material}
                position={[-3, 6, -0.375]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[2, 1, 7]}
              />
              <mesh
                name="cornerPyramid4_25"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_25.geometry}
                material={nodes.cornerPyramid4_25.material}
                position={[3, 6, -2.875]}
                scale={[2, 1, 6]}
              />
              <mesh
                name="cornerPyramid4_26"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid4_26.geometry}
                material={nodes.cornerPyramid4_26.material}
                position={[-3, 6, -2.875]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[6, 1, 2]}
              />
              <mesh
                name="wedge_420"
                castShadow
                receiveShadow
                geometry={nodes.wedge_420.geometry}
                material={nodes.wedge_420.material}
                position={[3, 6, -7.875]}
                scale={[2, 1, 4]}
              />
              <mesh
                name="wedge_421"
                castShadow
                receiveShadow
                geometry={nodes.wedge_421.geometry}
                material={nodes.wedge_421.material}
                position={[-3, 6, -7.875]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[2, 1, 4]}
              />
              <mesh
                name="wedge_422"
                castShadow
                receiveShadow
                geometry={nodes.wedge_422.geometry}
                material={nodes.wedge_422.material}
                position={[0, 4.5, -10.875]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2, 2, 8]}
              />
              <mesh
                name="box_253"
                castShadow
                receiveShadow
                geometry={nodes.box_253.geometry}
                material={nodes.box_253.material}
                position={[0, 2.5, -10.875]}
                scale={[4, 2, 2]}
              />
              <mesh
                name="wedge_423"
                castShadow
                receiveShadow
                geometry={nodes.wedge_423.geometry}
                material={nodes.wedge_423.material}
                position={[0, 4.5, 3.625]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 2, 8]}
              />
              <mesh
                name="wedge_424"
                castShadow
                receiveShadow
                geometry={nodes.wedge_424.geometry}
                material={nodes.wedge_424.material}
                position={[0, 6, 5.125]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[4, 1, 4]}
              />
              <mesh
                name="wedge_425"
                castShadow
                receiveShadow
                geometry={nodes.wedge_425.geometry}
                material={nodes.wedge_425.material}
                position={[3, 4, 5.125]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2, 4, 3]}
              />
              <mesh
                name="wedge_426"
                castShadow
                receiveShadow
                geometry={nodes.wedge_426.geometry}
                material={nodes.wedge_426.material}
                position={[-3, 4, 5.125]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[2, 4, 3]}
              />
              <mesh
                name="cornerPyramid3_124"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_124.geometry}
                material={nodes.cornerPyramid3_124.material}
                position={[3, 6, 5.125]}
                scale={[2, 1, 4]}
              />
              <mesh
                name="cornerPyramid3_125"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_125.geometry}
                material={nodes.cornerPyramid3_125.material}
                position={[-3, 6, 5.125]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[4, 1, 2]}
              />
              <mesh
                name="cornerPyramid3_126"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_126.geometry}
                material={nodes.cornerPyramid3_126.material}
                position={[-3, 1, 5.125]}
                rotation={[0, 0, -Math.PI]}
                scale={[2, 3, 4]}
              />
              <mesh
                name="cornerPyramid3_127"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_127.geometry}
                material={nodes.cornerPyramid3_127.material}
                position={[3, 1, 5.125]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[4, 3, 2]}
              />
              <mesh
                name="wedge_427"
                castShadow
                receiveShadow
                geometry={nodes.wedge_427.geometry}
                material={nodes.wedge_427.material}
                position={[0, 0.5, 5.625]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[3, 2, 4]}
              />
              <mesh
                name="box_254"
                castShadow
                receiveShadow
                geometry={nodes.box_254.geometry}
                material={nodes.box_254.material}
                position={[3, 2, -10.875]}
                scale={[2, 3, 2]}
              />
              <mesh
                name="wedge_428"
                castShadow
                receiveShadow
                geometry={nodes.wedge_428.geometry}
                material={nodes.wedge_428.material}
                position={[1.5, 1.5, -10.875]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[1, 2, 2]}
              />
              <mesh
                name="wedge_429"
                castShadow
                receiveShadow
                geometry={nodes.wedge_429.geometry}
                material={nodes.wedge_429.material}
                position={[-1.5, 1.5, -10.875]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 2, 2]}
              />
              <mesh
                name="wedge_430"
                castShadow
                receiveShadow
                geometry={nodes.wedge_430.geometry}
                material={nodes.wedge_430.material}
                position={[0, 0, -10.875]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[2, 3, 4]}
              />
              <mesh
                name="wedge_431"
                castShadow
                receiveShadow
                geometry={nodes.wedge_431.geometry}
                material={nodes.wedge_431.material}
                position={[0, -2, -8.875]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={[2, 1, 4]}
              />
              <mesh
                name="box_255"
                castShadow
                receiveShadow
                geometry={nodes.box_255.geometry}
                material={nodes.box_255.material}
                position={[0, 3.5, 9.125]}
                scale={[3, 2, 2]}
              />
              <mesh
                name="box_256"
                castShadow
                receiveShadow
                geometry={nodes.box_256.geometry}
                material={nodes.box_256.material}
                position={[0, 2.625, 11.125]}
                scale={[0.5, 0.75, 2]}
              />
              <mesh
                name="wedge_432"
                castShadow
                receiveShadow
                geometry={nodes.wedge_432.geometry}
                material={nodes.wedge_432.material}
                position={[-4.125, -6, 2.125]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.25, 2, 1]}
              />
              <mesh
                name="wedge_433"
                castShadow
                receiveShadow
                geometry={nodes.wedge_433.geometry}
                material={nodes.wedge_433.material}
                position={[-3.875, -6, 4.5]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.75, 0.75, 1]}
              />
              <mesh
                name="wedge_434"
                castShadow
                receiveShadow
                geometry={nodes.wedge_434.geometry}
                material={nodes.wedge_434.material}
                position={[-2.125, -6, 4.5]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.75, 0.75, 1]}
              />
              <mesh
                name="wedge_435"
                castShadow
                receiveShadow
                geometry={nodes.wedge_435.geometry}
                material={nodes.wedge_435.material}
                position={[-1.875, -6, 2.125]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.25, 2, 1]}
              />
              <mesh
                name="box_257"
                castShadow
                receiveShadow
                geometry={nodes.box_257.geometry}
                material={nodes.box_257.material}
                position={[-3, -6, 2.125]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="box_258"
                castShadow
                receiveShadow
                geometry={nodes.box_258.geometry}
                material={nodes.box_258.material}
                position={[-2.125, -6, 3.625]}
                scale={[0.75, 1, 1]}
              />
              <mesh
                name="box_259"
                castShadow
                receiveShadow
                geometry={nodes.box_259.geometry}
                material={nodes.box_259.material}
                position={[-3, -6, 3.625]}
              />
              <mesh
                name="box_260"
                castShadow
                receiveShadow
                geometry={nodes.box_260.geometry}
                material={nodes.box_260.material}
                position={[-3, -6, 4.5]}
                scale={[1, 1, 0.75]}
              />
              <mesh
                name="box_261"
                castShadow
                receiveShadow
                geometry={nodes.box_261.geometry}
                material={nodes.box_261.material}
                position={[0, 3.5, 7.625]}
                scale={[4, 2, 1]}
              />
              <mesh
                name="cornerPyramid3_128"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_128.geometry}
                material={nodes.cornerPyramid3_128.material}
                position={[4.5, -0.5, -3.875]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[4, 2, 1]}
              />
              <mesh
                name="wedge_436"
                castShadow
                receiveShadow
                geometry={nodes.wedge_436.geometry}
                material={nodes.wedge_436.material}
                position={[-1.75, 5, 7.625]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 0.5, 1]}
              />
              <mesh
                name="wedge_437"
                castShadow
                receiveShadow
                geometry={nodes.wedge_437.geometry}
                material={nodes.wedge_437.material}
                position={[1.75, 5, 7.625]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={[1, 0.5, 1]}
              />
              <mesh
                name="wedge_438"
                castShadow
                receiveShadow
                geometry={nodes.wedge_438.geometry}
                material={nodes.wedge_438.material}
                position={[1.5, 2, 7.625]}
                rotation={[0, 0, -Math.PI / 2]}
              />
              <mesh
                name="wedge_439"
                castShadow
                receiveShadow
                geometry={nodes.wedge_439.geometry}
                material={nodes.wedge_439.material}
                position={[-1.5, 2, 7.625]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
              />
              <mesh
                name="box_262"
                castShadow
                receiveShadow
                geometry={nodes.box_262.geometry}
                material={nodes.box_262.material}
                position={[0, 5, 7.625]}
                scale={[3, 1, 1]}
              />
              <mesh
                name="box_263"
                castShadow
                receiveShadow
                geometry={nodes.box_263.geometry}
                material={nodes.box_263.material}
                position={[0, 2, 7.625]}
                scale={[2, 1, 1]}
              />
              <mesh
                name="wedge_440"
                castShadow
                receiveShadow
                geometry={nodes.wedge_440.geometry}
                material={nodes.wedge_440.material}
                position={[-1.75, 3.5, 9.125]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[2, 0.5, 2]}
              />
              <mesh
                name="wedge_441"
                castShadow
                receiveShadow
                geometry={nodes.wedge_441.geometry}
                material={nodes.wedge_441.material}
                position={[1.75, 3.5, 9.125]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[2, 0.5, 2]}
              />
              <mesh
                name="box_264"
                castShadow
                receiveShadow
                geometry={nodes.box_264.geometry}
                material={nodes.box_264.material}
                position={[0, 2, 9.125]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="wedge_442"
                castShadow
                receiveShadow
                geometry={nodes.wedge_442.geometry}
                material={nodes.wedge_442.material}
                position={[0, 5, 9.125]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[2, 1, 3]}
              />
              <mesh
                name="cornerPyramid3_129"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_129.geometry}
                material={nodes.cornerPyramid3_129.material}
                position={[1.75, 5, 9.125]}
                scale={[0.5, 1, 2]}
              />
              <mesh
                name="cornerPyramid3_130"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_130.geometry}
                material={nodes.cornerPyramid3_130.material}
                position={[-1.75, 5, 9.125]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[2, 1, 0.5]}
              />
              <mesh
                name="cornerPyramid3_131"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_131.geometry}
                material={nodes.cornerPyramid3_131.material}
                position={[-1.5, 2, 9.125]}
                rotation={[0, 0, -Math.PI]}
                scale={[1, 1, 2]}
              />
              <mesh
                name="cornerPyramid3_132"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_132.geometry}
                material={nodes.cornerPyramid3_132.material}
                position={[1.5, 2, 9.125]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[2, 1, 1]}
              />
              <mesh
                name="wedge_443"
                castShadow
                receiveShadow
                geometry={nodes.wedge_443.geometry}
                material={nodes.wedge_443.material}
                position={[1.25, 2, 8.625]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.5, 3]}
              />
              <mesh
                name="wedge_444"
                castShadow
                receiveShadow
                geometry={nodes.wedge_444.geometry}
                material={nodes.wedge_444.material}
                position={[-1.25, 2, 8.625]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
                scale={[1, 0.5, 3]}
              />
              <mesh
                name="cornerPyramid3_133"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_133.geometry}
                material={nodes.cornerPyramid3_133.material}
                position={[-1, -1.5, 3.625]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[1, 2, 2]}
              />
              <mesh
                name="cornerPyramid3_134"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_134.geometry}
                material={nodes.cornerPyramid3_134.material}
                position={[1, -1.5, 3.625]}
                rotation={[0, 0, -Math.PI]}
                scale={[2, 2, 1]}
              />
              <mesh
                name="cornerPyramid3_135"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_135.geometry}
                material={nodes.cornerPyramid3_135.material}
                position={[0.5, 3.375, 11.125]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.75, 2, 0.5]}
              />
              <mesh
                name="cornerPyramid3_136"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_136.geometry}
                material={nodes.cornerPyramid3_136.material}
                position={[-0.5, 3.375, 11.125]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.5, 2, 0.75]}
              />
              <mesh
                name="cornerPyramid3_137"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_137.geometry}
                material={nodes.cornerPyramid3_137.material}
                position={[-0.5, 2, 11.125]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.5, 2, 0.5]}
              />
              <mesh
                name="cornerPyramid3_138"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_138.geometry}
                material={nodes.cornerPyramid3_138.material}
                position={[0.5, 2, 11.125]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.5, 2, 0.5]}
              />
              <mesh
                name="wedge_445"
                castShadow
                receiveShadow
                geometry={nodes.wedge_445.geometry}
                material={nodes.wedge_445.material}
                position={[0, 3.375, 11.125]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[2, 0.75, 0.5]}
              />
              <mesh
                name="wedge_446"
                castShadow
                receiveShadow
                geometry={nodes.wedge_446.geometry}
                material={nodes.wedge_446.material}
                position={[0, 2, 11.125]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[2, 0.5, 0.5]}
              />
              <mesh
                name="wedge_447"
                castShadow
                receiveShadow
                geometry={nodes.wedge_447.geometry}
                material={nodes.wedge_447.material}
                position={[-0.5, 2.625, 11.125]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[2, 0.5, 0.75]}
              />
              <mesh
                name="wedge_448"
                castShadow
                receiveShadow
                geometry={nodes.wedge_448.geometry}
                material={nodes.wedge_448.material}
                position={[0.5, 2.625, 11.125]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[2, 0.5, 0.75]}
              />
              <mesh
                name="wedge_449"
                castShadow
                receiveShadow
                geometry={nodes.wedge_449.geometry}
                material={nodes.wedge_449.material}
                position={[0, 2.625, 12.25]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[0.25, 0.25, 0.5]}
              />
              <mesh
                name="truncatedPyramid4_53"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_53.geometry}
                material={nodes.truncatedPyramid4_53.material}
                position={[-0.5, 3.5, 10.375]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="truncatedPyramid4_54"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_54.geometry}
                material={nodes.truncatedPyramid4_54.material}
                position={[0.5, 3.5, 10.375]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2, 1, 2]}
              />
              <group name="4f4dbb0c-212d-4568-967c-187908270314" position={[-1.875, 5.5, 8]}>
                <mesh
                  name="wedge_450"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_450.geometry}
                  material={nodes.wedge_450.material}
                  position={[0.375, 0.5, 0]}
                  rotation={[-Math.PI, 0, -Math.PI / 2]}
                  scale={[0.5, 0.5, 0.25]}
                />
                <mesh
                  name="wedge_451"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_451.geometry}
                  material={nodes.wedge_451.material}
                  position={[0.375, -0.25, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[1, 0.5, 0.25]}
                />
                <mesh
                  name="wedge_452"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_452.geometry}
                  material={nodes.wedge_452.material}
                  position={[-0.25, -0.375, 0]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={[0.75, 0.75, 0.25]}
                />
                <mesh
                  name="wedge_453"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_453.geometry}
                  material={nodes.wedge_453.material}
                  position={[-0.25, 0.375, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[0.75, 0.75, 0.25]}
                />
              </group>
              <group name="02b1da9f-c5b8-4ff5-a54a-13396510ef6c" position={[1.875, 5.5, 8]}>
                <mesh
                  name="wedge_454"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_454.geometry}
                  material={nodes.wedge_454.material}
                  position={[0.25, 0.375, 0]}
                  rotation={[-Math.PI, 0, -Math.PI / 2]}
                  scale={[0.75, 0.75, 0.25]}
                />
                <mesh
                  name="wedge_455"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_455.geometry}
                  material={nodes.wedge_455.material}
                  position={[-0.375, 0.5, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[0.5, 0.5, 0.25]}
                />
                <mesh
                  name="wedge_456"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_456.geometry}
                  material={nodes.wedge_456.material}
                  position={[-0.375, -0.25, 0]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={[1, 0.5, 0.25]}
                />
                <mesh
                  name="wedge_457"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_457.geometry}
                  material={nodes.wedge_457.material}
                  position={[0.25, -0.375, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.75, 0.75, 0.25]}
                />
              </group>
              <mesh
                name="box_265"
                castShadow
                receiveShadow
                geometry={nodes.box_265.geometry}
                material={nodes.box_265.material}
                position={[0, 4, 4.625]}
                scale={[4, 3, 5]}
              />
              <mesh
                name="hemisphere_2"
                castShadow
                receiveShadow
                geometry={nodes.hemisphere_2.geometry}
                material={nodes.hemisphere_2.material}
                position={[0.75, 3.625, 10.625]}
                scale={[0.25, 0.5, 0.25]}
              />
              <mesh
                name="hemisphere_3"
                castShadow
                receiveShadow
                geometry={nodes.hemisphere_3.geometry}
                material={nodes.hemisphere_3.material}
                position={[-0.75, 3.625, 10.625]}
                scale={[0.25, 0.5, 0.25]}
              />
              <mesh
                name="box_266"
                castShadow
                receiveShadow
                geometry={nodes.box_266.geometry}
                material={nodes.box_266.material}
                position={[0, 2.875, 12.25]}
                scale={[0.5, 0.25, 0.25]}
              />
              <mesh
                name="wedge_458"
                castShadow
                receiveShadow
                geometry={nodes.wedge_458.geometry}
                material={nodes.wedge_458.material}
                position={[-3, -5.125, 3.875]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[2, 0.75, 1]}
              />
              <mesh
                name="wedge_459"
                castShadow
                receiveShadow
                geometry={nodes.wedge_459.geometry}
                material={nodes.wedge_459.material}
                position={[-3, -5, 3.625]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1, 2]}
              />
              <mesh
                name="icosahedron"
                castShadow
                receiveShadow
                geometry={nodes.icosahedron.geometry}
                material={nodes.icosahedron.material}
                position={[0, 3.5, -11.375]}
                scale={2}
              />
              <mesh
                name="box_267"
                castShadow
                receiveShadow
                geometry={nodes.box_267.geometry}
                material={nodes.box_267.material}
                position={[3, -6, 2.625]}
                scale={[2, 1, 3]}
              />
              <mesh
                name="wedge_460"
                castShadow
                receiveShadow
                geometry={nodes.wedge_460.geometry}
                material={nodes.wedge_460.material}
                position={[3, -5, 3.625]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1, 2]}
              />
              <mesh
                name="box_268"
                castShadow
                receiveShadow
                geometry={nodes.box_268.geometry}
                material={nodes.box_268.material}
                position={[3.875, -6, 3.625]}
                scale={[0.75, 1, 1]}
              />
              <mesh
                name="wedge_461"
                castShadow
                receiveShadow
                geometry={nodes.wedge_461.geometry}
                material={nodes.wedge_461.material}
                position={[3, -5.125, 3.875]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[2, 0.75, 1]}
              />
              <mesh
                name="wedge_462"
                castShadow
                receiveShadow
                geometry={nodes.wedge_462.geometry}
                material={nodes.wedge_462.material}
                position={[1.875, -6, 2.125]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.25, 2, 1]}
              />
              <mesh
                name="box_269"
                castShadow
                receiveShadow
                geometry={nodes.box_269.geometry}
                material={nodes.box_269.material}
                position={[2.125, -6, 3.625]}
                scale={[0.75, 1, 1]}
              />
              <mesh
                name="wedge_463"
                castShadow
                receiveShadow
                geometry={nodes.wedge_463.geometry}
                material={nodes.wedge_463.material}
                position={[2.125, -6, 4.5]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.75, 0.75, 1]}
              />
              <mesh
                name="box_270"
                castShadow
                receiveShadow
                geometry={nodes.box_270.geometry}
                material={nodes.box_270.material}
                position={[3, -6, 4.5]}
                scale={[1, 1, 0.75]}
              />
              <mesh
                name="wedge_464"
                castShadow
                receiveShadow
                geometry={nodes.wedge_464.geometry}
                material={nodes.wedge_464.material}
                position={[3.875, -6, 4.5]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.75, 0.75, 1]}
              />
              <mesh
                name="wedge_465"
                castShadow
                receiveShadow
                geometry={nodes.wedge_465.geometry}
                material={nodes.wedge_465.material}
                position={[4.125, -6, 2.125]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.25, 2, 1]}
              />
              <mesh
                name="box_271"
                castShadow
                receiveShadow
                geometry={nodes.box_271.geometry}
                material={nodes.box_271.material}
                position={[3, -6, -8.375]}
                scale={[2, 1, 3]}
              />
              <mesh
                name="box_272"
                castShadow
                receiveShadow
                geometry={nodes.box_272.geometry}
                material={nodes.box_272.material}
                position={[3, -6, -6.375]}
              />
              <mesh
                name="box_273"
                castShadow
                receiveShadow
                geometry={nodes.box_273.geometry}
                material={nodes.box_273.material}
                position={[-3, -6, -7.375]}
                scale={[3, 1, 1]}
              />
              <mesh
                name="wedge_466"
                castShadow
                receiveShadow
                geometry={nodes.wedge_466.geometry}
                material={nodes.wedge_466.material}
                position={[-4.25, -6, -8.875]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.5, 2, 1]}
              />
              <mesh
                name="wedge_467"
                castShadow
                receiveShadow
                geometry={nodes.wedge_467.geometry}
                material={nodes.wedge_467.material}
                position={[-1.75, -6, -8.875]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.5, 2, 1]}
              />
              <mesh
                name="box_274"
                castShadow
                receiveShadow
                geometry={nodes.box_274.geometry}
                material={nodes.box_274.material}
                position={[-3, -6, -8.375]}
                scale={[2, 1, 3]}
              />
              <mesh
                name="wedge_468"
                castShadow
                receiveShadow
                geometry={nodes.wedge_468.geometry}
                material={nodes.wedge_468.material}
                position={[-4, -6, -6.375]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
              />
              <mesh
                name="box_275"
                castShadow
                receiveShadow
                geometry={nodes.box_275.geometry}
                material={nodes.box_275.material}
                position={[-3, -6, -6.375]}
              />
              <mesh
                name="wedge_469"
                castShadow
                receiveShadow
                geometry={nodes.wedge_469.geometry}
                material={nodes.wedge_469.material}
                position={[-2, -6, -6.375]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                name="box_276"
                castShadow
                receiveShadow
                geometry={nodes.box_276.geometry}
                material={nodes.box_276.material}
                position={[3, -6, -7.375]}
                scale={[3, 1, 1]}
              />
              <mesh
                name="wedge_470"
                castShadow
                receiveShadow
                geometry={nodes.wedge_470.geometry}
                material={nodes.wedge_470.material}
                position={[4, -6, -6.375]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                name="wedge_471"
                castShadow
                receiveShadow
                geometry={nodes.wedge_471.geometry}
                material={nodes.wedge_471.material}
                position={[2, -6, -6.375]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
              />
              <mesh
                name="wedge_472"
                castShadow
                receiveShadow
                geometry={nodes.wedge_472.geometry}
                material={nodes.wedge_472.material}
                position={[4.25, -6, -8.875]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.5, 2, 1]}
              />
              <mesh
                name="wedge_473"
                castShadow
                receiveShadow
                geometry={nodes.wedge_473.geometry}
                material={nodes.wedge_473.material}
                position={[1.75, -6, -8.875]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.5, 2, 1]}
              />
              <mesh
                name="wedge_474"
                castShadow
                receiveShadow
                geometry={nodes.wedge_474.geometry}
                material={nodes.wedge_474.material}
                position={[-3, -5.125, -6.875]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[2, 0.75, 1]}
              />
              <mesh
                name="wedge_475"
                castShadow
                receiveShadow
                geometry={nodes.wedge_475.geometry}
                material={nodes.wedge_475.material}
                position={[3, -5.125, -6.875]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[2, 0.75, 1]}
              />
              <mesh
                name="wedge_476"
                castShadow
                receiveShadow
                geometry={nodes.wedge_476.geometry}
                material={nodes.wedge_476.material}
                position={[-3, -5, -7.375]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1, 2]}
              />
              <mesh
                name="wedge_477"
                castShadow
                receiveShadow
                geometry={nodes.wedge_477.geometry}
                material={nodes.wedge_477.material}
                position={[3, -5, -7.375]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1, 2]}
              />
            </group>
            <mesh
              name="icosahedron_1"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_1.geometry}
              material={nodes.icosahedron_1.material}
              position={[80.795, -21, 116.83]}
              scale={4}
            />
            <mesh
              name="icosahedron_2"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_2.geometry}
              material={nodes.icosahedron_2.material}
              position={[85.795, -21, 118.83]}
              scale={4}
            />
            <mesh
              name="icosahedron_3"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_3.geometry}
              material={nodes.icosahedron_3.material}
              position={[95.795, -21, 115.83]}
              scale={4}
            />
            <mesh
              name="icosahedron_4"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_4.geometry}
              material={nodes.icosahedron_4.material}
              position={[98.795, -21, 109.83]}
              scale={4}
            />
            <mesh
              name="icosahedron_5"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_5.geometry}
              material={nodes.icosahedron_5.material}
              position={[93.795, -21, 101.83]}
              scale={4}
            />
            <mesh
              name="icosahedron_6"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_6.geometry}
              material={nodes.icosahedron_6.material}
              position={[78.795, -21, 111.83]}
              scale={4}
            />
            <group name="87569cf2-9fd8-41cc-84a4-c8d8c98b015b" position={[-29.705, -19, 150.33]}>
              <mesh
                name="hemisphere_4"
                castShadow
                receiveShadow
                geometry={nodes.hemisphere_4.geometry}
                material={nodes.hemisphere_4.material}
                position={[0, 1.5, 0]}
                scale={[7, 6, 7]}
              />
              <mesh
                name="hemisphere_5"
                castShadow
                receiveShadow
                geometry={nodes.hemisphere_5.geometry}
                material={nodes.hemisphere_5.material}
                position={[0, -0.25, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[7, 1, 7]}
              />
              <mesh
                name="sphere"
                castShadow
                receiveShadow
                geometry={nodes.sphere.geometry}
                material={nodes.sphere.material}
                position={[1, 2, 0.5]}
                scale={2}
              />
              <mesh
                name="sphere_1"
                castShadow
                receiveShadow
                geometry={nodes.sphere_1.geometry}
                material={nodes.sphere_1.material}
                position={[-1, 2, 1]}
                scale={2}
              />
              <mesh
                name="sphere_2"
                castShadow
                receiveShadow
                geometry={nodes.sphere_2.geometry}
                material={nodes.sphere_2.material}
                position={[1, 1, 2]}
                scale={2}
              />
              <mesh
                name="hemisphere_6"
                castShadow
                receiveShadow
                geometry={nodes.hemisphere_6.geometry}
                material={nodes.hemisphere_6.material}
                position={[0, -1, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[3, 8, 3]}
              />
            </group>
            <group name="87569cf2-9fd8-41cc-84a4-c8d8c98b015b_1" position={[-101.705, -19, 150.33]}>
              <mesh
                name="hemisphere_7"
                castShadow
                receiveShadow
                geometry={nodes.hemisphere_7.geometry}
                material={nodes.hemisphere_7.material}
                position={[0, 1.5, 0]}
                scale={[7, 6, 7]}
              />
              <mesh
                name="hemisphere_8"
                castShadow
                receiveShadow
                geometry={nodes.hemisphere_8.geometry}
                material={nodes.hemisphere_8.material}
                position={[0, -0.25, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[7, 1, 7]}
              />
              <mesh
                name="sphere_3"
                castShadow
                receiveShadow
                geometry={nodes.sphere_3.geometry}
                material={nodes.sphere_3.material}
                position={[1, 2, 0.5]}
                scale={2}
              />
              <mesh
                name="sphere_4"
                castShadow
                receiveShadow
                geometry={nodes.sphere_4.geometry}
                material={nodes.sphere_4.material}
                position={[-1, 2, 1]}
                scale={2}
              />
              <mesh
                name="sphere_5"
                castShadow
                receiveShadow
                geometry={nodes.sphere_5.geometry}
                material={nodes.sphere_5.material}
                position={[1, 1, 2]}
                scale={2}
              />
              <mesh
                name="hemisphere_9"
                castShadow
                receiveShadow
                geometry={nodes.hemisphere_9.geometry}
                material={nodes.hemisphere_9.material}
                position={[0, -1, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[3, 8, 3]}
              />
            </group>
            <group name="58e62e48-7203-4a6b-baa6-312a57e645ba" position={[-131.407, 16.5, 68.866]}>
              <group
                name="9c9f0803-2681-4ac3-9c03-30b60450c052_1"
                position={[0.872, 5.5, -0.801]}
                rotation={[0, -0.262, 0]}>
                <mesh
                  name="pyramid4_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.pyramid4_18.geometry}
                  material={nodes.pyramid4_18.material}
                  position={[-0.7, 16, 1.652]}
                  rotation={[Math.PI, -1.309, Math.PI]}
                  scale={[40, 38, 36]}
                />
                <mesh
                  name="pyramid4_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.pyramid4_19.geometry}
                  material={nodes.pyramid4_19.material}
                  position={[0, 2.5, 0]}
                  rotation={[0, -Math.PI / 3, 0]}
                  scale={[47, 51, 46]}
                />
                <mesh
                  name="pyramid4_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.pyramid4_20.geometry}
                  material={nodes.pyramid4_20.material}
                  position={[-0.635, -7.5, 1]}
                  scale={[49, 55, 52]}
                />
              </group>
              <mesh
                name="cylinder_3"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_3.geometry}
                material={nodes.cylinder_3.material}
                position={[-1.263, -32.5, 3.198]}
                scale={[10, 16, 10]}
              />
            </group>
            <group
              name="58e62e48-7203-4a6b-baa6-312a57e645ba_1"
              position={[142.399, 16.5, 68.866]}
              rotation={[0, -Math.PI / 4, 0]}>
              <group
                name="9c9f0803-2681-4ac3-9c03-30b60450c052_2"
                position={[0.872, 5.5, -0.801]}
                rotation={[0, -0.262, 0]}>
                <mesh
                  name="pyramid4_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.pyramid4_21.geometry}
                  material={nodes.pyramid4_21.material}
                  position={[-0.7, 16, 1.652]}
                  rotation={[Math.PI, -1.309, Math.PI]}
                  scale={[40, 38, 36]}
                />
                <mesh
                  name="pyramid4_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.pyramid4_22.geometry}
                  material={nodes.pyramid4_22.material}
                  position={[0, 2.5, 0]}
                  rotation={[0, -Math.PI / 3, 0]}
                  scale={[47, 51, 46]}
                />
                <mesh
                  name="pyramid4_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.pyramid4_23.geometry}
                  material={nodes.pyramid4_23.material}
                  position={[-0.635, -7.5, 1]}
                  scale={[49, 55, 52]}
                />
              </group>
              <mesh
                name="cylinder_4"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_4.geometry}
                material={nodes.cylinder_4.material}
                position={[-1.263, -32.5, 3.198]}
                scale={[10, 16, 10]}
              />
            </group>
            <group
              name="58532882-5674-4058-a24f-c927b10ab7d6"
              position={[132.094, -29.095, 20.76]}
              rotation={[0, 0.524, -Math.PI / 2]}>
              <mesh
                name="box_277"
                castShadow
                receiveShadow
                geometry={nodes.box_277.geometry}
                material={nodes.box_277.material}
                position={[1.78, -0.062, 0.25]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 18, 1]}
              />
              <mesh
                name="box_278"
                castShadow
                receiveShadow
                geometry={nodes.box_278.geometry}
                material={nodes.box_278.material}
                position={[1.463, -0.062, 1.015]}
                rotation={[-Math.PI, 0.787, -Math.PI]}
                scale={[0.248, 18, 0.999]}
              />
              <mesh
                name="box_279"
                castShadow
                receiveShadow
                geometry={nodes.box_279.geometry}
                material={nodes.box_279.material}
                position={[-1.78, -0.062, 0.25]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 18, 1]}
              />
              <mesh
                name="box_280"
                castShadow
                receiveShadow
                geometry={nodes.box_280.geometry}
                material={nodes.box_280.material}
                position={[-0.47, -0.062, -1.686]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.25, 18, 0.75]}
              />
              <mesh
                name="box_281"
                castShadow
                receiveShadow
                geometry={nodes.box_281.geometry}
                material={nodes.box_281.material}
                position={[0.933, -0.062, 1.545]}
                rotation={[-Math.PI, 0.788, -Math.PI]}
                scale={[0.248, 18, 0.499]}
              />
              <mesh
                name="box_282"
                castShadow
                receiveShadow
                geometry={nodes.box_282.geometry}
                material={nodes.box_282.material}
                position={[0.344, -0.062, 1.686]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.25, 18, 1]}
              />
              <mesh
                name="box_283"
                castShadow
                receiveShadow
                geometry={nodes.box_283.geometry}
                material={nodes.box_283.material}
                position={[-0.47, -0.062, 1.686]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 18, 0.75]}
              />
              <mesh
                name="box_284"
                castShadow
                receiveShadow
                geometry={nodes.box_284.geometry}
                material={nodes.box_284.material}
                position={[-0.933, -0.062, 1.545]}
                rotation={[-Math.PI, -0.788, -Math.PI]}
                scale={[0.249, 18, 0.498]}
              />
              <mesh
                name="box_285"
                castShadow
                receiveShadow
                geometry={nodes.box_285.geometry}
                material={nodes.box_285.material}
                position={[-1.463, -0.062, 1.015]}
                rotation={[-Math.PI, -0.788, -Math.PI]}
                scale={[0.249, 18, 0.998]}
              />
              <mesh
                name="box_286"
                castShadow
                receiveShadow
                geometry={nodes.box_286.geometry}
                material={nodes.box_286.material}
                position={[1.78, -0.062, -0.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 18, 0.5]}
              />
              <mesh
                name="box_287"
                castShadow
                receiveShadow
                geometry={nodes.box_287.geometry}
                material={nodes.box_287.material}
                position={[1.463, -0.062, -1.015]}
                rotation={[-Math.PI, -0.788, -Math.PI]}
                scale={[0.249, 18, 0.998]}
              />
              <mesh
                name="box_288"
                castShadow
                receiveShadow
                geometry={nodes.box_288.geometry}
                material={nodes.box_288.material}
                position={[0.344, -0.062, 0.061]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[3, 18, 1]}
              />
              <mesh
                name="box_289"
                castShadow
                receiveShadow
                geometry={nodes.box_289.geometry}
                material={nodes.box_289.material}
                position={[-0.47, -0.062, -1.564]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 18, 0.75]}
              />
              <mesh
                name="box_290"
                castShadow
                receiveShadow
                geometry={nodes.box_290.geometry}
                material={nodes.box_290.material}
                position={[-0.314, -0.062, 0.134]}
                rotation={[-Math.PI, 0.786, -Math.PI]}
                scale={[2.999, 18, 0.999]}
              />
              <mesh
                name="box_291"
                castShadow
                receiveShadow
                geometry={nodes.box_291.geometry}
                material={nodes.box_291.material}
                position={[0.216, -0.062, -0.396]}
                rotation={[-Math.PI, 0.787, -Math.PI]}
                scale={[2.999, 18, 0.499]}
              />
              <mesh
                name="box_292"
                castShadow
                receiveShadow
                geometry={nodes.box_292.geometry}
                material={nodes.box_292.material}
                position={[-0.155, -0.062, 0.25]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[3, 18, 1]}
              />
              <mesh
                name="box_293"
                castShadow
                receiveShadow
                geometry={nodes.box_293.geometry}
                material={nodes.box_293.material}
                position={[0.216, -0.062, 0.396]}
                rotation={[-Math.PI, -0.786, -Math.PI]}
                scale={[2.999, 18, 0.498]}
              />
              <mesh
                name="box_294"
                castShadow
                receiveShadow
                geometry={nodes.box_294.geometry}
                material={nodes.box_294.material}
                position={[1.198, -0.062, 0.75]}
                rotation={[-Math.PI, 0.787, -Math.PI]}
                scale={[0.498, 18, 0.999]}
              />
              <mesh
                name="box_295"
                castShadow
                receiveShadow
                geometry={nodes.box_295.geometry}
                material={nodes.box_295.material}
                position={[0.668, -0.062, 1.28]}
                rotation={[-Math.PI, 0.787, -Math.PI]}
                scale={[0.498, 18, 0.499]}
              />
              <mesh
                name="box_296"
                castShadow
                receiveShadow
                geometry={nodes.box_296.geometry}
                material={nodes.box_296.material}
                position={[1.405, -0.062, 0.25]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 18, 1]}
              />
              <mesh
                name="box_297"
                castShadow
                receiveShadow
                geometry={nodes.box_297.geometry}
                material={nodes.box_297.material}
                position={[1.405, -0.062, -0.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.5, 18, 0.5]}
              />
              <mesh
                name="box_298"
                castShadow
                receiveShadow
                geometry={nodes.box_298.geometry}
                material={nodes.box_298.material}
                position={[1.198, -0.062, -0.75]}
                rotation={[-Math.PI, -0.787, -Math.PI]}
                scale={[0.499, 18, 0.998]}
              />
              <mesh
                name="box_299"
                castShadow
                receiveShadow
                geometry={nodes.box_299.geometry}
                material={nodes.box_299.material}
                position={[0.756, -0.062, -1.192]}
                rotation={[-Math.PI, -0.788, -Math.PI]}
                scale={[0.499, 18, 0.248]}
              />
              <mesh
                name="cylinder_5"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_5.geometry}
                material={nodes.cylinder_5.material}
                position={[0.03, 8.937, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.75, 0.25, 0.75]}
              />
              <mesh
                name="box_300"
                castShadow
                receiveShadow
                geometry={nodes.box_300.geometry}
                material={nodes.box_300.material}
                position={[-1.463, -0.062, -1.015]}
                rotation={[-Math.PI, 0.787, -Math.PI]}
                scale={[0.248, 18, 0.999]}
              />
              <mesh
                name="box_301"
                castShadow
                receiveShadow
                geometry={nodes.box_301.geometry}
                material={nodes.box_301.material}
                position={[-1.78, -0.062, -0.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 18, 0.5]}
              />
              <mesh
                name="box_302"
                castShadow
                receiveShadow
                geometry={nodes.box_302.geometry}
                material={nodes.box_302.material}
                position={[-0.933, -0.062, -1.545]}
                rotation={[-Math.PI, 0.788, -Math.PI]}
                scale={[0.248, 18, 0.499]}
              />
              <mesh
                name="box_303"
                castShadow
                receiveShadow
                geometry={nodes.box_303.geometry}
                material={nodes.box_303.material}
                position={[-0.47, -0.062, 0.061]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[3, 18, 0.75]}
              />
              <mesh
                name="box_304"
                castShadow
                receiveShadow
                geometry={nodes.box_304.geometry}
                material={nodes.box_304.material}
                position={[-0.155, -0.062, -0.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[3, 18, 0.5]}
              />
              <mesh
                name="box_305"
                castShadow
                receiveShadow
                geometry={nodes.box_305.geometry}
                material={nodes.box_305.material}
                position={[-0.314, -0.062, -0.134]}
                rotation={[-Math.PI, -0.785, -Math.PI]}
                scale={[2.999, 18, 0.999]}
              />
              <mesh
                name="box_306"
                castShadow
                receiveShadow
                geometry={nodes.box_306.geometry}
                material={nodes.box_306.material}
                position={[-1.463, -4.938, -1.015]}
                rotation={[-Math.PI, 0.787, -Math.PI]}
                scale={[0.248, 0.25, 0.999]}
              />
              <mesh
                name="box_307"
                castShadow
                receiveShadow
                geometry={nodes.box_307.geometry}
                material={nodes.box_307.material}
                position={[-0.933, -4.938, -1.545]}
                rotation={[-Math.PI, 0.788, -Math.PI]}
                scale={[0.248, 0.25, 0.499]}
              />
              <mesh
                name="box_308"
                castShadow
                receiveShadow
                geometry={nodes.box_308.geometry}
                material={nodes.box_308.material}
                position={[-0.47, -4.938, -1.686]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.25, 0.25, 0.75]}
              />
              <mesh
                name="box_309"
                castShadow
                receiveShadow
                geometry={nodes.box_309.geometry}
                material={nodes.box_309.material}
                position={[-1.78, -4.938, -0.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 0.25, 0.5]}
              />
              <mesh
                name="box_310"
                castShadow
                receiveShadow
                geometry={nodes.box_310.geometry}
                material={nodes.box_310.material}
                position={[-1.78, -4.938, 0.25]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 0.25, 1]}
              />
              <mesh
                name="box_311"
                castShadow
                receiveShadow
                geometry={nodes.box_311.geometry}
                material={nodes.box_311.material}
                position={[-1.463, -4.938, 1.015]}
                rotation={[-Math.PI, -0.788, -Math.PI]}
                scale={[0.249, 0.25, 0.998]}
              />
              <mesh
                name="box_312"
                castShadow
                receiveShadow
                geometry={nodes.box_312.geometry}
                material={nodes.box_312.material}
                position={[-0.933, -4.938, 1.545]}
                rotation={[-Math.PI, -0.788, -Math.PI]}
                scale={[0.249, 0.25, 0.498]}
              />
              <mesh
                name="box_313"
                castShadow
                receiveShadow
                geometry={nodes.box_313.geometry}
                material={nodes.box_313.material}
                position={[-0.47, -4.938, 1.686]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 0.25, 0.75]}
              />
              <mesh
                name="box_314"
                castShadow
                receiveShadow
                geometry={nodes.box_314.geometry}
                material={nodes.box_314.material}
                position={[0.344, -4.938, 1.686]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.25, 0.25, 1]}
              />
              <mesh
                name="box_315"
                castShadow
                receiveShadow
                geometry={nodes.box_315.geometry}
                material={nodes.box_315.material}
                position={[0.933, -4.938, 1.545]}
                rotation={[-Math.PI, 0.788, -Math.PI]}
                scale={[0.248, 0.25, 0.499]}
              />
              <mesh
                name="box_316"
                castShadow
                receiveShadow
                geometry={nodes.box_316.geometry}
                material={nodes.box_316.material}
                position={[1.463, -4.938, 1.015]}
                rotation={[-Math.PI, 0.787, -Math.PI]}
                scale={[0.248, 0.25, 0.999]}
              />
              <mesh
                name="box_317"
                castShadow
                receiveShadow
                geometry={nodes.box_317.geometry}
                material={nodes.box_317.material}
                position={[1.78, -4.938, 0.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 0.25, 0.5]}
              />
              <mesh
                name="box_318"
                castShadow
                receiveShadow
                geometry={nodes.box_318.geometry}
                material={nodes.box_318.material}
                position={[1.78, -4.938, -0.25]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.25, 0.25, 1]}
              />
              <mesh
                name="box_319"
                castShadow
                receiveShadow
                geometry={nodes.box_319.geometry}
                material={nodes.box_319.material}
                position={[0.344, -4.938, -1.686]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 0.25, 1]}
              />
              <mesh
                name="box_320"
                castShadow
                receiveShadow
                geometry={nodes.box_320.geometry}
                material={nodes.box_320.material}
                position={[1.463, -4.938, -1.015]}
                rotation={[-Math.PI, -0.788, -Math.PI]}
                scale={[0.249, 0.25, 0.998]}
              />
              <mesh
                name="box_321"
                castShadow
                receiveShadow
                geometry={nodes.box_321.geometry}
                material={nodes.box_321.material}
                position={[0.933, -4.938, -1.545]}
                rotation={[-Math.PI, -0.788, -Math.PI]}
                scale={[0.249, 0.25, 0.498]}
              />
              <mesh
                name="box_322"
                castShadow
                receiveShadow
                geometry={nodes.box_322.geometry}
                material={nodes.box_322.material}
                position={[0.933, -0.062, -1.545]}
                rotation={[-Math.PI, -0.788, -Math.PI]}
                scale={[0.249, 18, 0.498]}
              />
              <mesh
                name="box_323"
                castShadow
                receiveShadow
                geometry={nodes.box_323.geometry}
                material={nodes.box_323.material}
                position={[0.344, -0.062, -1.686]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 18, 1]}
              />
              <mesh
                name="box_324"
                castShadow
                receiveShadow
                geometry={nodes.box_324.geometry}
                material={nodes.box_324.material}
                position={[0.405, -0.062, -1.564]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.25, 18, 1]}
              />
            </group>
            <group name="ecba231e-02ed-481c-b832-7ff19dc4ea76" position={[-76.89, -8, 45.83]}>
              <mesh
                name="wedge_478"
                castShadow
                receiveShadow
                geometry={nodes.wedge_478.geometry}
                material={nodes.wedge_478.material}
                position={[-6.815, 9, 11]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[2, 4, 1]}
              />
              <mesh
                name="wedge_479"
                castShadow
                receiveShadow
                geometry={nodes.wedge_479.geometry}
                material={nodes.wedge_479.material}
                position={[-6.815, 7, 11]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[4, 2, 1]}
              />
              <mesh
                name="box_325"
                castShadow
                receiveShadow
                geometry={nodes.box_325.geometry}
                material={nodes.box_325.material}
                position={[-6.815, 8, -2]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={[4, 1, 22]}
              />
              <mesh
                name="box_326"
                castShadow
                receiveShadow
                geometry={nodes.box_326.geometry}
                material={nodes.box_326.material}
                position={[-1.932, 2, 2.668]}
                rotation={[0, -1.309, 1.571]}
                scale={[4, 1, 22]}
              />
              <mesh
                name="wedge_480"
                castShadow
                receiveShadow
                geometry={nodes.wedge_480.geometry}
                material={nodes.wedge_480.material}
                position={[10.625, 3, -0.697]}
                rotation={[-3.142, -0.262, -1.571]}
                scale={[2, 4, 1]}
              />
              <mesh
                name="wedge_481"
                castShadow
                receiveShadow
                geometry={nodes.wedge_481.geometry}
                material={nodes.wedge_481.material}
                position={[10.625, 1, -0.697]}
                rotation={[Math.PI, -0.262, 0]}
                scale={[4, 2, 1]}
              />
              <mesh
                name="cylinder_6"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_6.geometry}
                material={nodes.cylinder_6.material}
                position={[-3.315, 0, 0]}
                scale={[3, 30, 3]}
              />
            </group>
            <group name="880f6455-ac89-4e43-a4ba-f49d9bf85731" position={[-41.945, -5.845, 14.3]}>
              <group
                name="5f5772c8-424a-4619-b359-7ca08d87820e"
                position={[0, -0.187, -0.238]}
                rotation={[1.309, 0, 0.524]}>
                <mesh
                  name="truncatedCone_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedCone_4.geometry}
                  material={nodes.truncatedCone_4.material}
                  position={[0, 0, -0.125]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.25, 0.5, 0.25]}
                />
                <mesh
                  name="truncatedCone_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.truncatedCone_5.geometry}
                  material={nodes.truncatedCone_5.material}
                  position={[0, 0, 0.125]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.25, 0.5, 0.25]}
                />
              </group>
              <mesh
                name="pyramid4_24"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_24.geometry}
                material={nodes.pyramid4_24.material}
                position={[-0.66, 0.229, 0.044]}
                rotation={[-2.113, 0.448, 2.159]}
                scale={[0.25, 1, 0.75]}
              />
              <mesh
                name="pyramid4_25"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_25.geometry}
                material={nodes.pyramid4_25.material}
                position={[-0.191, -0.142, -0.136]}
                rotation={[1.028, -0.448, -2.158]}
                scale={[0.25, 0.25, 0.75]}
              />
              <mesh
                name="pyramid4_26"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_26.geometry}
                material={nodes.pyramid4_26.material}
                position={[0.66, 0.229, 0.044]}
                rotation={[-2.113, -0.448, -2.159]}
                scale={[0.25, 1, 0.75]}
              />
              <mesh
                name="pyramid4_27"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_27.geometry}
                material={nodes.pyramid4_27.material}
                position={[0.191, -0.142, -0.136]}
                rotation={[1.028, 0.448, 2.159]}
                scale={[0.25, 0.25, 0.75]}
              />
              <mesh
                name="pyramid4_28"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_28.geometry}
                material={nodes.pyramid4_28.material}
                position={[-0.14, -0.202, -0.151]}
                rotation={[1.773, 0.659, -2.255]}
                scale={0.25}
              />
              <mesh
                name="pyramid4_29"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_29.geometry}
                material={nodes.pyramid4_29.material}
                position={[-0.446, -0.497, 0.111]}
                rotation={[-1.369, -0.659, 2.255]}
                scale={[0.25, 0.75, 0.25]}
              />
              <mesh
                name="pyramid4_30"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_30.geometry}
                material={nodes.pyramid4_30.material}
                position={[0.14, -0.202, -0.151]}
                rotation={[1.772, -0.659, 2.255]}
                scale={0.25}
              />
              <mesh
                name="pyramid4_31"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_31.geometry}
                material={nodes.pyramid4_31.material}
                position={[0.446, -0.497, 0.111]}
                rotation={[-1.369, 0.659, -2.255]}
                scale={[0.25, 0.75, 0.25]}
              />
            </group>
            <group
              name="59ebaff8-7280-4eff-93aa-122efa10d85d"
              position={[85.169, -11.985, 109.425]}>
              <mesh
                name="halfCylinder"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder.geometry}
                material={nodes.halfCylinder.material}
                position={[-1.53, 17.014, 2.393]}
                rotation={[Math.PI / 2, 0, -2.88]}
                scale={[1, 1, 2]}
              />
              <mesh
                name="halfCylinder_1"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_1.geometry}
                material={nodes.halfCylinder_1.material}
                position={[2.535, 11.014, 2.152]}
                rotation={[Math.PI / 2, 0, -2.88]}
                scale={[1, 2, 6]}
              />
              <mesh
                name="halfCylinder_2"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_2.geometry}
                material={nodes.halfCylinder_2.material}
                position={[-1.941, 2.188, -4.193]}
                rotation={[1.571, 0, -0.785]}
                scale={[1, 4, 15.999]}
              />
              <mesh
                name="circleWedge_2"
                castShadow
                receiveShadow
                geometry={nodes.circleWedge_2.geometry}
                material={nodes.circleWedge_2.material}
                position={[-3.355, 6.188, -5.607]}
                rotation={[0, -0.785, 1.571]}
                scale={[8, 2, 1]}
              />
              <mesh
                name="quarterCylinder"
                castShadow
                receiveShadow
                geometry={nodes.quarterCylinder.geometry}
                material={nodes.quarterCylinder.material}
                position={[-3.355, -1.812, -5.607]}
                rotation={[0, 0.785, 1.571]}
                scale={[8, 1, 2]}
              />
              <mesh
                name="halfCylinder_3"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_3.geometry}
                material={nodes.halfCylinder_3.material}
                position={[-5.355, -3.486, 1.893]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1, 10, 7]}
              />
              <mesh
                name="circleWedge_3"
                castShadow
                receiveShadow
                geometry={nodes.circleWedge_3.geometry}
                material={nodes.circleWedge_3.material}
                position={[-9.355, 4.514, 1.893]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[13, 3, 1]}
              />
              <mesh
                name="circleWedge_4"
                castShadow
                receiveShadow
                geometry={nodes.circleWedge_4.geometry}
                material={nodes.circleWedge_4.material}
                position={[-5.355, 4.014, 1.893]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={[12, 5, 1]}
              />
              <mesh
                name="halfCylinder_4"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_4.geometry}
                material={nodes.halfCylinder_4.material}
                position={[-7.355, 5.514, 1.893]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1, 2, 9]}
              />
              <mesh
                name="halfCylinder_5"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_5.geometry}
                material={nodes.halfCylinder_5.material}
                position={[-9.355, -1.986, 1.893]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[1, 6, 10]}
              />
              <mesh
                name="halfCylinder_6"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_6.geometry}
                material={nodes.halfCylinder_6.material}
                position={[1.832, -1.486, 3.874]}
                rotation={[1.571, 0, 2.618]}
                scale={[3, 4, 17]}
              />
              <mesh
                name="quarterCylinder_1"
                castShadow
                receiveShadow
                geometry={nodes.quarterCylinder_1.geometry}
                material={nodes.quarterCylinder_1.material}
                position={[3.332, -5.986, 6.472]}
                rotation={[3.142, -0.524, -1.571]}
                scale={[8, 3, 4]}
              />
              <mesh
                name="circleWedge_5"
                castShadow
                receiveShadow
                geometry={nodes.circleWedge_5.geometry}
                material={nodes.circleWedge_5.material}
                position={[3.332, 0.514, 6.472]}
                rotation={[Math.PI, Math.PI / 3, -1.571]}
                scale={[5, 4, 3]}
              />
              <mesh
                name="halfCylinder_7"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_7.geometry}
                material={nodes.halfCylinder_7.material}
                position={[3.747, -2.312, -0.926]}
                rotation={[1.571, 0, 1.309]}
                scale={[1, 10, 5]}
              />
              <mesh
                name="circleWedge_6"
                castShadow
                receiveShadow
                geometry={nodes.circleWedge_6.geometry}
                material={nodes.circleWedge_6.material}
                position={[7.61, 7.688, -1.961]}
                rotation={[-Math.PI, -0.262, -1.571]}
                scale={[9, 3, 1]}
              />
              <mesh
                name="circleWedge_7"
                castShadow
                receiveShadow
                geometry={nodes.circleWedge_7.geometry}
                material={nodes.circleWedge_7.material}
                position={[3.747, 5.188, -0.926]}
                rotation={[0, 0.262, Math.PI / 2]}
                scale={[12, 5, 1]}
              />
              <mesh
                name="halfCylinder_8"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_8.geometry}
                material={nodes.halfCylinder_8.material}
                position={[5.679, 8.188, -1.444]}
                rotation={[1.571, 0, 1.309]}
                scale={[1, 2, 8]}
              />
              <mesh
                name="halfCylinder_9"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_9.geometry}
                material={nodes.halfCylinder_9.material}
                position={[7.61, 1.688, -1.961]}
                rotation={[1.571, 0, -1.833]}
                scale={[1, 6, 13]}
              />
              <mesh
                name="halfCylinder_10"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_10.geometry}
                material={nodes.halfCylinder_10.material}
                position={[1.644, 3.688, -3.607]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 4, 21]}
              />
              <mesh
                name="circleWedge_8"
                castShadow
                receiveShadow
                geometry={nodes.circleWedge_8.geometry}
                material={nodes.circleWedge_8.material}
                position={[1.645, 5.188, -6.607]}
                rotation={[-0.719, -1.555, 0.327]}
                scale={[8, 3.999, 1]}
              />
              <mesh
                name="quarterCylinder_2"
                castShadow
                receiveShadow
                geometry={nodes.quarterCylinder_2.geometry}
                material={nodes.quarterCylinder_2.material}
                position={[1.645, -2.812, -6.607]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[8, 1, 4]}
              />
              <mesh
                name="circleWedge_9"
                castShadow
                receiveShadow
                geometry={nodes.circleWedge_9.geometry}
                material={nodes.circleWedge_9.material}
                position={[-4.404, 5.188, 6.972]}
                rotation={[0, 1.047, 1.571]}
                scale={[8, 4, 1]}
              />
              <mesh
                name="halfCylinder_11"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_11.geometry}
                material={nodes.halfCylinder_11.material}
                position={[-2.654, 1.188, 3.941]}
                rotation={[1.571, 0, -2.618]}
                scale={[1, 6, 15.999]}
              />
              <mesh
                name="quarterCylinder_3"
                castShadow
                receiveShadow
                geometry={nodes.quarterCylinder_3.geometry}
                material={nodes.quarterCylinder_3.material}
                position={[-4.404, -2.812, 6.972]}
                rotation={[3.142, 0.524, -1.571]}
                scale={[8, 1, 4]}
              />
              <mesh
                name="halfCylinder_12"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_12.geometry}
                material={nodes.halfCylinder_12.material}
                position={[-0.465, 9.014, -1.997]}
                rotation={[Math.PI / 2, 0, -2.88]}
                scale={[1, 2, 6]}
              />
              <mesh
                name="halfCylinder_13"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_13.geometry}
                material={nodes.halfCylinder_13.material}
                position={[4.438, 8.514, -1.635]}
                rotation={[1.571, 0, -2.88]}
                scale={[1, 0.5, 7]}
              />
              <mesh
                name="halfCylinder_14"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_14.geometry}
                material={nodes.halfCylinder_14.material}
                position={[-4.245, 9.514, 1.003]}
                rotation={[1.571, 0, 1.309]}
                scale={[1, 2, 11]}
              />
              <mesh
                name="halfCylinder_15"
                castShadow
                receiveShadow
                geometry={nodes.halfCylinder_15.geometry}
                material={nodes.halfCylinder_15.material}
                position={[-1.245, 3.514, 2.152]}
                rotation={[1.571, 0, 1.309]}
                scale={[1, 2, 11]}
              />
              <mesh
                name="box_327"
                castShadow
                receiveShadow
                geometry={nodes.box_327.geometry}
                material={nodes.box_327.material}
                position={[0.647, -8.944, 4.695]}
                rotation={[-1.33, 0.696, 0.647]}
                scale={[1, 21, 2]}
              />
              <mesh
                name="box_328"
                castShadow
                receiveShadow
                geometry={nodes.box_328.geometry}
                material={nodes.box_328.material}
                position={[-4.526, -8.451, 0.683]}
                rotation={[0.266, 0.188, 2.452]}
                scale={[2, 20, 1]}
              />
              <mesh
                name="box_329"
                castShadow
                receiveShadow
                geometry={nodes.box_329.geometry}
                material={nodes.box_329.material}
                position={[-4.13, -12.351, 0.723]}
                rotation={[-1.367, -0.441, 2.165]}
                scale={[1, 15.001, 2]}
              />
              <mesh
                name="box_330"
                castShadow
                receiveShadow
                geometry={nodes.box_330.geometry}
                material={nodes.box_330.material}
                position={[1.416, -10.171, 2.768]}
                rotation={[-Math.PI / 2, 0.524, Math.PI / 2]}
                scale={[2, 22.999, 1]}
              />
              <mesh
                name="box_331"
                castShadow
                receiveShadow
                geometry={nodes.box_331.geometry}
                material={nodes.box_331.material}
                position={[3.876, -11.296, -6.335]}
                rotation={[-2.284, 0.361, 2.754]}
                scale={[1, 18, 1]}
              />
              <mesh
                name="box_332"
                castShadow
                receiveShadow
                geometry={nodes.box_332.geometry}
                material={nodes.box_332.material}
                position={[1.106, -12.527, -2.368]}
                rotation={[-1.704, -0.226, 1.032]}
                scale={[1, 23, 1]}
              />
            </group>
            <mesh
              name="icosahedron_7"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_7.geometry}
              material={nodes.icosahedron_7.material}
              position={[37.098, -25.286, -141.451]}
              rotation={[-2.219, 1.189, 0.715]}
              scale={[23.682, 23.577, 23.471]}
            />
            <mesh
              name="icosahedron_8"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_8.geometry}
              material={nodes.icosahedron_8.material}
              position={[57.899, -19.581, -139.68]}
              rotation={[0, 0.524, 0]}
              scale={30}
            />
            <mesh
              name="icosahedron_9"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_9.geometry}
              material={nodes.icosahedron_9.material}
              position={[77.452, -23.081, -138.594]}
              rotation={[0, 1.047, 0]}
              scale={21}
            />
            <group name="78984463-b954-4fe6-8372-a19a6a9ed1b6" position={[28.195, 33, -120.585]}>
              <mesh
                name="pyramid4_32"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_32.geometry}
                material={nodes.pyramid4_32.material}
                position={[-4.38, 16.14, -4.214]}
                rotation={[0, -1.047, 0.524]}
                scale={[2, 17, 1]}
              />
              <mesh
                name="pyramid4_33"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_33.geometry}
                material={nodes.pyramid4_33.material}
                position={[-0.142, -5.239, -6.048]}
                rotation={[0.246, 1.293, -1.013]}
                scale={[2, 17, 0.25]}
              />
              <mesh
                name="pyramid4_34"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_34.geometry}
                material={nodes.pyramid4_34.material}
                position={[-0.725, -23.02, -4.391]}
                rotation={[0.246, 1.293, -1.013]}
                scale={[2, 12, 0.25]}
              />
              <mesh
                name="pyramid4_35"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_35.geometry}
                material={nodes.pyramid4_35.material}
                position={[-6.607, -30.14, -4.214]}
                rotation={[0, -1.047, 0.524]}
                scale={[2, 17, 1]}
              />
              <mesh
                name="pyramid4_36"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_36.geometry}
                material={nodes.pyramid4_36.material}
                position={[2.137, -42.15, 1.274]}
                rotation={[0.069, -0.27, -0.758]}
                scale={[2, 20, 1]}
              />
              <mesh
                name="pyramid4_37"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_37.geometry}
                material={nodes.pyramid4_37.material}
                position={[-5.348, -34.638, 5.829]}
                rotation={[0.8, -0.226, 0.133]}
                scale={[3, 17, 1]}
              />
              <mesh
                name="pyramid4_38"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_38.geometry}
                material={nodes.pyramid4_38.material}
                position={[-4.772, -15.937, 4.263]}
                rotation={[0.8, -0.226, 0.133]}
                scale={[0.75, 14, 1]}
              />
              <mesh
                name="pyramid4_39"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_39.geometry}
                material={nodes.pyramid4_39.material}
                position={[-5.85, 4.444, 1.496]}
                rotation={[0.973, -0.563, 0.572]}
                scale={[0.75, 9, 0.5]}
              />
              <mesh
                name="pyramid4_40"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_40.geometry}
                material={nodes.pyramid4_40.material}
                position={[-2.933, 0, -1.332]}
                rotation={[0, -0.524, 0]}
                scale={[5, 100, 5]}
              />
              <mesh
                name="pyramid4_41"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_41.geometry}
                material={nodes.pyramid4_41.material}
                position={[0.268, -1.595, 0.86]}
                rotation={[0.069, -0.27, -0.758]}
                scale={[2, 12, 0.25]}
              />
            </group>
            <mesh
              name="icosahedron_10"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_10.geometry}
              material={nodes.icosahedron_10.material}
              position={[98.304, 12, -139.68]}
              rotation={[0, 0.524, 0]}
              scale={56}
            />
            <mesh
              name="icosahedron_11"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_11.geometry}
              material={nodes.icosahedron_11.material}
              position={[119.939, 12, -126.315]}
              rotation={[0, 0.524, 0]}
              scale={32}
            />
            <mesh
              name="icosahedron_12"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_12.geometry}
              material={nodes.icosahedron_12.material}
              position={[77.939, 6.5, -126.315]}
              rotation={[0, 0.524, 0]}
              scale={45}
            />
            <group name="d80165ad-832c-4700-9cd1-23497a76b732" position={[126.795, 5.5, -140.17]}>
              <mesh
                name="truncatedPyramid4_55"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_55.geometry}
                material={nodes.truncatedPyramid4_55.material}
                position={[0, -15, 0]}
                rotation={[-Math.PI, 0, 0]}
                scale={30}
              />
              <mesh
                name="pyramid4_42"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_42.geometry}
                material={nodes.pyramid4_42.material}
                position={[0, -25, 0]}
                rotation={[-Math.PI, 0, 0]}
                scale={[15, 5, 15]}
              />
              <mesh
                name="truncatedPyramid4_56"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_56.geometry}
                material={nodes.truncatedPyramid4_56.material}
                position={[0, 15, 0]}
                scale={30}
              />
              <mesh
                name="box_333"
                castShadow
                receiveShadow
                geometry={nodes.box_333.geometry}
                material={nodes.box_333.material}
                scale={[30, 15, 30]}
              />
              <mesh
                name="pyramid4_43"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_43.geometry}
                material={nodes.pyramid4_43.material}
                position={[0, 25, 0]}
                scale={[15, 5, 15]}
              />
            </group>
            <group name="76d36413-8f68-4886-8c7d-772a7474e888" position={[139.795, 5.5, -111.42]}>
              <mesh
                name="box_334"
                castShadow
                receiveShadow
                geometry={nodes.box_334.geometry}
                material={nodes.box_334.material}
                position={[0.5, 15, 0.75]}
                scale={[2, 1, 1]}
              />
              <mesh
                name="icosahedron_13"
                castShadow
                receiveShadow
                geometry={nodes.icosahedron_13.geometry}
                material={nodes.icosahedron_13.material}
                position={[1, 39.5, -0.75]}
                scale={8}
              />
              <mesh
                name="icosahedron_14"
                castShadow
                receiveShadow
                geometry={nodes.icosahedron_14.geometry}
                material={nodes.icosahedron_14.material}
                position={[0, 25.5, 1.25]}
                scale={24}
              />
              <mesh
                name="icosahedron_15"
                castShadow
                receiveShadow
                geometry={nodes.icosahedron_15.geometry}
                material={nodes.icosahedron_15.material}
                position={[0.5, 35, -6.25]}
                scale={14}
              />
              <mesh
                name="icosahedron_16"
                castShadow
                receiveShadow
                geometry={nodes.icosahedron_16.geometry}
                material={nodes.icosahedron_16.material}
                position={[1, 29, -6.25]}
                scale={9}
              />
              <mesh
                name="icosahedron_17"
                castShadow
                receiveShadow
                geometry={nodes.icosahedron_17.geometry}
                material={nodes.icosahedron_17.material}
                position={[0.5, 30, 0.75]}
                scale={12}
              />
              <mesh
                name="box_335"
                castShadow
                receiveShadow
                geometry={nodes.box_335.geometry}
                material={nodes.box_335.material}
                position={[0.5, 4, 0.75]}
                scale={[2, 1, 1]}
              />
              <mesh
                name="truncatedPyramid4_57"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_57.geometry}
                material={nodes.truncatedPyramid4_57.material}
                position={[0.5, 8.5, 1.25]}
                scale={[2, 84, 2]}
              />
              <mesh
                name="box_336"
                castShadow
                receiveShadow
                geometry={nodes.box_336.geometry}
                material={nodes.box_336.material}
                position={[0.5, 12, 1.25]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="box_337"
                castShadow
                receiveShadow
                geometry={nodes.box_337.geometry}
                material={nodes.box_337.material}
                position={[0.5, 0, 1.25]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="box_338"
                castShadow
                receiveShadow
                geometry={nodes.box_338.geometry}
                material={nodes.box_338.material}
                position={[0.5, -36.5, 0.75]}
                scale={[2, 6, 1]}
              />
              <mesh
                name="box_339"
                castShadow
                receiveShadow
                geometry={nodes.box_339.geometry}
                material={nodes.box_339.material}
                position={[0.5, -30, 0.75]}
                scale={[2, 5, 1]}
              />
              <mesh
                name="box_340"
                castShadow
                receiveShadow
                geometry={nodes.box_340.geometry}
                material={nodes.box_340.material}
                position={[0.5, -33, 0.75]}
                scale={[2, 1, 1]}
              />
              <mesh
                name="box_341"
                castShadow
                receiveShadow
                geometry={nodes.box_341.geometry}
                material={nodes.box_341.material}
                position={[0.5, -24, 0.75]}
                scale={[2, 5, 1]}
              />
              <mesh
                name="box_342"
                castShadow
                receiveShadow
                geometry={nodes.box_342.geometry}
                material={nodes.box_342.material}
                position={[0.5, -17, 0.75]}
                scale={[2, 7, 1]}
              />
              <mesh
                name="box_343"
                castShadow
                receiveShadow
                geometry={nodes.box_343.geometry}
                material={nodes.box_343.material}
                position={[0.5, -21, 0.75]}
                scale={[2, 1, 1]}
              />
              <mesh
                name="box_344"
                castShadow
                receiveShadow
                geometry={nodes.box_344.geometry}
                material={nodes.box_344.material}
                position={[0.5, -7, 0.75]}
                scale={[2, 1, 1]}
              />
              <mesh
                name="box_345"
                castShadow
                receiveShadow
                geometry={nodes.box_345.geometry}
                material={nodes.box_345.material}
                position={[0.5, -33.5, 1.75]}
                scale={[2, 12, 1]}
              />
              <mesh
                name="box_346"
                castShadow
                receiveShadow
                geometry={nodes.box_346.geometry}
                material={nodes.box_346.material}
                position={[0.5, -20, 1.75]}
                scale={[2, 13, 1]}
              />
              <mesh
                name="box_347"
                castShadow
                receiveShadow
                geometry={nodes.box_347.geometry}
                material={nodes.box_347.material}
                position={[0.5, -13, 1.25]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="box_348"
                castShadow
                receiveShadow
                geometry={nodes.box_348.geometry}
                material={nodes.box_348.material}
                position={[0.5, -27, 1.25]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="box_349"
                castShadow
                receiveShadow
                geometry={nodes.box_349.geometry}
                material={nodes.box_349.material}
                position={[0.5, -40, 1.25]}
                scale={[2, 1, 2]}
              />
              <mesh
                name="truncatedPyramid4_58"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_58.geometry}
                material={nodes.truncatedPyramid4_58.material}
                position={[0.5, -42, 1.25]}
                scale={[4, 6, 4]}
              />
            </group>
            <mesh
              name="sphere_6"
              castShadow
              receiveShadow
              geometry={nodes.sphere_6.geometry}
              material={nodes.sphere_6.material}
              position={[133.795, -20, -64.17]}
              scale={4}
            />
            <mesh
              name="sphere_7"
              castShadow
              receiveShadow
              geometry={nodes.sphere_7.geometry}
              material={nodes.sphere_7.material}
              position={[137.295, -20, -67.17]}
              scale={3}
            />
            <mesh
              name="sphere_8"
              castShadow
              receiveShadow
              geometry={nodes.sphere_8.geometry}
              material={nodes.sphere_8.material}
              position={[131.795, -20, -71.17]}
              scale={4}
            />
            <mesh
              name="cylinder_7"
              castShadow
              receiveShadow
              geometry={nodes.cylinder_7.geometry}
              material={nodes.cylinder_7.material}
              position={[134.295, -22, -63.42]}
              scale={[0.75, 4, 0.75]}
            />
            <mesh
              name="cylinder_8"
              castShadow
              receiveShadow
              geometry={nodes.cylinder_8.geometry}
              material={nodes.cylinder_8.material}
              position={[131.545, -22, -71.42]}
              scale={[0.75, 4, 0.75]}
            />
            <mesh
              name="cylinder_9"
              castShadow
              receiveShadow
              geometry={nodes.cylinder_9.geometry}
              material={nodes.cylinder_9.material}
              position={[136.295, -22, -67.92]}
              scale={[0.75, 4, 0.75]}
            />
            <mesh
              name="pyramid4_44"
              castShadow
              receiveShadow
              geometry={nodes.pyramid4_44.geometry}
              material={nodes.pyramid4_44.material}
              position={[118.795, -24, -118.17]}
              scale={[56, 20, 76]}
            />
            <mesh
              name="icosahedron_18"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_18.geometry}
              material={nodes.icosahedron_18.material}
              position={[-60.205, -81, -127.17]}
              scale={4}
            />
            <mesh
              name="icosahedron_19"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_19.geometry}
              material={nodes.icosahedron_19.material}
              position={[-120.705, 13.5, -99.17]}
              scale={78}
            />
            <mesh
              name="truncatedPyramid4_59"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_59.geometry}
              material={nodes.truncatedPyramid4_59.material}
              position={[-99.81, -13, -112.145]}
              rotation={[0, 1.309, 0]}
              scale={[80, 40, 88]}
            />
            <mesh
              name="icosahedron_20"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_20.geometry}
              material={nodes.icosahedron_20.material}
              position={[-86.705, -23.5, -118.67]}
              rotation={[-Math.PI / 4, 0, 0]}
              scale={54}
            />
            <mesh
              name="icosahedron_21"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_21.geometry}
              material={nodes.icosahedron_21.material}
              position={[-52.68, -36.43, -118.67]}
              rotation={[-2.094, -Math.PI / 4, -1.571]}
              scale={46}
            />
            <mesh
              name="icosahedron_22"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_22.geometry}
              material={nodes.icosahedron_22.material}
              position={[-104.205, -22.5, -73.67]}
              scale={13}
            />
            <mesh
              name="icosahedron_23"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_23.geometry}
              material={nodes.icosahedron_23.material}
              position={[-90.705, -22.5, -73.67]}
              scale={24}
            />
            <mesh
              name="icosahedron_24"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_24.geometry}
              material={nodes.icosahedron_24.material}
              position={[-71.6, -22.5, -73.565]}
              rotation={[0, Math.PI / 3, 0]}
              scale={24}
            />
            <mesh
              name="icosahedron_25"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_25.geometry}
              material={nodes.icosahedron_25.material}
              position={[-63.705, -22.5, -86.67]}
              scale={13}
            />
            <mesh
              name="cornerPyramid4_27"
              castShadow
              receiveShadow
              geometry={nodes.cornerPyramid4_27.geometry}
              material={nodes.cornerPyramid4_27.material}
              position={[-125.205, -28, -50.67]}
              scale={[92, 34, 211]}
            />
            <group name="860e7c62-7b47-4b0e-a0cc-aa20fc5dd64b" position={[-158.81, 4, -31.045]}>
              <mesh
                name="pyramid4_45"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_45.geometry}
                material={nodes.pyramid4_45.material}
                position={[-2.828, -11.855, -2.3]}
                rotation={[0, -1.047, 0.524]}
                scale={[1, 9, 1]}
              />
              <mesh
                name="pyramid4_46"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_46.geometry}
                material={nodes.pyramid4_46.material}
                position={[1.137, -9.165, 1.223]}
                rotation={[0.069, -0.27, -0.758]}
                scale={[1, 9, 1]}
              />
              <mesh
                name="pyramid4_47"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_47.geometry}
                material={nodes.pyramid4_47.material}
                position={[-2.606, -16.485, 2.337]}
                rotation={[0.8, -0.226, 0.133]}
                scale={[1, 6, 1]}
              />
              <mesh
                name="pyramid4_48"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_48.geometry}
                material={nodes.pyramid4_48.material}
                position={[-2.245, 2.861, 1.712]}
                rotation={[0.8, -0.226, 0.133]}
                scale={[0.75, 5, 1]}
              />
              <mesh
                name="pyramid4_49"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_49.geometry}
                material={nodes.pyramid4_49.material}
                position={[-3.03, 12.019, 0.987]}
                rotation={[0.973, -0.563, 0.572]}
                scale={[0.75, 5, 0.5]}
              />
              <mesh
                name="pyramid4_50"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_50.geometry}
                material={nodes.pyramid4_50.material}
                position={[-1.986, 0, -0.226]}
                rotation={[0, -0.523, 0]}
                scale={[2, 56, 2]}
              />
              <mesh
                name="pyramid4_51"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_51.geometry}
                material={nodes.pyramid4_51.material}
                position={[-0.993, 17.101, 0.008]}
                rotation={[0.069, -0.27, -0.758]}
                scale={[0.25, 3, 0.25]}
              />
            </group>
            <group name="78984463-b954-4fe6-8372-a19a6a9ed1b6_1" position={[-138.605, 27, -30.488]}>
              <mesh
                name="pyramid4_52"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_52.geometry}
                material={nodes.pyramid4_52.material}
                position={[-4.38, 16.14, -4.214]}
                rotation={[0, -1.047, 0.524]}
                scale={[2, 17, 1]}
              />
              <mesh
                name="pyramid4_53"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_53.geometry}
                material={nodes.pyramid4_53.material}
                position={[-0.142, -5.239, -6.048]}
                rotation={[0.246, 1.293, -1.013]}
                scale={[2, 17, 0.25]}
              />
              <mesh
                name="pyramid4_54"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_54.geometry}
                material={nodes.pyramid4_54.material}
                position={[-0.725, -23.02, -4.391]}
                rotation={[0.246, 1.293, -1.013]}
                scale={[2, 12, 0.25]}
              />
              <mesh
                name="pyramid4_55"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_55.geometry}
                material={nodes.pyramid4_55.material}
                position={[-6.607, -30.14, -4.214]}
                rotation={[0, -1.047, 0.524]}
                scale={[2, 17, 1]}
              />
              <mesh
                name="pyramid4_56"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_56.geometry}
                material={nodes.pyramid4_56.material}
                position={[2.137, -42.15, 1.274]}
                rotation={[0.069, -0.27, -0.758]}
                scale={[2, 20, 1]}
              />
              <mesh
                name="pyramid4_57"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_57.geometry}
                material={nodes.pyramid4_57.material}
                position={[-5.348, -34.638, 5.829]}
                rotation={[0.8, -0.226, 0.133]}
                scale={[3, 17, 1]}
              />
              <mesh
                name="pyramid4_58"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_58.geometry}
                material={nodes.pyramid4_58.material}
                position={[-4.772, -15.937, 4.263]}
                rotation={[0.8, -0.226, 0.133]}
                scale={[0.75, 14, 1]}
              />
              <mesh
                name="pyramid4_59"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_59.geometry}
                material={nodes.pyramid4_59.material}
                position={[-5.85, 4.444, 1.496]}
                rotation={[0.973, -0.563, 0.572]}
                scale={[0.75, 9, 0.5]}
              />
              <mesh
                name="pyramid4_60"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_60.geometry}
                material={nodes.pyramid4_60.material}
                position={[-2.933, 0, -1.332]}
                rotation={[0, -0.524, 0]}
                scale={[5, 100, 5]}
              />
              <mesh
                name="pyramid4_61"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_61.geometry}
                material={nodes.pyramid4_61.material}
                position={[0.268, -1.595, 0.86]}
                rotation={[0.069, -0.27, -0.758]}
                scale={[2, 12, 0.25]}
              />
            </group>
            <group
              name="d80165ad-832c-4700-9cd1-23497a76b732_1"
              position={[-154.205, -21.5, -73.17]}>
              <mesh
                name="truncatedPyramid4_60"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_60.geometry}
                material={nodes.truncatedPyramid4_60.material}
                position={[0, -15, 0]}
                rotation={[-Math.PI, 0, 0]}
                scale={30}
              />
              <mesh
                name="pyramid4_62"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_62.geometry}
                material={nodes.pyramid4_62.material}
                position={[0, -25, 0]}
                rotation={[-Math.PI, 0, 0]}
                scale={[15, 5, 15]}
              />
              <mesh
                name="truncatedPyramid4_61"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_61.geometry}
                material={nodes.truncatedPyramid4_61.material}
                position={[0, 15, 0]}
                scale={30}
              />
              <mesh
                name="box_350"
                castShadow
                receiveShadow
                geometry={nodes.box_350.geometry}
                material={nodes.box_350.material}
                scale={[30, 15, 30]}
              />
              <mesh
                name="pyramid4_63"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_63.geometry}
                material={nodes.pyramid4_63.material}
                position={[0, 25, 0]}
                scale={[15, 5, 15]}
              />
            </group>
            <group
              name="c67573e7-b998-42d9-b823-f29f0d3105ba"
              position={[-129.205, 8, -59.17]}
              rotation={[0, 0.524, 0]}>
              <mesh
                name="truncatedPyramid4_62"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_62.geometry}
                material={nodes.truncatedPyramid4_62.material}
                position={[0, -7.5, 0]}
                scale={[40, 94, 40]}
              />
              <mesh
                name="pyramid4_64"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_64.geometry}
                material={nodes.pyramid4_64.material}
                position={[0, 23.5, 0.5]}
                scale={[20, 15, 19]}
              />
            </group>
            <mesh
              name="truncatedPyramid4_63"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_63.geometry}
              material={nodes.truncatedPyramid4_63.material}
              position={[-108.927, -10, -62.402]}
              rotation={[0, Math.PI / 6, 0]}
              scale={[34, 52, 36]}
            />
            <group
              name="352e4a0a-a05f-48a0-abc6-e232f7928df9"
              position={[-119.925, -11.5, -45.17]}
              rotation={[0, 0.262, 0]}>
              <mesh
                name="truncatedPyramid4_64"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_64.geometry}
                material={nodes.truncatedPyramid4_64.material}
                position={[0, -2.5, 0]}
                scale={[34, 36, 36]}
              />
              <mesh
                name="pyramid4_65"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_65.geometry}
                material={nodes.pyramid4_65.material}
                position={[-0.03, 9, 0]}
                scale={[17, 5, 18]}
              />
            </group>
            <group
              name="352e4a0a-a05f-48a0-abc6-e232f7928df9_1"
              position={[-98.285, -9.5, -128.955]}
              rotation={[0, 0.262, 0]}>
              <mesh
                name="truncatedPyramid4_65"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_65.geometry}
                material={nodes.truncatedPyramid4_65.material}
                position={[0, -2.5, 0]}
                scale={[34, 36, 36]}
              />
              <mesh
                name="pyramid4_66"
                castShadow
                receiveShadow
                geometry={nodes.pyramid4_66.geometry}
                material={nodes.pyramid4_66.material}
                position={[-0.03, 9, 0]}
                scale={[17, 5, 18]}
              />
            </group>
            <mesh
              name="icosahedron_26"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_26.geometry}
              material={nodes.icosahedron_26.material}
              position={[-120.705, 58, -99.17]}
              rotation={[0, Math.PI / 6, 0]}
              scale={48}
            />
            <group
              name="db3d4561-9f3b-4336-80ad-21a03d997f08"
              position={[-146.695, -21.5, -133.17]}
              rotation={[0, 0.524, 0]}>
              <mesh
                name="box_351"
                castShadow
                receiveShadow
                geometry={nodes.box_351.geometry}
                material={nodes.box_351.material}
                scale={[30, 15, 30]}
              />
              <mesh
                name="truncatedPyramid4_66"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_66.geometry}
                material={nodes.truncatedPyramid4_66.material}
                position={[0, 15, 0]}
                scale={30}
              />
              <mesh
                name="truncatedPyramid4_67"
                castShadow
                receiveShadow
                geometry={nodes.truncatedPyramid4_67.geometry}
                material={nodes.truncatedPyramid4_67.material}
                position={[0, -15, 0]}
                rotation={[-Math.PI, 0, 0]}
                scale={30}
              />
            </group>
            <mesh
              name="truncatedPyramid4_68"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_68.geometry}
              material={nodes.truncatedPyramid4_68.material}
              position={[-98.525, -5.5, -125.85]}
              rotation={[0, Math.PI / 6, 0]}
              scale={[40, 94, 40]}
            />
            <mesh
              name="truncatedPyramid4_69"
              castShadow
              receiveShadow
              geometry={nodes.truncatedPyramid4_69.geometry}
              material={nodes.truncatedPyramid4_69.material}
              position={[-62.705, -19.5, -110.81]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[70, 14, 61]}
            />
            <group name="f06b71fb-5de2-4cba-86df-26a311933d96" position={[-25.527, -17, -96.756]}>
              <group name="d9990d33-eb79-4469-9e7d-f708dff2f3bd" position={[0.271, 0, -0.413]}>
                <mesh
                  name="cylinder_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.cylinder_10.geometry}
                  material={nodes.cylinder_10.material}
                  position={[0, 0.5, 0]}
                  scale={[9, 11, 9]}
                />
                <mesh
                  name="annulus_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.annulus_4.geometry}
                  material={nodes.annulus_4.material}
                  scale={12}
                />
              </group>
              <mesh
                name="cornerPyramid3_139"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_139.geometry}
                material={nodes.cornerPyramid3_139.material}
                position={[6.066, 0, 2.086]}
                rotation={[0, 0.262, 0]}
                scale={[1, 12, 1]}
              />
              <mesh
                name="cornerPyramid3_140"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_140.geometry}
                material={nodes.cornerPyramid3_140.material}
                position={[4.771, 0, -5.413]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2, 12, 2]}
              />
              <mesh
                name="cornerPyramid3_141"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_141.geometry}
                material={nodes.cornerPyramid3_141.material}
                position={[-4.229, 0, -5.413]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[2, 12, 2]}
              />
              <mesh
                name="cornerPyramid3_142"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_142.geometry}
                material={nodes.cornerPyramid3_142.material}
                position={[0.476, 0, -6.708]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={[1, 12, 1]}
              />
              <mesh
                name="cornerPyramid3_143"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_143.geometry}
                material={nodes.cornerPyramid3_143.material}
                position={[0.356, 0, 6.001]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={[2, 12, 2]}
              />
              <mesh
                name="cornerPyramid3_144"
                castShadow
                receiveShadow
                geometry={nodes.cornerPyramid3_144.geometry}
                material={nodes.cornerPyramid3_144.material}
                position={[-5.454, 0, 2.361]}
                rotation={[Math.PI, -1.309, Math.PI]}
                scale={[2, 12, 2]}
              />
            </group>
            <group name="83aa88e3-f508-4968-b094-b2609928e4af" position={[9.579, -14, -114.291]}>
              <group name="239a613b-ee6e-41fe-bd8e-8aac748211f6" position={[0.065, 1, -0.707]}>
                <mesh
                  name="cylinder_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.cylinder_11.geometry}
                  material={nodes.cylinder_11.material}
                  scale={[7, 8, 7]}
                />
                <mesh
                  name="annulus_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.annulus_5.geometry}
                  material={nodes.annulus_5.material}
                  scale={[9, 10, 9]}
                />
              </group>
              <group name="a4c7959e-7e0d-4876-ab45-e38fb97380d7">
                <mesh
                  name="cornerPyramid3_145"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_145.geometry}
                  material={nodes.cornerPyramid3_145.material}
                  position={[4.724, 1, 1.792]}
                  rotation={[0, 0.262, 0]}
                  scale={[1, 10, 1]}
                />
                <mesh
                  name="cornerPyramid3_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_146.geometry}
                  material={nodes.cornerPyramid3_146.material}
                  position={[3.114, 1, -4.708]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[2, 10, 2]}
                />
                <mesh
                  name="cornerPyramid3_147"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_147.geometry}
                  material={nodes.cornerPyramid3_147.material}
                  position={[0.27, 1, -5.413]}
                  rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                  scale={[1, 10, 1]}
                />
                <mesh
                  name="cornerPyramid3_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_148.geometry}
                  material={nodes.cornerPyramid3_148.material}
                  position={[-2.886, 1, -4.708]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[2, 10, 2]}
                />
                <mesh
                  name="cornerPyramid3_149"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_149.geometry}
                  material={nodes.cornerPyramid3_149.material}
                  position={[-4.111, 0, 1.516]}
                  rotation={[Math.PI, -1.309, Math.PI]}
                  scale={[2, 12, 2]}
                />
                <mesh
                  name="cornerPyramid3_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_150.geometry}
                  material={nodes.cornerPyramid3_150.material}
                  position={[0.15, 1, 4.706]}
                  rotation={[0, -Math.PI / 4, 0]}
                  scale={[2, 10, 2]}
                />
              </group>
            </group>
            <group
              name="83aa88e3-f508-4968-b094-b2609928e4af_1"
              position={[-23.091, -21, -141.462]}>
              <group name="239a613b-ee6e-41fe-bd8e-8aac748211f6_1" position={[0.065, 1, -0.707]}>
                <mesh
                  name="cylinder_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.cylinder_12.geometry}
                  material={nodes.cylinder_12.material}
                  scale={[7, 8, 7]}
                />
                <mesh
                  name="annulus_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.annulus_6.geometry}
                  material={nodes.annulus_6.material}
                  scale={[9, 10, 9]}
                />
              </group>
              <group name="a4c7959e-7e0d-4876-ab45-e38fb97380d7_1">
                <mesh
                  name="cornerPyramid3_151"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_151.geometry}
                  material={nodes.cornerPyramid3_151.material}
                  position={[4.724, 1, 1.792]}
                  rotation={[0, 0.262, 0]}
                  scale={[1, 10, 1]}
                />
                <mesh
                  name="cornerPyramid3_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_152.geometry}
                  material={nodes.cornerPyramid3_152.material}
                  position={[3.114, 1, -4.708]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[2, 10, 2]}
                />
                <mesh
                  name="cornerPyramid3_153"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_153.geometry}
                  material={nodes.cornerPyramid3_153.material}
                  position={[0.27, 1, -5.413]}
                  rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                  scale={[1, 10, 1]}
                />
                <mesh
                  name="cornerPyramid3_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_154.geometry}
                  material={nodes.cornerPyramid3_154.material}
                  position={[-2.886, 1, -4.708]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[2, 10, 2]}
                />
                <mesh
                  name="cornerPyramid3_155"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_155.geometry}
                  material={nodes.cornerPyramid3_155.material}
                  position={[-4.111, 0, 1.516]}
                  rotation={[Math.PI, -1.309, Math.PI]}
                  scale={[2, 12, 2]}
                />
                <mesh
                  name="cornerPyramid3_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.cornerPyramid3_156.geometry}
                  material={nodes.cornerPyramid3_156.material}
                  position={[0.15, 1, 4.706]}
                  rotation={[0, -Math.PI / 4, 0]}
                  scale={[2, 10, 2]}
                />
              </group>
            </group>
            <group
              name="9dee16b2-9e2b-421d-a8af-fdf6807828f6"
              position={[-17.331, -10.35, -97.19]}
              rotation={[Math.PI / 2, 0.524, Math.PI]}>
              <group
                name="a7d609b8-8fdc-409c-b07b-a1baa59755d8"
                position={[0.941, 0, -1.79]}
                rotation={[0, -0.523, 0]}>
                <mesh
                  name="wedge_482"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_482.geometry}
                  material={nodes.wedge_482.material}
                  position={[1.5, 0, 1.25]}
                  rotation={[Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.5, 1, 0.5]}
                />
                <mesh
                  name="wedge_483"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_483.geometry}
                  material={nodes.wedge_483.material}
                  position={[1.5, 0, -1.25]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.5, 1, 0.5]}
                />
                <mesh
                  name="box_352"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_352.geometry}
                  material={nodes.box_352.material}
                  position={[1.5, 0, 0]}
                  scale={[1, 0.5, 2]}
                />
                <mesh
                  name="wedge_484"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_484.geometry}
                  material={nodes.wedge_484.material}
                  position={[-0.5, 0, 0.875]}
                  rotation={[Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.25, 3, 0.5]}
                />
                <mesh
                  name="box_353"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_353.geometry}
                  material={nodes.box_353.material}
                  position={[-0.5, 0, 0.625]}
                  scale={[3, 0.5, 0.25]}
                />
                <mesh
                  name="box_354"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_354.geometry}
                  material={nodes.box_354.material}
                  position={[-0.5, 0, 0.25]}
                  scale={[3, 0.5, 0.5]}
                />
                <mesh
                  name="box_355"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_355.geometry}
                  material={nodes.box_355.material}
                  position={[-0.5, 0, -0.25]}
                  scale={[3, 0.5, 0.5]}
                />
                <mesh
                  name="box_356"
                  castShadow
                  receiveShadow
                  geometry={nodes.box_356.geometry}
                  material={nodes.box_356.material}
                  position={[-0.5, 0, -0.625]}
                  scale={[3, 0.5, 0.25]}
                />
                <mesh
                  name="wedge_485"
                  castShadow
                  receiveShadow
                  geometry={nodes.wedge_485.geometry}
                  material={nodes.wedge_485.material}
                  position={[-0.5, 0, -0.875]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.25, 3, 0.5]}
                />
              </group>
              <mesh
                name="box_357"
                castShadow
                receiveShadow
                geometry={nodes.box_357.geometry}
                material={nodes.box_357.material}
                position={[0.383, 0, -1.823]}
                rotation={[0, -0.523, 0]}
                scale={[3, 0.5, 0.5]}
              />
              <mesh
                name="box_358"
                castShadow
                receiveShadow
                geometry={nodes.box_358.geometry}
                material={nodes.box_358.material}
                position={[-0.958, -0.125, 0]}
                rotation={[0, -0.523, 0]}
                scale={[0.5, 0.25, 8.998]}
              />
            </group>
            <group name="a39f6da1-d7e7-4262-bc6f-e647e4a32d64" position={[-56.705, -9.5, -100.67]}>
              <mesh
                name="cylinder_13"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_13.geometry}
                material={nodes.cylinder_13.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[4, 15, 4]}
              />
              <mesh
                name="annulus_7"
                castShadow
                receiveShadow
                geometry={nodes.annulus_7.geometry}
                material={nodes.annulus_7.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[5, 17, 5]}
              />
            </group>
            <group
              name="a39f6da1-d7e7-4262-bc6f-e647e4a32d64_1"
              position={[-58.705, -13.5, -100.67]}>
              <mesh
                name="cylinder_14"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_14.geometry}
                material={nodes.cylinder_14.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[4, 15, 4]}
              />
              <mesh
                name="annulus_8"
                castShadow
                receiveShadow
                geometry={nodes.annulus_8.geometry}
                material={nodes.annulus_8.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[5, 17, 5]}
              />
            </group>
            <group
              name="a39f6da1-d7e7-4262-bc6f-e647e4a32d64_2"
              position={[-54.705, -13.5, -100.67]}>
              <mesh
                name="cylinder_15"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_15.geometry}
                material={nodes.cylinder_15.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[4, 15, 4]}
              />
              <mesh
                name="annulus_9"
                castShadow
                receiveShadow
                geometry={nodes.annulus_9.geometry}
                material={nodes.annulus_9.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[5, 17, 5]}
              />
            </group>
            <group
              name="a39f6da1-d7e7-4262-bc6f-e647e4a32d64_3"
              position={[-62.705, -13.5, -100.67]}>
              <mesh
                name="cylinder_16"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_16.geometry}
                material={nodes.cylinder_16.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[4, 15, 4]}
              />
              <mesh
                name="annulus_10"
                castShadow
                receiveShadow
                geometry={nodes.annulus_10.geometry}
                material={nodes.annulus_10.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[5, 17, 5]}
              />
            </group>
            <group
              name="a39f6da1-d7e7-4262-bc6f-e647e4a32d64_4"
              position={[-58.705, -5.5, -100.67]}>
              <mesh
                name="cylinder_17"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_17.geometry}
                material={nodes.cylinder_17.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[4, 15, 4]}
              />
              <mesh
                name="annulus_11"
                castShadow
                receiveShadow
                geometry={nodes.annulus_11.geometry}
                material={nodes.annulus_11.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[5, 17, 5]}
              />
            </group>
            <group
              name="a39f6da1-d7e7-4262-bc6f-e647e4a32d64_5"
              position={[-60.705, -9.5, -100.67]}>
              <mesh
                name="cylinder_18"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_18.geometry}
                material={nodes.cylinder_18.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[4, 15, 4]}
              />
              <mesh
                name="annulus_12"
                castShadow
                receiveShadow
                geometry={nodes.annulus_12.geometry}
                material={nodes.annulus_12.material}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[5, 17, 5]}
              />
            </group>
            <mesh
              name="icosahedron_27"
              castShadow
              receiveShadow
              geometry={nodes.icosahedron_27.geometry}
              material={nodes.icosahedron_27.material}
              position={[-98.205, -22.5, -49.17]}
              scale={24}
            />
            <group name="ef766de3-d23a-4a43-9154-244dd9634e3a" position={[-67.425, -20.5, -55.95]}>
              <mesh
                name="quarterCylinder_4"
                castShadow
                receiveShadow
                geometry={nodes.quarterCylinder_4.geometry}
                material={nodes.quarterCylinder_4.material}
                position={[-1.414, 1, 3.365]}
                rotation={[Math.PI / 2, 0, -2.356]}
                scale={[3, 1, 3]}
              />
              <mesh
                name="annulus_13"
                castShadow
                receiveShadow
                geometry={nodes.annulus_13.geometry}
                material={nodes.annulus_13.material}
                rotation={[-Math.PI, -Math.PI / 4, Math.PI / 2]}
                scale={[5, 17, 5]}
              />
              <mesh
                name="quarterCylinder_5"
                castShadow
                receiveShadow
                geometry={nodes.quarterCylinder_5.geometry}
                material={nodes.quarterCylinder_5.material}
                position={[3.535, 1, -5.635]}
                rotation={[Math.PI / 2, 0, Math.PI / 4]}
                scale={[3, 1, 3]}
              />
              <mesh
                name="cylinder_19"
                castShadow
                receiveShadow
                geometry={nodes.cylinder_19.geometry}
                material={nodes.cylinder_19.material}
                rotation={[-Math.PI, -Math.PI / 4, Math.PI / 2]}
                scale={[4, 15, 4]}
              />
            </group>
            <mesh
              name="cornerPyramid3_157"
              castShadow
              receiveShadow
              geometry={nodes.cornerPyramid3_157.geometry}
              material={nodes.cornerPyramid3_157.material}
              position={[-90.335, -18.5, -107.67]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[97, 9, 153]}
            />
            <mesh
              name="cornerPyramid3_158"
              castShadow
              receiveShadow
              geometry={nodes.cornerPyramid3_158.geometry}
              material={nodes.cornerPyramid3_158.material}
              position={[10.795, -18.5, -88.67]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[135, 9, 276]}
            />
            <mesh
              name="cornerPyramid3_159"
              castShadow
              receiveShadow
              geometry={nodes.cornerPyramid3_159.geometry}
              material={nodes.cornerPyramid3_159.material}
              position={[63.165, -18.5, -107.67]}
              scale={[154, 9, 97]}
            />
            <mesh
              name="cornerPyramid3_160"
              castShadow
              receiveShadow
              geometry={nodes.cornerPyramid3_160.geometry}
              material={nodes.cornerPyramid3_160.material}
              position={[-32.835, -18.5, 102.33]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[123, 9, 276]}
            />
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
  )
}

export default Terreno;