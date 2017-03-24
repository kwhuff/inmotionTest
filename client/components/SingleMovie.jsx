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
  console.log(this.props.data)
  return <div>
    <div className='col-sm-12'>
      {this.props.data.title}
    </div>
  </div>
}
}
export default SingleMovie
