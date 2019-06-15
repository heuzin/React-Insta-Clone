import React from "react";
import CommentSection from './CommentSection';

function PostContainer (props) {
    return <CommentSection comment = {props.dataInfo.comments}/>
}

export default PostContainer;