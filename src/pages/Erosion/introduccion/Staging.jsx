import { Environment, Sky } from "@react-three/drei"

const Staging = () => {
    return (
        <>
            <Environment ground={{
                height: 30,
                radius: 100,
                scale: 100,
            }}
                preset="dawn"
                background={true} />
        </>
    );
};

export default Staging;