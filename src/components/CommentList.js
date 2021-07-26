import react from "react";
import Comment from "./Comment";

const CommentList = ({comments, url}) => {
    const commentNodes = comments.map(comment =>{
        return (
            <Comment name = {comment.name} url= {comment.url} key = {comment.id}/>
        )
    })
    return (
        <>
            {commentNodes}
        </>
    )

}


export default CommentList;