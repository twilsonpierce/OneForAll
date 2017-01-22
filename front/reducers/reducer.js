import data from '../data';
import {browserHistory} from 'react-router';
import {REGISTER, LOGIN, DONATE, SUBMIT_DONATION} from '../actions/actions';

const defaultState = Object.assign({}, data, {donationMade: false});

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case REGISTER:
      let newUserList = [...state.users];
      newUserList.push(action.data);
      let id = newUserList.length-1
     
      if(action.data.type === "donor"){
        browserHistory.push(`/donor/${id}`);
      }else {
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
            browserHistory.push(`/recipient/${idx}`);
          }
        }
      })
      return Object.assign({}, state, {loggedIn: user})
    case DONATE:
      console.log(state)
      return Object.assign({}, state, {donation, numOfItems, donationMade: true});
    case SUBMIT_DONATION:
      let {donations, numOfItems} = action.data;

      console.log(action.data);

      return Object.assign({}, state, {donations, numOfItems, donationMade: true});
    default:
      return state;
  }
}

export default reducer;
