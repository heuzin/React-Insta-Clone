import React from 'react';
import DummyData from './dummy-data';
import PostContainer from "./Components/PostContainer"
import SearchBar from './Components/SearchBar'

import './App.css';

class App extends React.Component {
  constructor() {
  super();
    this.state = {
      dummyData: DummyData
    };
}

  render() {
    console.log(DummyData)
    return (
      <div>
        <SearchBar />
        <h4>philzcoffee</h4>
        {this.state.dummyData.map(data =>{
          return <PostContainer dataInfo = {data}/>
      })}
        <input type='text' placeholder='Add a comment...' name='comment' />
      </div>
    );
  }
}

export default App;