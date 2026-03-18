import { Link } from "react-router-dom";
import "../components/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Halleyx</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/configure">Configure</Link>
        <Link to="/orders">Orders</Link>
      </nav>
    </div>
  );
}