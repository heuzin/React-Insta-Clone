import React from 'react';
import DummyData from './dummy-data';
import PostContainer from "./Components/PostContainer"
import SearchBar from './Components/SearchBar'
import CommentSection from './Components/CommentSection';

import './App.css';

class App extends React.Component {
  constructor() {
  super();
    this.state = {
      dummyData: []
    };
}

  componentDidMount() {
    this.setState({
      dummyData: DummyData
    })
  }

  addNewCommment = (comment, id) => {
    const newComment = {
      text: comment,
      username: Date.now()
    };
    let findPost = this.state.dummyData.map(function(element){ 
      if (element.id == id){
        element.comments.push(newComment);
      }
      return element;
    })
    this.setState({
      dummyData: findPost
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <h4>philzcoffee</h4>
        {this.state.dummyData.map(data =>{
          return <PostContainer addNewCommment={this.addNewCommment} dataInfo={data}/>
      })}
      </div>
    );
  }
}

export default App;