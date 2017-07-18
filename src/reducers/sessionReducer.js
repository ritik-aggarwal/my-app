mport * as types from '../actions/actionTypes';
import Login from '../pages/Login';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = Login.State.session, action) {  
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      browserHistory.push('/')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
