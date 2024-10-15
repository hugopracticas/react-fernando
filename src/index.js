import React from "react";
import ReactDOM from "react-dom/client";
import HeroesApp from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
