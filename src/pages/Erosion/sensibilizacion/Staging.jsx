import { Environment } from "@react-three/drei";
import Tronco from "../models-3d/Tronco";

const Staging = ({ showTronco }) => {
    return (
        <>
            <Environment ground={{
                height: 30,
                radius: 100,
                scale: 100,
            }}
                preset="park"
                background={true} />

            {showTronco && (
                <Tronco></Tronco>
            )}
        </>
    );
};

export default Staging;