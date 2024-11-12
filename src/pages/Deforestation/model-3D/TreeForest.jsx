import { useGLTF } from "@react-three/drei";

const TreeForest = (props) => {
  const { nodes, materials } = useGLTF("models-3d/Forest.glb.glb");
  return (
    <group {...props} dispose={null} castShadow>
      <group position={[-1.877, 0, -1.745]}>
        <group position={[-30.604, 0.15, 0.593]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Mesh_109.geometry}
            material={materials.Bark}
            material-color="saddlebrown"
            castShadow
          />
          <mesh
            geometry={nodes.Mesh_109_1.geometry}
            material={materials.SimpleProceduralLeaf}
            material-color="green"
            castShadow
          />
        </group>
        <mesh
          geometry={nodes.Forest_A.geometry}
          material={materials.Ground}
          position={[-20.008, 0.155, 0.328]}
          receiveShadow
        />
      </group>
    </group>
  );
};

export default TreeForest;

useGLTF.preload("models-3d/Forest.glb.glb");