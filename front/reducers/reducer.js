import data from '../data';
import {browserHistory} from 'react-router';
import {REGISTER, LOGIN, DONATE, SUBMIT_DONATION} from '../actions/actions';

const defaultState = Object.assign({}, data, {donationMade: false});

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case REGISTER:
      let newUserList = [...state.users];
      newUserList.push(action.data);

      return Object.assign({}, state, {users: newUserList, userId});
    case LOGIN:
      let user
      state.users.forEach((ele,idx)=>{
        console.log(ele)
        console.log(action.data)
        if(ele.email == action.data.email && ele.password == action.data.password){
          user = ele
          browserHistory.push(`/donor/${idx}`);
        }
      })

      Object.assign({}, state, {loggedIn: user})
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
