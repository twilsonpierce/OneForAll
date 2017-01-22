import data from '../data';
import {browserHistory} from 'react-router';
import {REGISTER, LOGIN} from '../actions/actions';

const defaultState = data;

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case REGISTER:
      let newUserList = [...state.users];
      newUserList.push(action.data);


      return Object.assign({}, state, {users: newUserList, userId});
    case LOGIN:
      //TEST
      let userId = newUserList.length - 1;
      browserHistory.push(`/donor/${userId}`);

      return state;
    default:
      return state;
  }
}

export default reducer;
