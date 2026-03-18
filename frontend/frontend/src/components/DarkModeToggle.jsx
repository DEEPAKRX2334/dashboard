
import { useState } from "react"

function DarkModeToggle(){

const [dark,setDark] = useState(false)

function toggle(){
setDark(!dark)

if(!dark){
document.body.classList.add("dark")
}else{
document.body.classList.remove("dark")
}
}

return(

<button className="dark-toggle" onClick={toggle}>
Toggle Theme
</button>

)

}

export default DarkModeToggle
