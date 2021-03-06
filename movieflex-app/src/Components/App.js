import React, { Component } from 'react';
import MoviesList from './MoviesList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Favratemovies from './Favratemovies';
import Searchbox from './Searchbox';




export class App extends Component {

  render() {
    // console.log(this.props);
    return (
      <BrowserRouter>
        <div className="App">
          <div className="card text-center bg-light sticky-top">
            <div className="card-body my-3">
              <h5 className="card-title fst-italic fs-1 text-primary">MovieFlex</h5>
              <p className="card-text fs-5 lh-base font-monospace">The World of Movies</p>
            </div>
          </div>
          <Searchbox />
          <Route exact path="/" component={MoviesList} />
          <Route path="/Favratemovies" component={Favratemovies} /> 
        </div>
      </BrowserRouter>
    )
  }
}

export default
  // { getMoviesRequest }
  App

