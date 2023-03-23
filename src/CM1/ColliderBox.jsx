import { useBox } from "@react-three/cannon";

const debug = false;

export function ColliderBox({ position, scale, rotation }) {
  useBox(() => ({
    args: scale,
    position,
    type: "Static",
    rotation,
    
  }));

  return (
    debug && (
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={scale} />
        <meshBasicMaterial  transparent={true} opacity={1} />
      </mesh>
    )
  );
}
