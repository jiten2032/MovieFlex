import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deletefavouritemovies} from '../Actions/action';

export class Favratemovies extends Component {

    handleDeletMovie = (id) => {
       this.props.deletefavouritemovies(id)
    }
    render() {
        // console.log(this.props.Addfovouritrmovie);
        const my_fovourite_movies_img = "https://image.tmdb.org/t/p/w342";
        const favourite_movies_lists = this.props.Addfovouritrmovie.favouriteMovies.map(movies => {
            return (

                <div className="card my-4 border border-success border-2 mx-auto" style={{ maxWidth: "840px" }} key={movies.id}>
                    <div className="row g-0">
                        <div className="col-md-4 "> <img src={my_fovourite_movies_img + movies.poster_path} className="card-img-top img-fluid " alt={movies.title + 'image'} /></div>
                        <div className="col-md-8 my-3 text-center">
                            <div className="card-body">
                                <h5 className="card-title fs-4 text-success">{movies.title}</h5>
                                <p className="card-text"> <span className="fs-5 text-primary">Overview :</span> {movies.overview}</p>
                                <p className="card-text"><span className="fs-5 text-primary">Popularity :</span>   {movies.popularity}</p>
                                <p className="card-text"><span className="fs-5 text-primary">Average Votes :</span>  {movies.vote_average}</p>
                                <p className="card-text"><span className="fs-5 text-primary">Vote Count :</span>   {movies.vote_count}</p>
                                <p className="card-text"><span className="fs-5 text-primary">Release Date :</span>  <small className="text-muted">{movies.release_date}</small></p>
                                <p className="card-text text-danger btn" onClick={() => { this.handleDeletMovie(movies.id) }} >Remove from Favourite</p>
                            </div>
                        </div>


                    </div>
                </div>
            )
        })


        return (
            <div className="my-5">
                {  favourite_movies_lists}
            </div>
        )
    }
}

export default connect(({ Addfovouritrmovie }) => ({ Addfovouritrmovie }),
{deletefavouritemovies})(Favratemovies)
