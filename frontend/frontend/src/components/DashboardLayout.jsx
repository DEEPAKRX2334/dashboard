import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {

  const [collapsed, setCollapsed] = useState(false);

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f4f6fb"
      }}
    >

      <Sidebar collapsed={collapsed} />

      <div style={{ flex: 1 }}>

        <Navbar toggleSidebar={() => setCollapsed(!collapsed)} />

        <div style={{ padding: "30px" }}>
          {children}
        </div>

      </div>

    </div>

  );
}

export default DashboardLayout;