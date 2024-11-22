import { Cloud, Environment } from "@react-three/drei"

const StagingSky = ({ showCloud }) => {
    return (
        <>
            <Environment
                ground={{
                    height: 20,
                    radius: 100,
                    scale: 100,
                }}
                files={"/hdris/sky_2k.hdr"}
                background={true}
            />
            {showCloud && (
                <Cloud
                    seed={5}
                    scale={0.05}
                    volume={15}
                    color="darkgray"
                    fade={100}
                    bounds={[10, 1, 2]}
                    position={[0.8, 0.5, 0.9]}
                    opacity={30}
                    growth={1}
                    speed={0.5}
                    concentrate={"inside"}
                />
            )}
        </>
    );
};

export default StagingSky;