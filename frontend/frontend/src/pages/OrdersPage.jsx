import { useEffect, useState } from "react";
import { getOrders } from "../services/api";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]); // ✅ default empty array

  useEffect(() => {
    getOrders()
      .then((data) => {
        // ✅ SAFETY CHECK
        if (Array.isArray(data)) {
          setOrders(data);
        } else if (data?.data) {
          setOrders(data.data);
        } else {
          setOrders([]); // fallback
        }
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setOrders([]); // prevent crash
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {orders.length > 0 ? (
            orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.product}</td>
                <td>{o.quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}