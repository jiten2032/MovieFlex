import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mymovieslist from './Mymovieslist';



export class MoviesList extends Component {
    render() {

        return (
           <div className="movieslist">         
                {this.props.GetmovieReducer.display ? (
                    <div className="container">
                        {this.props.GetmovieReducer.Movies.length ? (this.props.GetmovieReducer.Movies.map(movie => {
                            return <Mymovieslist items={movie} key={movie.id} />
                        })) : (
                            <Mymovieslist falseitems={
                                <div className="alert alert-success text-center" role="alert">
                                    <h4 className="alert-heading">Sorry!</h4>
                                    <p>oop's Can't find the Movies with this name</p>
                                    <hr />
                                    <p className="mb-0">please try another</p>
                                </div>
                            } />

                        )}


                    </div>

                ) : (
                    null
                )}



            </div>
        )
    }
}

export default connect(({ GetmovieReducer }) => ({ GetmovieReducer }))(MoviesList)

