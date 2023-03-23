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
    }, 2000);
  }, []);



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

          <div className="mobile_controls">
            <button id="w">W</button>
            <div className="cnt">
              <button id="a">A</button>
              <button id="s">S</button>
              <button id="d">D</button>
            </div>
          </div>

          <div className="air_controls ">
            <button id="up">↑</button>
            <div className="cnt">
              <button id="left">←</button>
              <button id="down">↓</button>
              <button id="right">→</button>
            </div>
          </div>
        </>
      ) : (
        <div className="canvas">
   <div className="hexagon">
      <div className="row">
         <div className="arrow up outer outer-18"></div>
         <div className="arrow down outer outer-17"></div>
         <div className="arrow up outer outer-16"></div>
         <div className="arrow down outer outer-15"></div>
         <div className="arrow up outer outer-14"></div>
      </div>
      <div className="row">
         <div className="arrow up outer outer-1"></div>
         <div className="arrow down outer outer-2"></div>
         <div className="arrow up inner inner-6"></div>
         <div className="arrow down inner inner-5"></div>
         <div className="arrow up inner inner-4"></div>
         <div className="arrow down outer outer-13"></div>
         <div className="arrow up outer outer-12"></div>
      </div>
      <div className="row">
         <div className="arrow down outer outer-3"></div>
         <div className="arrow up outer outer-4"></div>
         <div className="arrow down inner inner-1"></div>
         <div className="arrow up inner inner-2"></div>
         <div className="arrow down inner inner-3"></div>
         <div className="arrow up outer outer-11"></div>
         <div className="arrow down outer outer-10"></div>
      </div>
      <div className="row">
         <div className="arrow down outer outer-5"></div>
         <div className="arrow up outer outer-6"></div>
         <div className="arrow down outer outer-7"></div>
         <div className="arrow up outer outer-8"></div>
         <div className="arrow down outer outer-9"></div>
      </div>
   </div>
</div>
      )}
    </>
  );
}

export default App;
