import { useEffect,useState } from "react";
import { getOrders } from "../services/api";

export default function TableWidget(){

 const [orders,setOrders] = useState([]);

 useEffect(()=>{

  getOrders().then(res=>{
    setOrders(res.data);
  });

 },[]);

 return(

  <div>

   <h3>Customer Orders</h3>

   <table style={{
     width:"100%",
     borderCollapse:"collapse"
   }}>

    <thead>
      <tr>
        <th>Email</th>
        <th>Product</th>
        <th>Amount</th>
      </tr>
    </thead>

    <tbody>

     {orders.map(o=>(
      <tr key={o.id}>
        <td>{o.email}</td>
        <td>{o.product}</td>
        <td>₹ {o.amount}</td>
      </tr>
     ))}

    </tbody>

   </table>

  </div>

 );

}