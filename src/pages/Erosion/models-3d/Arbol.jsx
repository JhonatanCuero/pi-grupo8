import { useGLTF, useTexture } from '@react-three/drei'
import { useMemo, useState } from 'react'
import { RepeatWrapping } from 'three/webgpu';

const Arbol = (props) => {

  const [showArbol, setShowArbol] = useState(true);

  const onHandleArbol = () => setShowArbol(!showArbol)
  
  const { nodes, materials } = useGLTF('/models-3d/Maple.glb')

  const PATH = useMemo(() => "/models-3d/materials/floor/erosion/erosion_", []);

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
    showArbol &&
    <group {...props} dispose={null}
    onClick={onHandleArbol}>
      <group name="Scene"
      position={[5, -10, 35]} scale={[3, 3, 3]}>
        <group name="SM_Maple1_MZRT" rotation={[Math.PI / 2, 0, 0]} scale={0.06}>
          <mesh
            name="palmtreebark1_0002"
            castShadow
            receiveShadow
            geometry={nodes.palmtreebark1_0002.geometry}
            material={materials.Maple1_MZRT_a}
          />
          <mesh
            name="palmtreebark1_0002_1"
            castShadow
            receiveShadow
            geometry={nodes.palmtreebark1_0002_1.geometry}
            material={materials.Maple1_MZRT_b}
          />
        </group>
      </group>
      <mesh name="floor" rotation-x={Math.PI / 2} rotation-z={Math.PI} position-y={-10} position-x={5} position-z={35} receiveShadow>
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
export default Arbol;