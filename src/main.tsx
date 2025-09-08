import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalheMapa from "./mapa/DetalheMapa.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/map/:x/:y/:texto" element={<DetalheMapa/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);