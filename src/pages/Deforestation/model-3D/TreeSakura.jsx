import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";

const TreeSakura = (props) => {
    const { nodes, materials } = useGLTF("models-3d/uploads_files_3829098_SAKURA_2.0.glb");

    const PATH = useMemo(() => "models-3d/materials/floor/rocky_terrain_02_", []);

    const floortexture = useTexture({
        map: PATH + "diff_1k.jpg",
        displacementMap: PATH + "disp_1k.png",
        normalMap: PATH + "nor_gl_1k.jpg",
        roughnessMap: PATH + "rough_1k.jpg",
        aoMap: PATH + "ao_1k.jpg",
        alphaMap: PATH + "mask_1k.png",
    });

    console.log(floortexture);

    return (
        <group {...props} dispose={null}>
            {/* Luces */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
            <pointLight position={[-5, 5, 5]} intensity={1} color={"#FFDDC1"} />
            
            {/* Modelo del árbol */}
            <group name="Scene" position={[0, -2, 0]} scale={[1, 1, 1]}>
                <mesh
                    name="LEAVES"
                    geometry={nodes.LEAVES.geometry}
                    material={materials.PLANE_BRUNCH}
                    castShadow
                    receiveShadow
                />
                <mesh
                    name="SAKURA_TREE"
                    geometry={nodes.SAKURA_TREE.geometry}
                    material={materials.TREE}
                    castShadow
                    receiveShadow
                />


                <mesh
                    rotation-x={Math.PI / 2}
                    rotation-z={Math.PI}
                    position={[0, -0.05, 0]}  
                    receiveShadow
                >
                    <boxGeometry args={[2, 2, 0.1]} />
                    <meshStandardMaterial
                    map={floortexture.map}
                    normalMap={floortexture.normalMap}
                    aoMap={floortexture.aoMap}
                    roughnessMap={floortexture.roughnessMap}
                    displacementMap={floortexture.displacementMap}
                    displacementScale={0.02}  
                    roughness={1}  
                />
                </mesh>
            </group>
        </group>
    );
};

export default TreeSakura;

useGLTF.preload("models-3d/uploads_files_3829098_SAKURA_2.0.glb");
