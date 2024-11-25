import { Text } from "@react-three/drei";

const WelcomeText = () => {
  return (
    <>

      <Text
        position={[3, 13, 10]}
        color={"magenta"}
        anchorX={"center"}
        anchorY={"bottom"}
        font="/fonts/Winter.ttf"
        // fontSize={2}
      >
        {" "}
        ¡Presiona Z para mandar a volar el signo de STOP!
        {" "}
      </Text>

      <Text
        position={[3, 10, 10]}
        color={"black"}
        anchorX={"center"}
        anchorY={"bottom"}
        font="/fonts/Winter.ttf"
        // fontSize={2}
      >
        {" "}
        Afortunadamente, la erosion puede ser tanto evitada como solucionada.
        {" "}
      </Text>
      <Text
        position={[3, 8.5, 10]}
        color={"black"}
        anchorX={"center"}
        anchorY={"bottom"}
        font="/fonts/Winter.ttf"
        // fontSize={2}
      >
        {" "}
        Esto puede ocurrir de varias maneras:
        {" "}
      </Text>
      <Text
        position={[3, 7, 10]}
        color={"black"}
        anchorX={"center"}
        anchorY={"bottom"}
        font="/fonts/Winter.ttf"
        // fontSize={2}
      >
        {" "}
        - Manteniendo los suelos humedos y con vegetacion
        {" "}
      </Text>
      <Text
        position={[3, 5.5, 10]}
        color={"black"}
        anchorX={"center"}
        anchorY={"bottom"}
        font="/fonts/Winter.ttf"
        // fontSize={2}
      >
        {" "}
        - Agregar materia organica a la tierra, como lo puede ser el abono y el compostaje
        {" "}
      </Text>
      <Text
        position={[3, 4, 10]}
        color={"black"}
        anchorX={"center"}
        anchorY={"bottom"}
        font="/fonts/Winter.ttf"
        // fontSize={2}
      >
        {" "}
        - Restringir el paso de vehiculos a una sola entrada para evitar diversas erosiones
        {" "}
      </Text>
    </>
  );
};

export default WelcomeText;