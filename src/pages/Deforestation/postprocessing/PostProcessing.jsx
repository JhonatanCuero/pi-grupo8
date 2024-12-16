import { EffectComposer, Pixelation } from "@react-three/postprocessing";

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Pixelation granularity={2.5} /> {/* Ajusta la propiedad granularity según necesites */}
    </EffectComposer>
  );
};

export default PostProcessing;