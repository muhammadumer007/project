import axios from "axios";

export const apiHandel = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})
export const Get =(endpoint,id)=>{
    return apiHandel.get(`${endpoint}/${id?id:''}`)
}
export const post =()=>{
}
export const put =()=>{
}
export const Delete =()=>{
}