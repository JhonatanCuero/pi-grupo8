import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const Video = (props) => {
    const texture = useVideoTexture("/videos/videoErosion.mp4", {
        muted: true,
        loop: true,
        start: true
    });

const [pause, setPause] = useState(false);

const handleVideo = useCallback(
    (e) => {
        e.stopPropagation();
        pause ? texture.image.play() : texture.image.pause();
        setPause(!pause);
    },
);


    return (
        <mesh {...props} onClick={handleVideo}>
            <planeGeometry args={[2, 1]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
    );
};

export default Video;