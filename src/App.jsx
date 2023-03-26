import React, { useEffect, useState } from "react";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Scene from "./CM1/Scene";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1700);
  }, []);


  const Alert = () => {
    alert("Feature not implemented; please play on desktop/laptop to enjoy the whole experience");
   
  }

  return (
    <>
      <Canvas id="canvas">
        <Physics broadphase="SAP" gravity={[0, -6.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>

      {loading ? (
        <>
          <div className="controls display_non">
            <p>press w a s d to move</p>
            <p>press k to swap camera</p>
            <p>press r to reset</p>
            <p>press arrows for flips</p>
          </div>

          <div className="mobile_controls" >
            <button id="w" >W</button>
            <div className="cnt">
              <button id="a" >A</button>
              <button id="s" >S</button>
              <button id="d" >D</button>
            </div>
          </div>

          <div className="air_controls ">
            <button id="up" >↑</button>
            <div className="cnt">
              <button id="left" >←</button>
              <button id="down" >↓</button>
              <button id="right" >→</button>
            </div>
          </div>

        <div className="cntrls">
          <FontAwesomeIcon icon='repeat' id='reset' className="icon" />
          <FontAwesomeIcon icon='camera' id='camera' className="icon"/>

        </div>
        </>
      ) : (
        <div className="ring">Loading
        <span></span>
      </div>
      )}
    </>
  );
}

export default App;
