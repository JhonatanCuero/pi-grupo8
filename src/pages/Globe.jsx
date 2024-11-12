import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Globe = ({ scrollPosition }) => {
    const { nodes, materials } = useGLTF("/models-3d/globe.glb");

    // Calcular la nueva posición en el eje Y en función del scroll (puedes ajustar este valor)
    const objectPosition = scrollPosition * 0.05; // Escalar el movimiento del scroll


    return (
        <group dispose={null}>
            <group name="Scene">
                <group name="Sketchfab_model">
                    <group name="Testing2objcleaner">
                        <mesh
                            name="Object_10"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_10.geometry}
                            material={materials.Oak_Leaves}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_11"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_11.geometry}
                            material={materials.Oak_Leaves}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_12"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_12.geometry}
                            material={materials.Oak_Leaves}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_13"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_13.geometry}
                            material={materials.Oak_Leaves}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_14"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_14.geometry}
                            material={materials.TallGrass}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_2.geometry}
                            material={materials.Dirt}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_3.geometry}
                            material={materials.GrassSide}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.GrassTop}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5.geometry}
                            material={materials.Log_Top}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.material}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_7"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_7.geometry}
                            material={materials.Oak_Leaves}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_8"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_8.geometry}
                            material={materials.Oak_Leaves}
                            position={[0, objectPosition, 0]}
                        />
                        <mesh
                            name="Object_9"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_9.geometry}
                            material={materials.Oak_Leaves}
                            position={[0, objectPosition, 0]}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
};

export default Globe;