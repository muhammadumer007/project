import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import CommentScreen from "../pages/comments"
import EditComment from "../pages/editComment"
export default function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
            <Route path="/" element={<CommentScreen/>}/>
            <Route path="/editComment" element={<EditComment/>}/>
            <Route path="/editComment/:id" element={<EditComment/>}/>

            </Routes>
        </Router>
        </>
    )
}