import { useLocation } from "react-router-dom";
import "../components/navbar.css";

export default function Navbar() {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/") return "Dashboard";
    if (location.pathname === "/configure") return "Configure";
    if (location.pathname === "/orders") return "Orders";
  };

  return (
    <div className="navbar">
      <h3>{getTitle()}</h3>
      <div className="profile">👤</div>
    </div>
  );
}