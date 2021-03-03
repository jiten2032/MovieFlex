import React, { Component } from 'react';
import MoviesList from './MoviesList';
import { connect } from 'react-redux';
import { getMoviesRequest } from '../Actions/action'

export class App extends Component {

  handleClick = (data) => {
    this.props.getMoviesRequest(data)
  }
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <div className="card text-center bg-light sticky-top">
          <div className="card-body my-3">
            <h5 className="card-title fst-italic fs-1 text-primary">MovieFlex</h5>
            <p className="card-text fs-5 lh-base font-monospace">The World of Movies</p>
          </div>
        </div>
        <MoviesList onclick={this.handleClick} />
      </div>

    )
  }
}

export default connect(null,{ getMoviesRequest})(App)

