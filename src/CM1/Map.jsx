import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Map(props) {


  let map = useLoader(
    GLTFLoader,
    //"Modular City Environment" (https://skfb.ly/outpr) by Spicy_EJ is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
    process.env.PUBLIC_URL + "/models/modular_city_environment/scene.gltf"
  ).scene;

  useEffect(() => {
    map.scale.set(5000, 5000, 5000);

}, [map]);

  return (
    <>
      <primitive
        object={map}
        position={[0, 1, 0]}
        rotation={[0,0,0]}
        children-0-castShadow
      />
      
    </>
  );
}
