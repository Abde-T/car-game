import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Car } from "./Car";
import { Ground } from "./Ground";
import { Track } from "./Track";
import { Map } from "./Map";
import * as THREE from 'three';



function Scene(props) {

  const listener = new THREE.AudioListener();
  const sound = new THREE.Audio( listener );

const audioLoader = new THREE.AudioLoader();
{/*audioLoader.load( process.env.PUBLIC_URL + 'Audio/atmosphere.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 1 );
	sound.stop();
});*/}


  const [thirdPerson, setThirdPerson] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([-250, 150, -150]);
  useEffect(() => {
    function keydownHandler(e) {
      if (e.key == "k") {
        if (thirdPerson)
          setCameraPosition([-320, 150, -150 + Math.random() * 0.01]);
        setThirdPerson(!thirdPerson);
      }
    }

    window.addEventListener("keydown", keydownHandler);
    return () => window.removeEventListener("keydown", keydownHandler);
  }, [thirdPerson]);
  return (
    <Suspense fallback={null}>
      <Environment
        files={process.env.PUBLIC_URL + "/textures/hdr.hdr"}
        background={"both"}
      />
      <PerspectiveCamera makeDefault position={cameraPosition} fov={60} />
      {!thirdPerson && <OrbitControls target={[50, 0, 150]} />}
     
      <Stats/>
      <Track />
      <Map/>
      <Ground />
      <Car thirdPerson={thirdPerson} />
    </Suspense>
  );
}

export default Scene;
