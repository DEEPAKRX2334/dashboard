import axios from "axios"

const API="http://localhost:8080/api/dashboard"

export const saveLayout = async(layout)=>{

return axios.post(`${API}/save`,layout)

}

export const loadLayout = async(userId)=>{

return axios.get(`${API}/layout/${userId}`)

}