import React from 'react';

function CommentSection(props) {
    return(
        <div>
            {props.comment.map(commentsInfo => {
                return <p>{commentsInfo.username} {commentsInfo.text}</p>;
            })}
        </div>
    )
}

export default CommentSection;