import {
  FETCH_USER_DATA,
  SET_USER_DATA
} from '../redux-actions/types';


export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER_DATA:
      return action.payload;
    case SET_USER_DATA:
      return state;
    default:
      return state;
    }
  }
