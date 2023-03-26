import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "./useControls";
import { useWheels } from "./useWheels";
import { WheelDebug } from "./WheelDebug";



export function Car({ thirdPerson }) {
  let mesh = useLoader(
    GLTFLoader,
    //"1996 Toyota MR2 W20" (https://skfb.ly/owVXW) by _Sheep19 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
    process.env.PUBLIC_URL + "/models/toyota/scene.gltf"
  ).scene;

  const position = [-90.5, 0, 25];
  const rotation = [0,1.6,0];
  const width = 4.5;
  const height = 0.1;
  const front = 5.55;
  const wheelRadius = 1.5;



  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisApi] = useBox(
    () => ({
      allowSleep: false,
      args: chassisBodyArgs,
      mass: 150,
      position,
      rotation,
      
    }),
    useRef(null)
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);
  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,

    }),
    useRef(null)
  );

  useControls(vehicleApi, chassisApi);




  useFrame((state) => {
    if (!thirdPerson) return;

    let position = new Vector3(0, 0, 0);
    position.setFromMatrixPosition(chassisBody.current.matrixWorld);

    let quaternion = new Quaternion(0, 0, 0, 0);
    quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);

    let wDir = new Vector3(0, 0, -1);
    wDir.applyQuaternion(quaternion);
    wDir.normalize();

    let cameraPosition = position
      .clone()
      .add(wDir.clone().multiplyScalar(-25).add(new Vector3(2, 8.3, 2)));

    wDir.add(new Vector3(0, 2, 0));

    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(position);
  });

  useEffect(() => {
    mesh.scale.set(5, 5, 5);
    mesh.rotation.set(0,-1.6,0)
    mesh.children[0].position.set(-10.6, 1.3, 0.35);
  }, [mesh]);

  return (
    <group ref={vehicle} name="vehicle">
      <group ref={chassisBody} name="chassisBody">
        <primitive
          object={mesh}
          rotation-y={Math.PI}
          position={[0, -9, 53]}
        />
      </group>
      <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
    </group>
  );
}
