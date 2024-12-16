import React, { useState } from "react";
import { RigidBody } from "@react-three/rapier";
import TreeForest from "./model-3D/TreeForest";


const GROUND_POSITION = [0, 0, 0];

const ForestScene = () => {
  const [trees, setTrees] = useState([]);

  const addTree = (e) => {
    const [x, z] = [e.point.x, e.point.z];
    setTrees((prevTrees) => [...prevTrees, { id: prevTrees.length, position: [x, 0, z] }]);
  };

  return (
    <>
      
      <RigidBody type="fixed" colliders="hull">
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={GROUND_POSITION} 
          receiveShadow
          onClick={addTree} 
        >
          <planeGeometry args={[200, 200]} />
          <meshStandardMaterial color="lightgreen" />
        </mesh>
      </RigidBody>

      
      {trees.map((tree) => (
        <TreeForest key={tree.id} position={tree.position} castShadow />
      ))}
    </>
  );
};

export default ForestScene;