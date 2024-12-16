import { useGLTF, useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import { RepeatWrapping } from 'three/webgpu';

const Maquina = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/Machine.glb')

  const PATH = useMemo(() => "/models-3d/materials/floor/erosion/concrete_", []);

  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    aoMap: PATH + "ao_1k.jpg",
  });

  Object.keys(floorTexture).map((key)=>{
  floorTexture[key].wrapS = floorTexture[key].wrapT = RepeatWrapping;
  floorTexture[key].repeat.set(4,4);
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene"
      position={[20, -9, 0]} scale={[3, 3, 3]}
      >
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.wheels}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['Material.004']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Torus"
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={materials.wheels}
          position={[0.014, 2.215, 3.218]}
        />
        <group name="Sketchfab_model" position={[0, 1.707, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode">
              <group name="wheel_low001_19" />
            </group>
          </group>
        </group>
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.004']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane007"
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane008"
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane009"
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane010"
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Plane018"
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials['Material.004']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.001']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['Material.006']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.004']}
          position={[0, 1.707, 0]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.wheels}
          position={[0, 1.707, 0]}
        />
        <group name="Cylinder121" position={[0, 1.707, 0]}>
          <mesh
            name="Cylinder123"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder123.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Cylinder123_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder123_1.geometry}
            material={materials['wheels.002']}
          />
        </group>
        <mesh
          name="Cylinder698"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder698.geometry}
          material={materials.wheels}
          position={[0, 1.707, 0]}
        />
      </group>
      <mesh name="floor" rotation-x={Math.PI / 2} rotation-z={Math.PI} position-y={-10} position-x={20} position-z={1} receiveShadow>
          <boxGeometry args={[15, 22, 0.2]}/>
            <meshStandardMaterial 
              map={floorTexture.map}
              normalMap={floorTexture.normalMap}
              aoMap={floorTexture.aoMap}
              roughnessMap={floorTexture.roughnessMap}
              displacementMap={floorTexture.displacementMap}
            />
        </mesh>
    </group>
  )
}

export default Maquina;