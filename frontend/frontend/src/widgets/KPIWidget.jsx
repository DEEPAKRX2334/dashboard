export default function KPIWidget({ orders = [] }) {

  const total = orders.reduce((sum, o) => {
    return sum + Number(o.quantity || 0);
  }, 0);

  return (
    <div>
      <h4>Total Orders</h4>
      <h2>{total}</h2>
    </div>
  );
}