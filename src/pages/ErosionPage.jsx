import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

const PATH = useMemo(() => "materials/floor/erosion", []);

const floorTexture = useTexture({
  map: PATH + "erosion_diff_1k",
  displacementMap: PATH + "erosion_disp_1k",
  normalMap: PATH + "erosion_nor_gl_1k",
  roughnessMap: PATH + "erosion_rough_1k",
  ambientOcclusionMap: PATH + "erosion_ao_1k",
})

console.log(floorTexture);

const ErosionPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Erosión del Suelo</h1>
      <p style={{ color: 'white' }}>
        La erosión del suelo es una problemática bastante grave en el terreno del planeta, ya que implica un desgaste el cual puede ocasionar daños al medio ambiente.
        Es un proceso en el cual se va perdiendo la capa superficial del suelo, que proporciona a las plantas la mayoría de los nutrientes y el agua que necesitan.
        Es la causa de la desertificación y de que algunos suelos se vean agrietados.
      </p>
      <div style={{ width: '100%', height: '600px' }}>
        <Canvas  shadows camera={{ position: [0, 2, 5], fov: 50 }}>
          <OrbitControls enableZoom={true}/>
          <ambientLight/>
          <directionalLight position={[10, 10, 10]} intensity={5}/>
          <mesh rotation-x={Math.PI * 0.5}>
            <boxGeometry args={[2,2,0.1]} />
            <meshToonMaterial
              map={floorTexture.map}
              roughnessMap={floorTexture.roughnessMap}
              normalMap={floorTexture.normalMap}
              ambientOcclusionMap={floorTexture.ambientOcclusionMap}
            />
          </mesh>
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1}
          />
          
        </Canvas>
      </div>
    </div>
  );
};

export default ErosionPage;
