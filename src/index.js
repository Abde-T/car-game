import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Scene from "./CM1/Scene";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas id="canvas">
      <Physics broadphase="SAP" gravity={[0, -6.6, 0]}>
        <Scene />
      </Physics>
    </Canvas>

    <div className="controls ">
      <p>press w a s d to move</p>
      <p>press k to swap camera</p>
      <p>press r to reset</p>
      <p>press arrows for flips</p>
    </div>

    {/*<div className="mobile_controls">
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
</div>*/}
  </>
);
