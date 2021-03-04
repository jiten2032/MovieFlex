import React, { Component } from 'react';
import { connect } from 'react-redux';



export class MoviesList extends Component {
    state = {
        SerachContainer: ""
    }

    handleChange = (e) => {
        this.setState({
            SerachContainer: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onclick(this.state.SerachContainer)



        this.setState({
            SerachContainer: ""
        })
    }

    render() {
        // console.log(this.props);

        const { Movies } = this.props.GetmovieReducer;
        const newMoviesList = Movies.length ? (
            Movies.map(movie => {
                const imgURL = "https://image.tmdb.org/t/p/w342";
                return (


                    <div className="card my-3 border border-success border-2 mx-auto" key={movie.id} style={{maxWidth:"840px"}}>
                        <div className="row g-0">
                            <div className="col-md-4 "> <img src={imgURL + movie.poster_path}  className="card-img-top img-fluid " alt={movie.title + 'image'} /></div>
                            <div className="col-md-8 my-3 text-center">
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">Overview :{movie.overview}</p>
                                    <p className="card-text">Popularity :{movie.popularity}</p>
                                    <p className="card-text">{movie.vote_average}</p>
                                    <p className="card-text">{movie.vote_count}</p>
                                    <p className="card-text">{movie.popularity}</p>
                                    <p className="card-text"><small className="text-muted">{movie.release_date}</small></p>
                                    <p className="card-text">Add to  favourite
                                        <img src="https://img.icons8.com/officel/16/000000/like--v2.png" alt="like" />
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                )
            })


        ) : (
                <div className="alert alert-success text-center" role="alert">
                    <h4 className="alert-heading">Sorry!</h4>
                    <p>oop's Can't find the Movies with this name</p>
                    <hr />
                    <p className="mb-0">please try another</p>
                </div>
            )

        return (
            <div className="movieslist">
                <div className="container my-5">
                    <form className=" d-flex justify-content-center flex-wrap" onSubmit={this.handleSubmit}>
                        <div className="">
                            <label htmlFor="inputPassword2" className="visually-hidden">Search your Movies</label>
                            <input type="text" className="form-control px-5" id="inputPassword2" onChange={this.handleChange} placeholder="Search your Movies" value={this.state.SerachContainer} />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary mb-5 px-4">Search</button>
                        </div>
                    </form>
                </div>
                <div className="container ">


                    {newMoviesList}

                </div>


            </div>
        )
    }
}

export default connect(({ GetmovieReducer }) => ({ GetmovieReducer }))(MoviesList)

