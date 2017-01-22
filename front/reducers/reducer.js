import data from '../data';
import {browserHistory} from 'react-router';
import {REGISTER, LOGIN, DONATE, SUBMIT_DONATION} from '../actions/actions';

const defaultState = data;

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case REGISTER:
      let newUserList = [...state.users];
      newUserList.push(action.data);
      let id = newUserList.length-1
      console.log(action.data);
      if(action.data.type === "donor"){
        browserHistory.push(`/donor/${id}`);
      }else {
        //this a place holder for recipient
        browserHistory.push(`/recipient/${id}`);
      }

      return Object.assign({}, state, {users: newUserList, loggedIn:action.data});
    case LOGIN:
      let user
      state.users.forEach((ele,idx)=>{
        
        if(ele.email == action.data.email && ele.password == action.data.password){

          if(ele.type === "donor"){
            browserHistory.push(`/donor/${idx}`);
          }else {
            //this a place holder for recipient
            browserHistory.push(`/recipient/${idx}`);
          }
        }
      })
      return Object.assign({}, state, {loggedIn: user})
    case DONATE:
      return Object.assign({}, state, {donation, numOfItems});
    case SUBMIT_DONATION:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

export default reducer;
