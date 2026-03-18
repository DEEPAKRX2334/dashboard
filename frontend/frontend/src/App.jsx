import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardConfig from "./pages/DashboardConfig";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/configure" element={<DashboardConfig />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;