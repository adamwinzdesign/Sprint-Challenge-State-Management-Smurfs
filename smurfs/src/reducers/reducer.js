import {
  FETCH_SMURF_LOADING,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILED,
  GET_NEW_SMURF,
  GET_SMURF_LOADING,
  GET_NEW_SMURF_FAILED
} from '../actions/index';

const initialState = {
  smurf: [],
  error: null,
  isFetching: false
}

function reducer(state = initialState, action) {
  console.log(action);
  
  switch(action.type) {
    case FETCH_SMURF_LOADING:
      return {...state, isFetching: true, error: null};
    case FETCH_SMURF_SUCCESS: 
      return {...state, isFetching: false, smurf: action.payload, error: null};
    case FETCH_SMURF_FAILED:
      return {...state, isFetching: false, error: action.payload}
    case GET_SMURF_LOADING: 
      return {...state, isFetching: false, error: null, smurf: []}
    case GET_NEW_SMURF:
      return {...state, smurf: action.payload}
    case GET_NEW_SMURF_FAILED:
      return {...state, isFetching: false, error: action.payload}
    default: return state;
  }
}

export default reducer;
