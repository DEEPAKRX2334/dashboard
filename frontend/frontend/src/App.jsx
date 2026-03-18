import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DashboardConfig from "./pages/DashboardConfig";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <Routes>

      {/* Default Route */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/configure" element={<DashboardConfig />} />
      <Route path="/orders" element={<OrdersPage />} />

      {/* Fallback */}
      <Route path="*" element={<h2>Page Not Found</h2>} />

    </Routes>
  );
}

export default App;