import { Button, ButtonBase, IconButton } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
// import Button from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useNavigate } from "react-router-dom"
import  { Get} from "../config/apiMethod"

export default function CommentScreen() {
    const [Data, setData] = useState([])


    const getData = () => {
        
            Get("comments")
            .then((res) => {
                // console.log(res.data)
                setData([...res.data])
            })
            .catch((err) => {
                console.log(err.message)
            })

    }
    // getData();
    const navigate=useNavigate()
   useEffect(() => {
        getData();
    }
        , [])
       let DeleteCommemt=(id)=>{
       axios
        .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(()=>{
            console.log("Comment Deleted Successfully ")
        })
        .catch((err)=>{
            console.log( err)
        })       
       } 
    return (
        <>
            <h1>Comments</h1>
            {/* <Button variant="contained" onClick={getData}>GET DATA</Button> */}
            {
                Data.map((x, i) => (
                    <div className="div1" key={i}>
                        <h2>id :{x.id}</h2>
                        <h2>Email :{x.email}</h2>
                        <h3>Name :{x.name}</h3>
                        <p>{x.body}</p>
                        <IconButton
                        onClick={()=>{DeleteCommemt(x.id)}}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton
                        onClick={()=>{
                            navigate (`/editComment/${x.id}`)
                        }}
                        
                        >
                            <EditIcon />
                        </IconButton>



                    </div>
                ))
            }


        </>
    )
}