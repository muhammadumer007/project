import { Button, ButtonGroup} from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function EditComment() {
    const Params = useParams()
    const [Model, setModel] = useState({})
    const api = "https://jsonplaceholder.typicode.com/comments"
    const GetCommentById = () => {
        axios
            .get(`${api}/${Params.id}`)
            .then((res) => {
                console.log(res)
                setModel({...res.data });

            })
            .catch((err) => {
                console.log(err.data);
            })
    }
    const updateComment = () => {
        axios
            .put(`${api}/${Params.id}`, Model)
            .then((res) => {
                console.log(res)
                console.log("Comment Updated Successfully", res.data)
            })

            .catch((err)=>{
                console.log(err);
            }) 
    }
    const SubmitComment=()=>{
        Model.userId=1;
       
        axios
        .post (api ,Model)
        .then ((res)=>{
            
            console.log("Comment Submit Successfully",res.data)
        })
        .catch ((err)=>{
            console.log(err)
        })
    }

    return (
        <> <div className="div2">
        <center>

        <h2>Add Comments <Button variant="contained" onClick={()=>{ GetCommentById()}}>Veiw Comment</Button></h2>
       
        <div>
        <input type="text"
        value={Model.name}
        placeholder="Email"
        onChange={(e)=>{
            setModel({...Model,name:e.target.value})
        }}
        />
        </div>
        <div>

        <textarea
        value={Model.body}
        onChange={(e)=>{
            setModel({...Model,body:e.target.value})
        }}
        placeholder="Enter your Text">

        </textarea>
        </div>
        <div>
        
            <Button variant="contained" className="update-btn"
            onClick={updateComment()}>Update</Button>
            
             <Button variant="contained" className="sub-btn"
            onClick={SubmitComment()}>Submit</Button>
        </div>
        
        </center>
        </div>
        

        </>
    )
}