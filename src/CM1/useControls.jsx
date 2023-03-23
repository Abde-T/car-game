import { useEffect, useState } from "react";

export const useControls = (vehicleApi, chassisApi) => {
  const btnW = document.getElementById("w")


  
  let [controls, setControls] = useState({
   
  });
  
  useEffect(() => {
    const keyDownPressHandler = (e) => {
      setControls((controls) => ({ 
        ...controls, 
        [e.key.toLowerCase()]: true 
      }));
    }
    
    const keyUpPressHandler = (e) => {
      setControls((controls) => ({ 
        ...controls, 
        [e.key.toLowerCase()]: false 
      }));
    }
    
  


    window.addEventListener("keydown", keyDownPressHandler);
    window.addEventListener("keyup", keyUpPressHandler);
    return () => {


      window.addEventListener("keydown", keyDownPressHandler);
      window.removeEventListener("keyup", keyUpPressHandler);
    }
  }, []);
  

  
  useEffect(() => {
    if (controls.w || controls.btnW ) {
      vehicleApi.applyEngineForce(1500, 2);
      vehicleApi.applyEngineForce(1500, 3);
   {/*   audioLoader.load( process.env.PUBLIC_URL + 'Audio/car.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( true );
        sound.setVolume( 0.2 );
        sound.stop();
      });*/}
    } else if (controls.s) {
      vehicleApi.applyEngineForce(-1000, 2);
      vehicleApi.applyEngineForce(-1000, 3);
      
    } else {
      vehicleApi.applyEngineForce(0, 0);
      vehicleApi.applyEngineForce(0, 1);
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
    }

    if (controls.a) {
      vehicleApi.setSteeringValue(0.55, 2);
      vehicleApi.setSteeringValue(0.55, 3);
      vehicleApi.setSteeringValue(-0.1, 0);
      vehicleApi.setSteeringValue(-0.1, 1);
    } else if (controls.d) {
      vehicleApi.setSteeringValue(-0.55, 2);
      vehicleApi.setSteeringValue(-0.55, 3);
      vehicleApi.setSteeringValue(0.1, 0);
      vehicleApi.setSteeringValue(0.1, 1);
    } else {
      for(let i = 0; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }

    if (controls.arrowdown)  chassisApi.applyLocalImpulse([0, -5, 0], [0, 0, +20]);
    if (controls.arrowup)    chassisApi.applyLocalImpulse([0, -5, 0], [0, 0, -20]);
    if (controls.arrowleft)  chassisApi.applyLocalImpulse([0, -5, 0], [-20, 0, 0]);
    if (controls.arrowright) chassisApi.applyLocalImpulse([0, -5, 0], [+20, 0, 0]);

    if (controls.r) {
      chassisApi.position.set(-90.5, 0, 25);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
      chassisApi.rotation.set(0, 1.6, 0);
    }

  }, [controls, vehicleApi, chassisApi]);

  return controls;
}