import React from 'react';
import './commentSection.css'
import "../../node_modules/font-awesome/css/font-awesome.min.css"

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comment: "",
            likes: props.likes
        }
    }

    changeHandler = event => {
        this.setState ({ comment: event.target.value })
    }

    clickButton = event => {
        event.preventDefault();
        this.props.addNewCommment(this.state.comment, this.props.id);
        this.setState({ comment: ""});
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes: likes });
    }

    render() {
        return(
            <div>
                <div className="usernameHeader">
                    <img
                    alt='post thumbnail'
                    className='post-like'
                    src={this.props.thumbnail}    
                    />
                    <span className="username"> {this.props.username}</span>
                </div> 
                <img
                    alt='post tumbnail'
                    className='post-image'
                    src={this.props.img}    
                />
                <div className="commentSection">
                    <p> <i onClick={this.incrementLike} className="fa fa-heart fa-lg heart"> </i> <i className='fa fa-comment fa-lg'></i></p>
                    <p className='likes'> {this.state.likes} </p>
                    {this.props.comment && this.props.comment.map(commentsInfo => {
                        return (
                            <div>
                                <p> <span className='userInfo'>{commentsInfo.username} </span> <span>{commentsInfo.text}</span> </p>
                            </div>
                        )
                    })}
                    <p className='date'> {this.props.date} </p>
                </div> 
                <div className='addCommentSection'>
                    <form onSubmit={this.clickButton}>
                        <input 
                            type='text'
                            value={this.state.comment}
                            onChange={this.changeHandler} 
                            placeholder='Add a comment...' 
                            name='comment' />          
                        <button type="submit">...</button>
                    </form>
                </div>            
            </div>
        )
    }
}

export default CommentSection;