import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// ✅ KPI
export const getKpi = () => API.get("/dashboard/kpi");

// ✅ Layout
export const saveLayout = (data) =>
  API.post("/dashboard/layout", data);

export const getLayout = () =>
  API.get("/dashboard/layout");

// ✅ Orders (FIX ERROR HERE)
export const getOrders = () =>
  API.get("/orders");

// default export
export default API;