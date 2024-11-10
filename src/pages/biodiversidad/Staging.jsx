import { Environment } from "@react-three/drei"

const Staging = () => {
    return (
        <>
            <Environment ground={{
                height: 30,
                radius: 100,
                scale: 100,
            }}
                preset="forest" 
                //files={"/hdris/gray_2k.hdr"}
                background={true} />
        </>
    );
};

export default Staging;