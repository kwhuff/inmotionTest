/*
    ./client/components/App.jsx
*/
import React from 'react';
import SingleMovie from './SingleMovie.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.searchMovies = this.searchMovies.bind(this)
    this.addNewMovie = this.addNewMovie.bind(this)
    this.state = {
      allMovies: [
        {
        title: 'O Brother Where Art Thou?',
        genre: 'comedy',
        rating: 'PG-13',
        actors: 'George Clooney, John Turturro',
        year: 2000
      },
    {
      title: 'The Rock',
      genre: 'action',
      rating: 'R',
      actors: 'Sean Connery, Nicolas Cage',
      year: 1996
    }
  ],
    searchText: '',
    newMovTitle: '',
    newMovGenre: '',
    newMoveActors: '',
    newMovRating: '',
    newMovYear: ''
    }
  }

  searchMovies(){
    console.log('searching for movies')
  }
  addNewMovie(){
    // console.log('adding movie')
    var movTitle = document.getElementById('newMovTitle').value
    var movGenre = document.getElementById('newMovGenre').value
    var movActors = document.getElementById('newMovActors').value
    var movRating = document.getElementById('newMovRating').value
    var movYear = document.getElementById('newMovYear').value
    // console.log(movTitle)
    var newMovie = {title: movTitle,
    genre: movGenre,
  rating: movRating,
actors: movActors,
year: movYear}
console.log(newMovie)
var movieList = this.state.allMovies
movieList.push(newMovie)
console.log(movieList)
this.setState({
  allMovies: movieList
})

  }
  render() {
    console.log(this.state.allMovies)
    var allMyMovies = this.state.allMovies.map((data, i) => {
      // console.log(data)
      return <SingleMovie data={data} key={i} />
    })
    return <div>
    <div className='fixed'>
    <div className='col-sm-3'>
    <h1>Add New Movie</h1>
      <div className='form-group'>
        <p className='movieInfoInput'>Movie Title<input type='text' id='newMovTitle' className='newTextbox'></input></p>
        <p className='movieInfoInput'>Movie Genre<input type='text' id='newMovGenre' className='newTextbox'></input></p>
        <p className='movieInfoInput'>Movie Actors<input type='text' id='newMovActors' className='newTextbox'></input></p>
        <p className='movieInfoInput'>Movie Rating<input type='text' id='newMovRating' className='newTextbox'></input></p>
        <p className='movieInfoInput'>Movie Year<input type='text' id='newMovYear' className='newTextbox'></input></p>
        <button type='button' className='btn btn-default' onClick={this.addNewMovie}>Add New Movie</button>
      </div>
    </div>
    </div>
    <div className='col-sm-9 movieSpace'>

     <div className='appTitle'>
        <h1>My Movie Collection</h1>
      </div>
      <div className='searchArea'>
      <p>Search My Movies<input type='text' className='searchText'></input><button className='btn btn-success' onClick={this.searchMovies}>Go</button></p>
      </div>

      <div className='movieArea'>

        {allMyMovies}
      </div>
      </div>
      </div>


  }
}
export default App
