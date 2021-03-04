export const Types = {
    GET_MOVIES_REQUEST: 'action/get_movies_request',
    GET_MOVIES_SUCCESS: 'action/get_movies_success',
    MOVIES_ERROR: 'action/movies_error'
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