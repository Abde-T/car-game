import React, { useEffect, useState } from "react";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Scene from "./CM1/Scene";

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
            <button id="w" onClick={Alert}>W</button>
            <div className="cnt">
              <button id="a" onClick={Alert}>A</button>
              <button id="s" onClick={Alert}>S</button>
              <button id="d" onClick={Alert}>D</button>
            </div>
          </div>

          <div className="air_controls ">
            <button id="up" onClick={Alert}>↑</button>
            <div className="cnt">
              <button id="left" onClick={Alert}>←</button>
              <button id="down" onClick={Alert}>↓</button>
              <button id="right" onClick={Alert}>→</button>
            </div>
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
