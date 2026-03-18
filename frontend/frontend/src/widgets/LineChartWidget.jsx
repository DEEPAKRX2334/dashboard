import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {month:"Jan",sales:400},
  {month:"Feb",sales:300},
  {month:"Mar",sales:500}
];

export default function LineChartWidget(){

  return(
    <LineChart width={350} height={250} data={data}>
      <XAxis dataKey="month"/>
      <YAxis/>
      <Tooltip/>
      <Line type="monotone" dataKey="sales" stroke="#6366f1"/>
    </LineChart>
  );
}