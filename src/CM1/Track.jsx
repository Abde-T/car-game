import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { ColliderBox } from "./ColliderBox";

export function Track(props) {
  

    const track = useLoader(
      GLTFLoader,
      //"Low poly race track" (https://skfb.ly/ooYNR) by Quarks Studios is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
      '/models/low_poly_race_track/scene.gltf'    
      )



  return (
    <>
     
     <primitive object={track.scene} scale={[0.4,0.4,0.4]} position={[-275, 0, -290]} children-0-castShadow />       
  
     <ColliderBox position={[-282, 5, -224.7]} scale={[20, 5, 2]} rotation={[0,0,0.5]}/>
     <ColliderBox position={[-282, 5, -236.1]} scale={[20, 5, 2]} rotation={[0,0,0.5]}/>
     <ColliderBox position={[-212.5, 5, -236.7]} scale={[20, 5, 2]} rotation={[0,0,-0.5]}/>
     <ColliderBox position={[-212.5, 5, -224.1]} scale={[20, 5, 2]} rotation={[0,0,-0.5]}/>

     <ColliderBox position={[-268, 0, -230.7]} scale={[3, 10, 5.5]} rotation={[0,0,0]}/>
     <ColliderBox position={[-224.5, 0, -230.7]} scale={[3, 10, 5.5]} rotation={[0,0,0]}/>


     <ColliderBox position={[-245, 10, -236.7]} scale={[55, 2, 2]} rotation={[0,0,0]}/>
     <ColliderBox position={[-245, 10, -224.1]} scale={[55, 2, 2]} rotation={[0,0,0]}/>
     <ColliderBox position={[-245.8, 8.5, -230.1]} scale={[57, 1, 10]} rotation={[0,0,0]}/>

     <ColliderBox position={[-281, 4.6, -230.7]} scale={[15, 10, 2]} rotation={[1.57,Math.PI / 6.5,0]}/>
     <ColliderBox position={[-211, 4.6, -230.7]} scale={[15, 10, 2]} rotation={[1.57,-Math.PI / 6.5,0]}/>


    <ColliderBox position={[-250, 2, -159.7]} scale={[15, 10, 2]} rotation={[1.6,Math.PI / 6,0]}/>
    <ColliderBox position={[-209.5, 2, -159.7]} scale={[15, 10, 2]} rotation={[1.6,-Math.PI / 6,0]}/>

    <ColliderBox position={[-299, 0, -101]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-299, 0, -51]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-299, 0, -1]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-299, 0, 49]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-299, 0, 99]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-299, 0, 149]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-224, 0, 199]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-150, 0, 199]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-248, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-198, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-126, 0, 249]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-76, 0, 299]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-26, 0, 299]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[25, 0, 299]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[75, 0, 299]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[125, 0, 299]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[199, 0, 275]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>


    <ColliderBox position={[-76, 0, 200]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[175, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[125, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[75, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[25, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-1, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-25, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-75, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-100, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[250, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[250, 0, 125]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    
    <ColliderBox position={[200, 0, 50]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
   
    <ColliderBox position={[175, 0, 75]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[175, 0, 50]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[175, 0, 25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[175, 0, 0]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[175, 0, -25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[175, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[125, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[75, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[25, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-78, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-25, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-100, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-100, 0, 0]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-100, 0, 50]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-100, 0, 150]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-50, 0, 50]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-50, 0, 75]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-75, 0, 75]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-25, 0, 75]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-0, 0, 75]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[25, 0, 75]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-50, 0, -25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-75, 0, -25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-25, 0, -25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[0, 0, -25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[25, 0, -25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-150, 0, -25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-150, 0, -75]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-175, 0, -75]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-175, 0, -50]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-175, 0, -25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-225, 0, -50]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-225, 0, -75]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-225, 0, -25]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-225, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-175, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-150, 0, -100]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-150, 5, -150]} scale={[1, 50, 2.5]} rotation={[0,0,0]}/>
    <ColliderBox position={[-150, 0, -250]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-100, 0, -175]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-50, 0, 50]} scale={[1, 5, 2.5]} rotation={[0,0,0]}/>

    <ColliderBox position={[-25, 0, 25]} scale={[25, 25, 25]} rotation={[0,0,0]}/>
    <ColliderBox position={[-225, 0, 125]} scale={[25, 25, 25]} rotation={[0,0,0]}/>

    <ColliderBox position={[-175, 0, 75]} scale={[40, 25, 140]} rotation={[0,0,0]}/>

    <ColliderBox position={[100, 0, 25]} scale={[100, 25, 100]} rotation={[0,0,0]}/>
    <ColliderBox position={[-50, 0, -200]} scale={[40, 25, 100]} rotation={[0,0,0]}/>
    <ColliderBox position={[125, 0, -200]} scale={[100, 25, 100]} rotation={[0,0,0]}/>

    <ColliderBox position={[275, 0, -25]} scale={[50, 25, 250]} rotation={[0,0,0]}/>

    <ColliderBox position={[275, 0, 150]} scale={[50, 25, 50]} rotation={[0,0,0]}/>
    <ColliderBox position={[255, 0, 250]} scale={[100, 25, 100]} rotation={[0,0,0]}/>

    <ColliderBox position={[50, 0, 225]} scale={[200, 25, 50]} rotation={[0,0,0]} />

    <ColliderBox position={[-200, -0, 25]} scale={[122, 2, 273]} rotation={[0,0,0]} />
    <ColliderBox position={[75, -0, 25]} scale={[280, 2, 273]} rotation={[0,0,0]} />
    <ColliderBox position={[-72, -0, -50]} scale={[80, 2, 125]} rotation={[0,0,0]} />
    <ColliderBox position={[-72, -0, 100]} scale={[80, 2, 125]} rotation={[0,0,0]} />

    <ColliderBox position={[-50, -0, -200]} scale={[122, 2, 125]} rotation={[0,0,0]} />
    <ColliderBox position={[150, -0, -200]} scale={[220, 2, 125]} rotation={[0,0,0]} />

    <ColliderBox position={[270, -0, -22]} scale={[60, 2, 480]} rotation={[0,0,0]} />

    <ColliderBox position={[200, -0, 245]} scale={[20, 2, 110]} rotation={[0,0,0]} />
    <ColliderBox position={[50, -0, 225]} scale={[225, 2, 70]} rotation={[0,0,0]} />
    <ColliderBox position={[30, -0, 295]} scale={[265, 2, 20]} rotation={[0,0,0]} />
    <ColliderBox position={[-79, -0, 199]} scale={[62, 2, 20]} rotation={[0,0,0]} />

    <ColliderBox position={[-120, -0, 248]} scale={[65, 2, 20]} rotation={[0,0,0]} />
    <ColliderBox position={[-220, -0, 238]} scale={[165, 2, 100]} rotation={[0,0,0]} />

    <ColliderBox position={[-296, -0, 30]} scale={[20, 2, 360]} rotation={[0,0,0]} />
    <ColliderBox position={[-285, -0, -260]} scale={[300, 2, 250]} rotation={[0,0,0]} />
    </>
  )
  }