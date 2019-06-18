import React from "react";
import CommentSection from './CommentSection';

function PostContainer (props) {
    return <CommentSection 
                addNewCommment={props.addNewCommment} 
                comment={props.dataInfo.comments} 
                img={props.dataInfo.imageUrl} 
                id={props.dataInfo.id}
                username={props.dataInfo.username}
                thumbnail={props.dataInfo.thumbnailUrl}
                likes={props.dataInfo.likes}
                date={props.dataInfo.timestamp}
                />
}

export default PostContainer;