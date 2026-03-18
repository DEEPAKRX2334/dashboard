export default function WidgetSidebar({ addWidget }) {

return (

<div className="widget-sidebar">

<h3>Widgets</h3>

<button onClick={() => addWidget("bar")}>
Bar Chart
</button>

<button onClick={() => addWidget("pie")}>
Pie Chart
</button>

<button onClick={() => addWidget("table")}>
Orders Table
</button>

<button onClick={() => addWidget("kpi")}>
Revenue Card
</button>

</div>

);

}