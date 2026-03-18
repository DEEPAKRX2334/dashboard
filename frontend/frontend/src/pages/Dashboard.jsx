import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

export default function Dashboard() {

  const [kpi, setKpi] = useState({ revenue: 0, orders: 0, users: 0 });
  const [orders, setOrders] = useState([]);
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    loadData();
    loadLayout();
  }, []);

  // ================= KPI + ORDERS =================
  const loadData = async () => {
    try {
      const kpiRes = await API.get("/dashboard/kpi");
      setKpi(kpiRes?.data || {});
    } catch {
      setKpi({ revenue: 0, orders: 0, users: 0 });
    }

    try {
      const orderRes = await API.get("/orders");
      setOrders(Array.isArray(orderRes.data) ? orderRes.data : []);
    } catch {
      setOrders([]);
    }
  };

  // ================= FIXED LAYOUT =================
  const loadLayout = async () => {
    try {
      const res = await API.get("/dashboard/layout");

      console.log("LAYOUT RESPONSE 👉", res.data);

      let layoutJson = null;

      // 🔥 GET layoutJson
      if (res.data?.layoutJson) {
        layoutJson = res.data.layoutJson;
      } else if (res.data?.data?.layoutJson) {
        layoutJson = res.data.data.layoutJson;
      }

      if (!layoutJson) return;

      // 🔥 PARSE STRING
      const parsed = JSON.parse(layoutJson);

      console.log("PARSED 👉", parsed);

      // 🔥 IMPORTANT FIX
      if (parsed.widgets && Array.isArray(parsed.widgets)) {
        const formatted = parsed.widgets.map(w => ({
          i: w.id || Date.now().toString(),
          type: w.type
        }));

        setLayout(formatted);
      }

    } catch (e) {
      console.log("❌ layout error", e);
    }
  };

  // ================= SAFE DATA =================
  const safeData = orders.length > 0
    ? orders.map(o => ({
        name: o.product || "Unknown",
        quantity: o.quantity || 0
      }))
    : [
        { name: "Fiber 300", quantity: 5 },
        { name: "5G Plan", quantity: 3 },
        { name: "Fiber 1Gbps", quantity: 2 }
      ];

  const COLORS = ["#6366f1", "#f59e0b", "#10b981"];

  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content">

          <h2>Dashboard</h2>

          {/* KPI */}
          <div className="kpi-container">

            <div className="card revenue">
              <h3>Revenue</h3>
              <p>₹{kpi?.revenue ?? 0}</p>
            </div>

            <div className="card orders">
              <h3>Orders</h3>
              <p>{kpi?.orders ?? 0}</p>
            </div>

            <div className="card users">
              <h3>Users</h3>
              <p>{kpi?.users ?? 0}</p>
            </div>

          </div>

          {/* LIVE WIDGETS */}
          <div style={{ marginTop: "30px" }}>
            <h3>Live Widgets</h3>

            <div style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}>

              {layout.length === 0 && (
                <p>No widgets added yet</p>
              )}

              {layout.map(item => (

                <div key={item.i} style={{
                  width: "300px",
                  background: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}>

                  {item.type === "kpi" && (
                    <div>
                      <h4>KPI</h4>
                      <p>Total Orders: {kpi?.orders ?? 0}</p>
                    </div>
                  )}

                  {item.type === "bar" && (
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={safeData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="quantity" fill="#6366f1" />
                      </BarChart>
                    </ResponsiveContainer>
                  )}

                  {item.type === "pie" && (
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie data={safeData} dataKey="quantity">
                          {safeData.map((_, i) => (
                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  )}

                  {item.type === "table" && (
                    <table style={{ width: "100%" }}>
                      <tbody>
                        {orders.map(o => (
                          <tr key={o.id}>
                            <td>{o.product}</td>
                            <td>{o.quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}