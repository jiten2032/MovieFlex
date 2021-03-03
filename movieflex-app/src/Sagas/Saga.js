import * as actions from '../Actions/action';
import { takeEvery, call, fork,put } from 'redux-saga/effects';
import * as api from '../API/MoviesAPI'

function* getMovies({ payload }) {
    // console.log( payload );
    try {
        const listOfMovies = yield call(api.getMovies({payload}));
        console.log(listOfMovies);
// yield put(actions.getMoviesSuccess({
//     moviesList:result.
// }))

    } catch (error) {

    }
}



function* watchgetMoviesRequest() {
    yield takeEvery(actions.Types.GET_MOVIES_REQUEST,getMovies)
}

const MoviesSaga = [
    fork(watchgetMoviesRequest)
]

export default MoviesSaga;