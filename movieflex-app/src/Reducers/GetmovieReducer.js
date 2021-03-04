import { Types } from '../Actions/action';

const initstate = {
    Movies: [],
    Error: ''
}

const GetmovieReducer = (state = initstate, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case Types.GET_MOVIES_SUCCESS:

            return {
                ...state,
                Movies: action.payload.moviesList

            }
        case Types.MOVIES_ERROR:
          
            return {
                ...state,
                Error: action.payload.error

            }
        default:
            return state;
    }
}



export default GetmovieReducer;

