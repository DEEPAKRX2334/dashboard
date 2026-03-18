import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }){

const [theme,setTheme] = useState("light")

// load saved theme
useEffect(()=>{
const saved = localStorage.getItem("theme")
if(saved){
setTheme(saved)
}
},[])

// apply theme to body
useEffect(()=>{
document.documentElement.setAttribute("data-theme",theme) // ✅ FIXED
localStorage.setItem("theme",theme)
},[theme])

const toggleTheme = ()=>{
setTheme(prev => prev==="light" ? "dark" : "light")
}

return(
<ThemeContext.Provider value={{theme,toggleTheme}}>
{children}
</ThemeContext.Provider>
)
}