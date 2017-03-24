/*
    ./client/components/App.jsx
*/
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allMovies: [],
      searchText: '',

    }
  }
  render() {
    return (
     <div className='appTitle'>
        <h1>My Movie Collection</h1>
      </div>
      
    )
  }
}
export default App
