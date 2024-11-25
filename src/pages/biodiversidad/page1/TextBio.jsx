import { Text } from "@react-three/drei"

const TextBio = () => {
  return (
    <Text
      position={[1, 6, 0]}
      scale={[-1, 1, 1]}
      color="yellow"
      anchorX="center"
      anchorY="middle"
      characters="abcdefghijklmnopqrstuvwxyz0123456789!"
      font="/fonts/rumble-brave.otf"
    >
      La biodiversidad está en peligro
    </Text>
  )

};

export default TextBio;