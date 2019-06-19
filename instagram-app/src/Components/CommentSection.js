import React from 'react';
import './commentSection.css'
import "../../node_modules/font-awesome/css/font-awesome.min.css"

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state= {
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
            
                <p>               
                <img
                alt='post thumbnail'
                className='post-like'
                src={this.props.thumbnail}    
                />
                {this.props.username}</p>
                <img
                    alt='post tumbnail'
                    className='post-image'
                    src={this.props.img}    
                />
                <p> <i onClick={this.incrementLike} className="fa fa-heart"> </i></p>
                <p> {this.state.likes} </p>
                {this.props.comment && this.props.comment.map(commentsInfo => {
                    return <p>{commentsInfo.text} - {commentsInfo.username}</p>;
                })}
                <p> {this.props.date} </p>
                <form onSubmit={this.clickButton}>
                    <input 
                        type='text'
                        value={this.state.comment}
                        onChange={this.changeHandler} 
                        placeholder='comment' 
                        name='comment' />          
                    <button type="submit">Add a comment</button>
                </form>
            </div>
        )
    }
}

export default CommentSection;