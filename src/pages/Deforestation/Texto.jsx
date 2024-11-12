import { Html, Text } from "@react-three/drei";

const Texto = () => {
    return(
        <>
            <Text position={[0, 5, 2]}> DALE CLICK PARA REPLANTAR LOS ARBOLES </Text>
            <Html
                occlude
                center
                distanceFactor={15}
                transform
                position={[0, 3, 2]}
                style={{
                    color: "white",
                    fontSize : "14pt",
                    textAlign : "center",
                }}
            >
                <h1>
                    ¿Qué estas esperando para cuidar nuestros bosques?
                </h1>
            </Html>
        </>
    );
};

export default Texto;