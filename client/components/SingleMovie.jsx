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
  console.log(this.props.data.title)
  return <div>
      {this.props.data.title} stars {this.props.data.actors}
  </div>
}
}
export default SingleMovie
