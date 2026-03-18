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

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const kpiRes = await API.get("/dashboard/kpi");
      setKpi(kpiRes.data || {});
    } catch (e) {
      console.log("KPI error");
    }

    try {
      const orderRes = await API.get("/orders");
      setOrders(orderRes.data || []);
    } catch (e) {
      console.log("Orders error");
    }
  };

  // 🔥 SAFE DATA (VERY IMPORTANT FIX)
  const safeData = (orders && orders.length > 0)
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

          {/* 🔥 DEBUG TEXT (REMOVE AFTER) */}
          <h2 style={{ color: "black" }}>Dashboard Working ✅</h2>

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

          {/* CHARTS */}
          <div className="charts">

            <div className="chart-box">
              <h3>Orders Bar Chart</h3>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={safeData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="quantity" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>

            </div>

            <div className="chart-box">
              <h3>Product Distribution</h3>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>

                  <Pie
                    data={safeData}
                    dataKey="quantity"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {safeData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % 3]} />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend />

                </PieChart>
              </ResponsiveContainer>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}