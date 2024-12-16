import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const Video = (props) => {
    const [pause, setPause] = useState(false);
    
    const texture = useVideoTexture("/videos/video-biodiversity.mp4", {
        muted: true,
        loop: true,
        start: true
    });

    const handleVideo = useCallback(
        (e) => {
            e.stopPropagation();
            pause ? texture.image.play() : texture.image.pause();
            setPause(!pause);
        },
        [pause, setPause, texture]
    );

    return (
        <mesh {...props} onClick={handleVideo}>
            <planeGeometry args={[0.3, 0.2]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
    );
};

export default Video;