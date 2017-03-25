/*
    ./client/components/SingleMovie.jsx
*/
import React from 'react';
import App from './App.jsx';

class SingleMovie extends React.Component {
  constructor(props){
    super(props)
    this.deleteMovie = this.deleteMovie.bind(this)
  }

deleteMovie(){
    var moviePos
    var thisMovie = this.props.data
    var movieArray = JSON.parse(localStorage.getItem('allMovies'))
    var movieSearch = movieArray.map(function(datas){
      if(thisMovie.id === datas.id){
        var moviePos = movieArray.indexOf(datas)
      }
      var updatedMovies = movieArray.splice(moviePos, moviePos+1)
      localStorage.setItem('allMovies', JSON.stringify(movieArray))
    })
    this.props.functionToPass()
}

render(){
  return <div>
  <div className='col-sm-4'>
    <div className='movieBox'>
      <h4>{this.props.data.title}</h4>
      Year: {this.props.data.year}<br/>
      Genre: {this.props.data.genre}<br/>
      Actors: {this.props.data.actors}<br/>
      Rating: {this.props.data.rating}<br/><br/>
      <button className='btn btn-danger' id='deleteButton' onClick={this.deleteMovie}>Delete Movie</button>

      </div>
  </div>
  </div>
}
}
export default SingleMovie
