import { useGLTF, useTexture } from "@react-three/drei"
import { useEffect, useMemo, useState } from "react";
import { RepeatWrapping } from "three/webgpu";
import "../Html3d.css";


const Lake = (props) => {
    const { nodes, materials } = useGLTF("models-3d/factory.glb");

    const [lakeColor, setLakeColor] = useState("#ffffff"); // Color inicial
    
    
    const PATH = useMemo(() => "/models-3d/materials/floor/water_002_", []);

    const floorTexture = useTexture({
        map: PATH + "COLOR.jpg",
        //displacementMap: PATH + "DISP.png",
        normalMap: PATH + "NORM.jpg",
        roughnessMap: PATH + "ROUGH.jpg",
        aoMap: PATH + "OCC.jpg",
    });
    
    Object.keys(floorTexture).map((key) => {
        floorTexture[key].wrapS = floorTexture[key].wrapT = RepeatWrapping;
        floorTexture[key].repeat.set(4, 4);
    });

    // useEffect para manejar los eventos del teclado
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "q") { // Cambia 'c' a cualquier tecla que prefieras
                // Cambiar el color del lago al presionar la tecla 'c'
                setLakeColor(lakeColor === "#ffffff" ? "#019530" : "#ffffff"); // Alterna entre blanco y azul
            }
        };

        // Agregar el evento de escucha
        window.addEventListener("keydown", handleKeyDown);

        // Limpiar el evento al desmontar el componente
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lakeColor]);

    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <group
                    name="Cube"
                    position={[0.849, 0.041, 0.856]}
                    rotation={[-Math.PI, 0.218, -Math.PI]}
                    scale={[0.036, 0.039, 0.058]}>
                    <mesh
                        name="Cube003"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003.geometry}
                        material={materials['Material.001']}
                    />
                    <mesh
                        name="Cube003_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003_1.geometry}
                        material={materials['Material.002']}
                    />
                    <mesh
                        name="Cube003_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003_2.geometry}
                        material={materials['Material.003']}
                    />
                    <mesh
                        name="Cube003_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003_3.geometry}
                        material={materials['Material.004']}
                    />
                </group>
                <mesh
                    name="Cylinder"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder.geometry}
                    material={materials['Material.001']}
                    position={[0.892, 0.057, 0.817]}
                    rotation={[-Math.PI, 0.218, -Math.PI]}
                    scale={[0.005, 0.059, 0.009]}
                />
                <mesh
                    name="Cylinder001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials['Material.001']}
                    position={[0.888, 0.057, 0.838]}
                    rotation={[-Math.PI, 0.218, -Math.PI]}
                    scale={[0.005, 0.059, 0.009]}
                />
                <mesh
                    name="Cylinder002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002.geometry}
                    material={materials['Material.001']}
                    position={[0.885, 0.057, 0.859]}
                    rotation={[-Math.PI, 0.218, -Math.PI]}
                    scale={[0.005, 0.059, 0.009]}
                />
                <group
                    name="Cylinder003"
                    position={[0.886, 0.081, 0.899]}
                    rotation={[-Math.PI, 0.218, -Math.PI]}
                    scale={[0.01, 0.08, 0.016]}>
                    <mesh
                        name="Cylinder004"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004.geometry}
                        material={materials['Material.005']}
                    />
                    <mesh
                        name="Cylinder004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_1.geometry}
                        material={materials['Material.006']}
                    />
                </group>
                <mesh
                    name="Landscape002_Landscape002_NormalOnly_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Landscape002_Landscape002_NormalOnly_0.geometry}
                    material={materials['Landscape.002_NormalOnly']}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.239}
                />
                <mesh name="floor" rotation-x={Math.PI / 2} position-y={-0.02} receiveShadow>
                    <boxGeometry args={[2.3, 2.3, 0.01]} />
                    <meshStandardMaterial
                        color={lakeColor}
                        map={floorTexture.map}
                        normalMap={floorTexture.normalMap}
                        aoMap={floorTexture.aoMap}
                        roughnessMap={floorTexture.roughnessMap}
                        //displacementMap={floorTexture.displacementMap}
                    />
                </mesh>
            </group>
        </group>
    );
};

export default Lake;
useGLTF.preload("models-3d/factory.glb");