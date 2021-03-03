export const Types = {
    GET_MOVIES_REQUEST: 'action/get_movies_request',
    GET_MOVIES_SUCCESS:'action/get_movies_success'
}

export const getMoviesRequest = (data) => ({
    type: Types.GET_MOVIES_REQUEST,
    payload: data
})
export const getMoviesSuccess = ({moviesList}) => ({
    type: Types.GET_MOVIES_SUCCESS,
    payload: {moviesList}
})