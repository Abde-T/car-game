import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
 faRepeat,
 faCamera
} from "@fortawesome/free-solid-svg-icons";
library.add(faRepeat,faCamera);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

