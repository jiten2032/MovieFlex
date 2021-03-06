import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addfavouritemovies  } from '../Actions/action';
// import ReactNotification from 'react-notifications-component';
// import { store } from 'react-notifications-component';
// // import 'animate.css';
// import 'react-notifications-component/dist/theme.css';


export class Mymovieslist extends Component {
    state = {
        favourite: false
    }
    handleClick_white_heart = (id) => {

        const my_fovourite_movies = this.props.items;

        this.props.addfavouritemovies(my_fovourite_movies);

      

        // setTimeout(() => {
        //     alert(
        //         "Movie added successfully"
        //     )
        // }, 2000);

        // store.addNotification({
        //     title: "Movie added successfully",
        //     message: "you succeccfully added this movie to your favourite list",
        //     type: "success",
        //     insert: "top",
        //     container: 'center',
        //     animationIn: ["animate__animated", "animate__fadeIn"],
        //     animationOut: ["animate__animated", "animate__fadeOut"],
        //     dismiss: {
        //         duration: 3000,
        //         // onScreen:true,
        //         showIcon: true
        //     },
        //     width: 200
        // })

        this.setState({

            favourite: true
        })

        alert("Movie added successfully")
    }

    handleClick_red_heart = () => {

// this.props.deletefavouritemovies(id)

        
        this.setState({

            favourite: false
        })
        alert("Movie removed successfully")
    }


    render() {
        const imgURL = "https://image.tmdb.org/t/p/w342";
        const MY_Movies_List = this.props.items ? (
            <div className="card my-4 border border-success border-2 mx-auto" style={{ maxWidth: "840px" }}>
                <div className="row g-0">
                    <div className="col-md-4 "> <img src={imgURL + this.props.items.poster_path} className="card-img-top img-fluid " alt={this.props.items.title + 'image'} /></div>
                    <div className="col-md-8 my-3 text-center">
                        <div className="card-body">
                            <h5 className="card-title fs-4 text-success">{this.props.items.title}</h5>
                            <p className="card-text"> <span className="fs-5 text-primary">Overview :</span> {this.props.items.overview}</p>
                            <p className="card-text"><span className="fs-5 text-primary">Popularity :</span>   {this.props.items.popularity}</p>
                            <p className="card-text"><span className="fs-5 text-primary">Average Votes :</span>  {this.props.items.vote_average}</p>
                            <p className="card-text"><span className="fs-5 text-primary">Vote Count :</span>   {this.props.items.vote_count}</p>
                            <p className="card-text"><span className="fs-5 text-primary">Release Date :</span>  <small className="text-muted">{this.props.items.release_date}</small></p>
                            <p className="card-text"><span className="fs-5 text-primary"> Add to  favourite</span>
                                {this.state.favourite ?
                                    (<span className="btn" onClick={this.handleClick_red_heart}>   <img src="https://img.icons8.com/emoji/48/000000/red-heart.png" alt="redHeart" /></span>) :
                                    (<span className="btn" onClick={() => { this.handleClick_white_heart(this.props.items.id) }}><img src="https://img.icons8.com/emoji/48/000000/white-heart.png" alt="whiteheart" /></span>)}
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        ) : (
            <div className="my-5">
                {this.props.falseitems}
            </div>

        )
        return (
            <div className="container">
                {/* <ReactNotification />
                <Application /> */}
                {MY_Movies_List}


            </div>
        )
    }
}

export default connect(null,
    { addfavouritemovies })(Mymovieslist)
