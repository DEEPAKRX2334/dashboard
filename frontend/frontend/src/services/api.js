import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// ✅ GET ORDERS
export const getOrders = async () => {
  const res = await API.get("/orders");
  return res.data;
};

// ✅ GET KPI
export const getKPI = async () => {
  const res = await API.get("/dashboard/kpi");
  return res.data;
};

// ✅ SAVE LAYOUT
export const saveLayout = async (layout) => {
  return API.post("/dashboard/layout", {
    layoutJson: JSON.stringify(layout),
  });
};

// ✅ GET LAYOUT
export const getLayout = async () => {
  const res = await API.get("/dashboard/layout");
  return res.data;
};

export default API;