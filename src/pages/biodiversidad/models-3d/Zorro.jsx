import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { RepeatWrapping } from "three/webgpu";

const Zorro = (props) => {
    const {nodes, materials} = useGLTF("/models-3d/foxy.glb");

    const PATH = useMemo(()=> "/models-3d/materials/floor/forrest_ground_01_", []);
    
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
            <group name="Scene">
                <group
                    name="Fox"
                    position={[0.1, 1.8, 0]} scale={[0.4, 0.4, 0.3]}>
                    <mesh
                        name="Cylinder001"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001.geometry}
                        material={materials['Orange.001']}
                    />
                    <mesh
                        name="Cylinder001_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_1.geometry}
                        material={materials['White.001']}
                    />
                    <mesh name="floor" rotation-x={Math.PI / 2} rotation-z={Math.PI} position-y={-5} receiveShadow>
                        <boxGeometry args={[50, 70, 0.1]}/>
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
        </group>
    );
}

export default Zorro;