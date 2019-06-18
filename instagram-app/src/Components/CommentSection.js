import React from 'react';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            comment: ""
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
                <p> {this.props.likes} </p>
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