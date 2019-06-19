import React from 'react';
import DummyData from './dummy-data';
import PostContainer from "./Components/PostContainer"
import SearchBar from './Components/SearchBar'

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
      if (element.id === id){
        element.comments.push(newComment);
      }
      return element;
    })
    this.setState({
      dummyData: findPost
    })
  }

  render() {
    console.log(DummyData)
    return (
      <div>
        <SearchBar />
        {this.state.dummyData.map(data =>{
          return <PostContainer key={data.imageUrl} addNewCommment={this.addNewCommment} dataInfo={data}/>
      })}
      </div>
    );
  }
}

export default App;