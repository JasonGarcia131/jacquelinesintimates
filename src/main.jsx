import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </SidebarProvider>
);
