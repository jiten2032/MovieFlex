import { Types } from '../Actions/action';

const initstate = {
    favouriteMovies: []
}

const Addfovouritrmovie = (state = initstate, action) => {
    //   console.log(action);
    // console.log(state.Movies);
    switch (action.type) {
        case Types.ADD_FAVOURITE_MOVIE:
            const storefavouritemovies = [...state.favouriteMovies, action.payload.my_fovourite_movies]
            return {

                favouriteMovies: storefavouritemovies
            }
        case Types.DELETE_FAVOURITE_MOVIE:
            return {
                favouriteMovies: state.favouriteMovies.filter(newmovielist =>
                    newmovielist.id !== action.payload.id
                )
            }


        default:
            return state;
    }
}



export default Addfovouritrmovie;