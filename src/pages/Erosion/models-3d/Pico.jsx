import { useGLTF, useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import { RepeatWrapping } from 'three/webgpu';

const Pico = (props) => {

  const { nodes, materials } = useGLTF('/models-3d/pickAxe.gltf')

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
      position={[-10, -9, 0]} scale={[1, 1, 0.9]}
      rotation-x={Math.PI / 2} rotation-y={Math.PI / 2}>
        <mesh
          name="pickaxe-head-LP001"
          castShadow
          receiveShadow
          geometry={nodes['pickaxe-head-LP001'].geometry}
          material={materials.pickaxe}
        />
        <mesh
          name="pickaxe-handle-LP001"
          castShadow
          receiveShadow
          geometry={nodes['pickaxe-handle-LP001'].geometry}
          material={materials.pickaxe}
        />
      </group>

        <mesh name="floor" rotation-x={Math.PI / 2} rotation-z={Math.PI} position-y={-10} position-x={-10} position-z={-3} receiveShadow>
          <boxGeometry args={[15, 15, 0.2]}/>
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

export default Pico;