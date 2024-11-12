import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { RepeatWrapping } from "three/webgpu";

const Tronco = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/TreeStump.glb')

    const PATH = useMemo(() => "/models-3d/materials/floor/erosion/erosion_", []);

    const floorTexture = useTexture({
        map: PATH + "diff_1k.jpg",
        displacementMap: PATH + "disp_1k.png",
        normalMap: PATH + "nor_gl_1k.jpg",
        roughnessMap: PATH + "rough_1k.jpg",
        aoMap: PATH + "ao_1k.jpg",
    });

  return (
    <group {...props} dispose={null}>
        <group position={[5, -8, 30]} >
            <mesh
            scale={[15, 15, 15]}
            castShadow
            receiveShadow
            geometry={nodes.Stump001_1k.geometry}
            material={materials['Default OBJ']}
            rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh name="floor" rotation-x={Math.PI / 2} rotation-z={Math.PI} position-y={-2} receiveShadow>
            <boxGeometry args={[20, 20, 1]}/>
            <meshStandardMaterial 
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            aoMap={floorTexture.aoMap}
            roughnessMap={floorTexture.roughnessMap}
            displacementMap={floorTexture.displacementMap}
            />
            </mesh>
      </group>
    </group>
  )
}
export default Tronco;