import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { RepeatWrapping } from "three/webgpu";

const Suelo = (props) => {
    const {nodes, materials} = useGLTF("/models-3d/ground.glb");

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
        <group {...props} dispose={null}>
            <group name="Scene">
                <group 
                    name="high_poly"
                    position={[0.1, 1.8, 0]} scale={[0.4, 0.4, 0.3]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.high_poly.geometry}
                        material={materials.Material_0}
                        scale={20}
 
                    />
                    <mesh name="floor" rotation-x={Math.PI / 2} rotation-z={Math.PI} position-y={-2.6} receiveShadow>
                    <boxGeometry args={[15, 20, 0.1]}/>
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

export default Suelo;