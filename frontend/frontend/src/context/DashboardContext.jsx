import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {

  const [layout, setLayout] = useState([]);

  return (
    <DashboardContext.Provider value={{ layout, setLayout }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);