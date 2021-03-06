export const Types = {
    GET_MOVIES_REQUEST: 'action/get_movies_request',
    GET_MOVIES_SUCCESS: 'action/get_movies_success',
    MOVIES_ERROR: 'action/movies_error',
    ADD_FAVOURITE_MOVIE:'action/add_favourite_movie',
    DELETE_FAVOURITE_MOVIE:'action/delete_favourite_movie'
}

export const getMoviesRequest = (data) => ({
    type: Types.GET_MOVIES_REQUEST,
    payload: data
})
export const getMoviesSuccess = ({ moviesList }) => ({
    type: Types.GET_MOVIES_SUCCESS,
    payload: { moviesList }
})
export const moviesErorr = (error) => ({
    type: Types.MOVIES_ERROR,
    payload: {
        error
    }
})
export const addfavouritemovies = (my_fovourite_movies) => ({
    type: Types.ADD_FAVOURITE_MOVIE,
    payload: {
        my_fovourite_movies
    }
})
export const deletefavouritemovies = (id) => ({
    type: Types.DELETE_FAVOURITE_MOVIE,
    payload: {id}
    
})