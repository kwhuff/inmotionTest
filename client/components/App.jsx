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
    this.beforeSearch = this.beforeSearch.bind(this)
    this.testFunction = this.testFunction.bind(this)
    this.state = {
      allMovies: []
    }
  }
  componentDidMount(){
    if(localStorage.getItem('allMovies')){
    this.setState({
      allMovies: JSON.parse(localStorage.getItem('allMovies'))
    })
   }
  }
  testFunction(){
    this.setState({
      allMovies: JSON.parse(localStorage.getItem('allMovies'))
    })
  }
  //properly resets this.state.allmovies to reflect all movies in library prior to narrowing search field in searchMovies()
  beforeSearch(){
    this.setState({
      allMovies: JSON.parse(localStorage.getItem('allMovies'))
    })
    setTimeout(() => this.searchMovies(), 0)
  }
  //begins to narrow results based on search criteria
  searchMovies(){
    this.setState({
      allMovies: JSON.parse(localStorage.getItem('allMovies'))
    })
    console.log(this.state.allMovies)
    var resultsArray = []
    var searchText = document.getElementById('searchText').value
    var movieQuery = this.state.allMovies.forEach(function(data){
        if(data.title.includes(searchText)){
          resultsArray.push(data)
        }
        else if(data.genre.includes(searchText)){
          resultsArray.push(data)
        }
        else if(data.year.includes(searchText)){
          resultsArray.push(data)
        }
        else if(data.rating.includes(searchText)){
          resultsArray.push(data)
        }
        else if(data.actors.includes(searchText)){
          resultsArray.push(data)
        }
    })
    this.setState({
      allMovies: resultsArray
    })
  }
  addNewMovie(){
    var movieList = this.state.allMovies
    var movID = 0
    var makeNewID = movieList.forEach(function(data){
      if(data.id >= movID){
        movID = movID + 1;
      }
    })
    var movTitle = document.getElementById('newMovTitle').value
    var movGenre = document.getElementById('newMovGenre').value
    var movActors = document.getElementById('newMovActors').value
    var movRating = document.getElementById('newMovRating').value
    var movYear = document.getElementById('newMovYear').value
    var newMovie =
    {
      title: movTitle,
      genre: movGenre,
      rating: movRating,
      actors: movActors,
      year: movYear,
      id: movID
    }
    movieList.push(newMovie)
    this.setState({
      allMovies: movieList
    })
    console.log(movieList)
    localStorage.setItem('allMovies', JSON.stringify(movieList))
    document.getElementById('newMovTitle').value = ''
    document.getElementById('newMovGenre').value = ''
    document.getElementById('newMovActors').value = ''
    document.getElementById('newMovRating').value = ''
    document.getElementById('newMovYear').value = ''
  }
  render() {
    var allMyMovies = this.state.allMovies.map((data, i) => {
      return <SingleMovie data={data} key={i} functionToPass={this.testFunction} />
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
      <p>Search My Movies<input type='text' id='searchText' className='searchText'></input><button className='btn btn-success' onClick={this.beforeSearch}>Go</button></p>
      </div>

      <div className='movieArea'>

        {allMyMovies}
      </div>
      </div>
      </div>


  }
}
export default App
