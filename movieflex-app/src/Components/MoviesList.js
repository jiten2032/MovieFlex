import React, { Component } from 'react';
import { connect } from 'react-redux';



export class MoviesList extends Component {
    state = {
        SerachContainer: "",
        display: false,
        favourite:false
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
            SerachContainer: "",
            display: true

        })
    }
    handleClick_white_heart = () =>{
        this.setState({
            
            favourite:true
        })
    }
    handleClick_red_heart = () =>{
        this.setState({
            
            favourite:false
        })
    }

    render() {
        // console.log(this.props.GetmovieReducer.Movies);
       

        const { Movies } = this.props.GetmovieReducer;
        const newMoviesList = Movies.length ? (
            Movies.map(movie => {
                const imgURL = "https://image.tmdb.org/t/p/w342";
                return (


                    <div className="card my-3 border border-success border-2 mx-auto" key={movie.id} style={{ maxWidth: "840px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 "> <img src={imgURL + movie.poster_path} className="card-img-top img-fluid " alt={movie.title + 'image'} /></div>
                            <div className="col-md-8 my-3 text-center">
                                <div className="card-body">
                                    <h5 className="card-title fs-4 text-success">{movie.title}</h5>
                                    <p className="card-text"> <span className="fs-5 text-primary">Overview :</span> {movie.overview}</p>
                                    <p className="card-text"><span className="fs-5 text-primary">Popularity :</span>   {movie.popularity}</p>
                                    <p className="card-text"><span className="fs-5 text-primary">Average Votes :</span>  {movie.vote_average}</p>
                                    <p className="card-text"><span className="fs-5 text-primary">Vote Count :</span>   {movie.vote_count}</p>
                                    <p className="card-text"><span className="fs-5 text-primary">Release Date :</span>  <small className="text-muted">{movie.release_date}</small></p>
                                    <p className="card-text"><span className="fs-5 text-primary"> Add to  favourite</span>
                                    {/* <button type="button" class="btn btn-link text-decoration-none">Link</button> */}
                                        {this.state.favourite ? 
                                        (<span  className="btn" onClick={this.handleClick_red_heart}>   <img src="https://img.icons8.com/emoji/48/000000/red-heart.png" alt="redHeart"/></span>) :
                                     (<span  className="btn" onClick={this.handleClick_white_heart}><img src="https://img.icons8.com/emoji/48/000000/white-heart.png" alt="whiteheart" /></span>)}

                                     {/* <button type="button" class="btn btn-link text-decoration-none">Link</button> */}

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

                {this.state.display ? (<div className="container ">


                    {newMoviesList}

                </div>) : (
                    null
                )}



            </div>
        )
    }
}

export default connect(({ GetmovieReducer }) => ({ GetmovieReducer }))(MoviesList)

