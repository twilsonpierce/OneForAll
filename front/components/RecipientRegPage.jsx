import React from 'react';
import store from '../store/store';
import {register} from '../actions/actions';

const RecipientRegPage = React.createClass({
  getInitialState(){
    return{
      first_name : "",
      "last_name" : "",
      "email" : "",
      "password" : "",
      "type" : "recipient",
      "zip" : "",
    }
  },
  onChange(key, e){
    this.setState({[key]: e.target.value})
  },
  onSubmit(e){
    e.preventDefault()
    store.dispatch(register(this.state))
  },
  render(){
    return(
      <div>
        <div>
          <div className="navbarOne">
              <img src="/logo.png"/>
            </div>
            <div className="navbarBorder"></div>
        </div>
        <div className="receiveIntro">
          <div className="receiveIntro1">
            You’re On Way To Receiving Your First Box!
          </div>
            <form onSubmit={this.onSubmit} className="regPage">
              <div className="regPageBox1">
                <input type="text" placeholder="First Name" onChange={this.onChange.bind(this, "first_name")}/>
                <input type="text" placeholder="Last Name" onChange={this.onChange.bind(this,"last_name")}/>
                <input type="text" placeholder="Email" onChange={this.onChange.bind(this, "email")}/>
                <input type="text" placeholder="Password" onChange={this.onChange.bind(this, "password")}/>
                <input type="text" placeholder="Phone Number"/>
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Zip Code" onChange={this.onChange.bind(this, "zip")}/>
              </div>
              <div className="regPageBox2">
                <input type="checkbox" value="ebt" /> <span>EBT</span>
                <input type="checkbox" value="medicaid" />MEDICAID
                <input type="checkbox" value="section 8" />SECTION 8
                <input type="checkbox" value="none" />NONE
                <select>
                  <option value="1">1 - 2 members</option>
                  <option value="2">3 - 5 members</option>
                  <option value="3">6 - 8 members</option>
                  <option value="4">9 - 11 members</option>
                </select>
              </div>
              <div>
                <input className="registerButton" type="submit" />
              </div>
            </form>
        </div>
      </div>
      )
  }
})

export default RecipientRegPage;
