import React, { useState } from "react";
import { RigidBody } from "@react-three/rapier";
import TreeForest from "./model-3D/TreeForest";

const ForestScene = () => {
  const [trees, setTrees] = useState([]);

  const addTree = (e) => {
    // Capturar la posición del clic en el piso
    const [x, z] = [e.point.x, e.point.z]; // e.point: coordenadas exactas en el mundo 3D
    setTrees([...trees, { id: trees.length, position: [x, 0, z] }]);
  };

  return (
    <>
      {/* Piso permanente con físicas */}
      <RigidBody type="fixed" colliders="hull">
        <mesh
          rotation={[-Math.PI / 2, 0, 0]} // Orientar el plano horizontalmente
          position={[0, 0, 0]} // Centrar en el origen
          receiveShadow
          onClick={addTree} // Al hacer clic, generar un árbol
        >
          <planeGeometry args={[200, 200]} /> {/* Tamaño del piso */}
          <meshStandardMaterial color="lightgreen" />
        </mesh>
      </RigidBody>

      {/* Generación de árboles */}
      {trees.map((tree) => (
        <TreeForest key={tree.id} position={tree.position} castShadow />
      ))}
    </>
  );
};

export default ForestScene;
