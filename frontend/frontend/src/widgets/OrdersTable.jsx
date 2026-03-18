export default function OrdersTable({ orders = [] }) {

  if (!orders.length) return <p>No Data</p>;

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Qty</th>
        </tr>
      </thead>

      <tbody>
        {orders.map(o => (
          <tr key={o.id}>
            <td>{o.id}</td>
            <td>{o.product}</td>
            <td>{Number(o.quantity || 0)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}