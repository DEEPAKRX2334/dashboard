import { useEffect } from "react";
import API from "../services/api";
import { useDashboard } from "../context/DashboardContext";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardConfig() {

  const { layout, setLayout } = useDashboard();

  // LOAD FROM DB
  useEffect(() => {
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
              width: "250px",
              padding: "15px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <h4>{item.type.toUpperCase()}</h4>

              <button
                onClick={() => removeWidget(item.i)}
                style={{ background: "red", color: "white", border: "none" }}
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