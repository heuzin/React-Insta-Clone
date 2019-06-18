import React from "react";
import CommentSection from './CommentSection';

function PostContainer (props) {
    return <CommentSection addNewCommment={props.addNewCommment} comment={props.dataInfo.comments} id={props.dataInfo.id}/>
}

export default PostContainer;