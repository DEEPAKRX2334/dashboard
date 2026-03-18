import { Responsive, WidthProvider } from "react-grid-layout";

import BarChartWidget from "../widgets/BarChartWidget";
import PieChartWidget from "../widgets/PieChartWidget";
import RevenueCard from "../widgets/RevenueCard";
import OrdersTable from "../widgets/OrdersTable";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DragDashboard() {

const layouts = {
lg: [
{ i: "bar", x: 0, y: 0, w: 6, h: 4 },
{ i: "pie", x: 6, y: 0, w: 6, h: 4 },
{ i: "revenue", x: 0, y: 4, w: 6, h: 3 },
{ i: "table", x: 6, y: 4, w: 6, h: 4 }
]
};

return (

<ResponsiveGridLayout
className="layout"
layouts={layouts}
breakpoints={{ lg: 1200, md: 996, sm: 768 }}
cols={{ lg: 12, md: 10, sm: 6 }}
rowHeight={110}
margin={[20,20]}
containerPadding={[0,0]}
>

<div key="bar" className="dashboard-card">
<BarChartWidget/>
</div>

<div key="pie" className="dashboard-card">
<PieChartWidget/>
</div>

<div key="revenue" className="dashboard-card">
<RevenueCard/>
</div>

<div key="table" className="dashboard-card">
<OrdersTable/>
</div>

</ResponsiveGridLayout>

);
}