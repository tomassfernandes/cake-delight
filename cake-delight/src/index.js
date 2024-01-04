import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./CSS/general.css";
import "./CSS/header-section.css";
import "./CSS/cta-section.css";
import "./CSS/info-section.css";
import "./CSS/shop-section.css";
import "./CSS/best-seller-section.css";
import "./CSS/our-store-section.css";
import "./CSS/coming-soon-section.css";
import "./CSS/footer-section.css";
import "./CSS/cart-section.css";
import "./CSS/queries.css";
import { CartProvider } from "./CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
