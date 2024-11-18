const Lights = () => {
    return (
      <>
        <ambientLight color={"#07595D"} intensity={0.5} />
        <directionalLight
          position={[10, 10, 6]}
          intensity={1} 
          castShadow
        />
        <pointLight
          color={"#CC4749"}
          position={[-2, 4, -5]}
          intensity={1}
        />
      </>
    );
  };
  
  export default Lights; 