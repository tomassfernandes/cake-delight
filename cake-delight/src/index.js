import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./CSS/general.css";
import "./CSS/header-section.css";
import "./CSS/cta-section.css";
import "./CSS/info-section.css";
import "./CSS/shop-section.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);