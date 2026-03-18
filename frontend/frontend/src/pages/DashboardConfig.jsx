import { useEffect, useState } from "react";
import API from "../services/api";
import { useDashboard } from "../context/DashboardContext";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

export default function DashboardConfig() {

  const { layout, setLayout } = useDashboard();

  const [orders, setOrders] = useState([]);
  const [kpi, setKpi] = useState({ revenue: 0, orders: 0 });

  // 🔥 LOAD DATA (for preview)
  useEffect(() => {

    API.get("/orders")
      .then(res => {
        if (Array.isArray(res.data)) {
          setOrders(res.data);
        } else {
          setOrders([]);
        }
      })
      .catch(() => setOrders([]));

    API.get("/dashboard/kpi")
      .then(res => setKpi(res.data || {}))
      .catch(() => setKpi({ revenue: 0, orders: 0 }));

    // load layout
    API.get("/dashboard/layout")
      .then(res => {
        if (res.data?.layoutJson) {
          const parsed = JSON.parse(res.data.layoutJson);
          if (Array.isArray(parsed)) {
            setLayout(parsed);
          }
        }
      });

  }, []);

  // 🔥 SAFE DATA
  const safeData = orders.length > 0
    ? orders.map(o => ({
        name: o.product || "Unknown",
        quantity: o.quantity || 0
      }))
    : [
        { name: "A", quantity: 5 },
        { name: "B", quantity: 3 },
        { name: "C", quantity: 2 }
      ];

  const COLORS = ["#6366f1", "#f59e0b", "#10b981"];

  // ADD
  const addWidget = (type) => {
    const newWidget = {
      i: Date.now().toString(),
      type
    };
    setLayout([...layout, newWidget]);
  };

  // REMOVE
  const removeWidget = (id) => {
    setLayout(layout.filter(w => w.i !== id));
  };

  // SAVE
  const saveLayout = () => {
    API.post("/dashboard/layout", {
      layoutJson: JSON.stringify(layout)
    }).then(() => alert("Saved ✅"));
  };

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>

        <Navbar />

        <h2>Configure Dashboard</h2>

        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => addWidget("kpi")}>Add KPI</button>
          <button onClick={() => addWidget("bar")}>Add Bar</button>
          <button onClick={() => addWidget("pie")}>Add Pie</button>
          <button onClick={() => addWidget("table")}>Add Table</button>
          <button onClick={saveLayout}>Save</button>
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

          {layout.map(item => (

            <div key={item.i} style={{
              width: "260px",
              padding: "15px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>

              {/* KPI PREVIEW */}
              {item.type === "kpi" && (
                <div>
                  <h4>KPI</h4>
                  <p>Orders: {kpi?.orders ?? 0}</p>
                </div>
              )}

              {/* BAR PREVIEW */}
              {item.type === "bar" && (
                <ResponsiveContainer width="100%" height={150}>
                  <BarChart data={safeData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="quantity" fill="#6366f1" />
                  </BarChart>
                </ResponsiveContainer>
              )}

              {/* PIE PREVIEW */}
              {item.type === "pie" && (
                <ResponsiveContainer width="100%" height={150}>
                  <PieChart>
                    <Pie data={safeData} dataKey="quantity">
                      {safeData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              )}

              {/* TABLE PREVIEW */}
              {item.type === "table" && (
                <table style={{ width: "100%" }}>
                  <tbody>
                    {orders.slice(0, 3).map(o => (
                      <tr key={o.id}>
                        <td>{o.product}</td>
                        <td>{o.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              <button
                onClick={() => removeWidget(item.i)}
                style={{
                  marginTop: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px"
                }}
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}