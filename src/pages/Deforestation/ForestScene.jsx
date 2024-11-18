import React, { useState } from "react";
import TreeForest from "./model-3D/TreeForest";

const ForestScene = () => {
  const [trees, setTrees] = useState([]);
  const spacing = 20;

  const addTree = () => {
    const x = Math.floor(Math.random() * 10 - 5) * spacing;  
    const z = Math.floor(Math.random() * 10 - 5) * spacing;
    setTrees([...trees, { id: trees.length, position: [x, 0, z] }]);
  };

  return (
    <>
      
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        onClick={addTree}
      >
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="lightgreen" />
      </mesh>

     
      {trees.map((tree) => (
        <TreeForest key={tree.id} position={tree.position} castShadow />
      ))}
    </>
  );
};

export default ForestScene;

