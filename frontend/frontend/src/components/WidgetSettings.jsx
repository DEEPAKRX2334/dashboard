function WidgetSettings({onClose}){

return(

<div style={{
position:"fixed",
right:0,
top:0,
width:"300px",
height:"100%",
background:"white",
boxShadow:"-2px 0 10px rgba(0,0,0,0.1)",
padding:"20px"
}}>

<h3>Widget Settings</h3>

<label>Title</label>
<input style={{width:"100%",marginBottom:"10px"}}/>

<label>Width</label>
<input type="number" style={{width:"100%",marginBottom:"10px"}}/>

<label>Height</label>
<input type="number" style={{width:"100%",marginBottom:"10px"}}/>

<button onClick={onClose}>Close</button>

</div>

)

}

export default WidgetSettings