import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from '../actions/types';

export default (state={}, action) => {
  switch(action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };  //take from the api, map into an object by key 'id'. Take out all the key-value pairs of that result.
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case EDIT_STREAM: 
      return { ...state, [action.payload.id]: action.payload };  //ALTERNATIVE WAY USING KEY INTERPOLATION SYNTAX
    //FIRST WAY IN LESSON
      // const newState = {...state};  //take all the key-value pairs of state
      // newState[action.payload.id] = action.payload;  //change the one we want to change
      // return newState;  //return newState.
    default:
      return state;
  }
}