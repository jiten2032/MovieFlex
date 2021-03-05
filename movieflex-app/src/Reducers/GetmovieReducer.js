import { Types } from '../Actions/action';

const initstate = {
    Movies: [],
    // Movies: {},
    Error: ''
}

const GetmovieReducer = (state = initstate, action) => {
//   console.log(action.payload);
//   console.log(state.Movies);
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

