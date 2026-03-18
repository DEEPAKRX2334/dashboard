import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList
} from "recharts";

export default function OrdersBarChart({ orders = [] }) {

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

  // fallback if empty
  if (data.length === 0) {
    data = [
      { name: "Fiber 300", value: 2 },
      { name: "5G Plan", value: 3 },
      { name: "Fiber 1Gbps", value: 1 }
    ];
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#6366f1">
          <LabelList dataKey="value" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}