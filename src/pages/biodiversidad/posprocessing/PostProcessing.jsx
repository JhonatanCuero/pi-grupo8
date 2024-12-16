import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const PostProccesing = () => {
    return (
        <EffectComposer>
            <Vignette
                offset={0.2} // vignette offset
                darkness={1.1} // vignette darkness
                eskil={false} // Eskil's vignette technique
                blendFunction={BlendFunction.NORMAL} // blend mode
            />
        </EffectComposer>
    );
};

export default PostProccesing;