import { Environment } from "@react-three/drei";
import Tronco from "../models-3d/Tronco";

const Staging = ({ showTronco }) => {
    return (
        <>
            <Environment ground={{
                height: 30,
                radius: 500,
                scale: 500,
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