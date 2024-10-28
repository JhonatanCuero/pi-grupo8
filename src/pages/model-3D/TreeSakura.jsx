import { useGLTF, useTexture } from "@react-three/drei";
//import { useMemo } from "react";
//import { floor } from "three/webgpu";


const TreeSakura = (props) => {
    const {nodes, materials} = useGLTF("models-3d/uploads_files_3829098_SAKURA_2.0.glb")

    
    //const PATH = useMemo(()=> "materials/floor/rocky_terrain_02_", []);
    
    //const floortexture = useTexture({
           // map: PATH + "diff_1k.jpg",
            //displacementMap:PATH + "disp_1k.png",
            //normalMap: PATH + "nor_gl_1k.jpg",
            //roughnessMap: PATH + "rough_1k.jpg",
            //aoMap: PATH + "ao_1k.jpg",
            //alphaMap: PATH + "mask_1k.png"
        //});

    //console.log(floortexture);
    return (
        <group {...props} dispose={null}>
        <group name="Scene" position={[0, -2, 0]} scale={[1, 1, 1]}>
            <mesh name="LEAVES" geometry={nodes.LEAVES.geometry} material={materials.PLANE_BRUNCH}  castShadow receiveShadow />
            <mesh name="SAKURA_TREE" geometry={nodes.SAKURA_TREE.geometry} material={materials.TREE}  castShadow receiveShadow />
            <mesh rotation-x ={Math.PI/2}>
                <boxGeometry args={[2, 2, 0.1]}/>
                <meshStandardMaterial 
                    //map={floortexture.map}
                    //normalMap={floortexture.normalMap}
                    //aoMap={floortexture.aoMap}
                    //roughnessMap={floortexture.roughnessMap}
                    //displacementMap={floortexture.displacementMap}
                    color={"DarkOliveGreen"}
                />

            </mesh>
        </group>
        </group>
    );
}

export default TreeSakura;

useGLTF.preload("models-3d/uploads_files_3829098_SAKURA_2.0.glb");