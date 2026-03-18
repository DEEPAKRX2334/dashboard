import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from "recharts";

export default function ProductPieChart({ orders = [] }) {

  const grouped = {};

  orders.forEach(o => {
    const product = o.product || "Unknown";
    const qty = Number(o.quantity || 0);

    if (!grouped[product]) grouped[product] = 0;
    grouped[product] += qty;
  });

  let data = Object.keys(grouped).map(key => ({
    name: key,
    value: grouped[key]
  }));

  // fallback
  if (data.length === 0) {
    data = [
      { name: "Fiber 300", value: 2 },
      { name: "5G Plan", value: 3 },
      { name: "Fiber 1Gbps", value: 1 }
    ];
  }

  const COLORS = ["#6366f1", "#22c55e", "#f59e0b"];

  const renderLabel = ({ percent }) =>
    `${(percent * 100).toFixed(0)}%`;

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={80}
          label={renderLabel}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip formatter={(v) => `${v} orders`} />
      </PieChart>
    </ResponsiveContainer>
  );
}