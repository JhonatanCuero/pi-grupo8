import { Center, Html, Text, Text3D } from "@react-three/drei";


const Texto = () => {
    return(
        <>
            <Center top left position={[1, 9, 0]}>
                <Text3D
                    font={"/fonts/Super-Morning_Regular.json"}
                    bevelEnabled
                    bevelSize={0.02}
                    bevelThickness={0.01}
                    height={0.5}
                    lineHeight={0.75}
                    letterSpacing={0.05}
                    size={0.9}
                >
                    {'Replanta un arbol para que nuestro amigo aun tenga donde vivir'}
                    <meshNormalMaterial />
                </Text3D>
            </Center>

            <Text position={[0, 8, 2]}> DALE CLICK PARA REPLANTAR LOS ARBOLES </Text>
            <Html
                occlude
                center
                distanceFactor={15}
                transform
                position={[0, 5, 2]}
                style={{
                    color: "white",
                    fontSize : "14pt",
                    textAlign : "center",
                }}
            >
                <h1>
                    Tambien puedes colaborar con mas cosas como reciclar, haciendo ganaderia sostenible, protege los bosques y crea conciencia no te quedes callado.
                </h1>
            </Html>
        </>
    );
};

export default Texto;