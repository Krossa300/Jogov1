import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasePaginaTemplate from "./componentes/templates/BasePaginaTemplate.tsx";
import BasePaginaMenu from "./componentes/templates/BasePaginaMenu.tsx";
import BasePaginaJogo from "./componentes/templates/BasePaginaJogo.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePaginaTemplate />}>
          <Route element={<BasePaginaMenu />}>
            <Route element={<BasePaginaJogo />}>
              <Route index element={<App />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);