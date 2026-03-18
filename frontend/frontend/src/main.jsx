import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom"; // ✅ ADD THIS
import { DashboardProvider } from "./context/DashboardContext"; // keep your context

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>   {/* ✅ FIX HERE */}

      <DashboardProvider>
        <App />
      </DashboardProvider>

    </BrowserRouter>

  </React.StrictMode>
);