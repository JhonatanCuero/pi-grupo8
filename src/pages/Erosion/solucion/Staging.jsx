import { Environment } from "@react-three/drei"

const Staging = () => {
    return (
        <>
            <Environment
                ground={{
                    height: 20,
                    radius: 3000,
                    scale: 3000,
                }}
                files={"/hdris/sky_2k.hdr"}
                background={true}
            />
        </>
    );
};

export default Staging;