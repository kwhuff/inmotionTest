/*
    ./client/components/SingleMovie.jsx
*/
import React from 'react';
import App from './App.jsx';

class SingleMovie extends React.Component {
  constructor(props){
    super(props)
  }

render(){
  // console.log(this.props.data.title)
  return <div>
  <div className='col-sm-4'>
    <div className='movieBox'>
      <h4>{this.props.data.title}</h4>
      Year: {this.props.data.year}<br/>
      Genre: {this.props.data.genre}<br/>
      Actors: {this.props.data.actors}<br/>
      Rating: {this.props.data.rating}<br/>

      </div>
  </div>
  </div>
}
}
export default SingleMovie
