import Saga from './Saga';
import { all } from 'redux-saga/effects';


export default function* rootSaga() {
    yield all({
        ...Saga
    })
}