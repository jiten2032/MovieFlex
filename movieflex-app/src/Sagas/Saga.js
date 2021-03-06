import * as actions from '../Actions/action';
import { call, fork, put, take } from 'redux-saga/effects';
import * as api from '../API/MoviesAPI'

function* getMovies({ Lists }) {

    try {
        const result = yield call(api.getMovies, { Lists })
        // console.log(result.data);
        yield put(actions.getMoviesSuccess({
            moviesList: result.data.results
            // moviesList: result.data
        }))


    } catch (error) {
        console.log(error);
        yield put(actions.moviesErorr({
            error: "Opps no such movies found"
        }))
    }
}



function* watchgetMoviesRequest() {
    while (true) {
        const show_Movies_List = yield take(actions.Types.GET_MOVIES_REQUEST);
        // console.log(show_Movies_List);
        yield call(getMovies, {
            Lists: show_Movies_List.payload
        })
    }


}



const MoviesSaga = [
    fork(watchgetMoviesRequest),
 
]

export default MoviesSaga;