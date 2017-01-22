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
        </div>
        <div>
          <div>
            SIGN UP TODAY & GET A BOX
          </div>
          <div>
            <div>
            <form onSubmit={this.onSubmit}>
              <div>
                <input type="text" placeholder="First Name" onChange={this.onChange.bind(this, "first_name")}/>
                <input type="text" placeholder="Last Name" onChange={this.onChange.bind(this,"last_name")}/>
                <input type="text" placeholder="Email" onChange={this.onChange.bind(this, "email")}/>
                <input type="text" placeholder="Password" onChange={this.onChange.bind(this, "password")}/>
                <input type="text" placeholder="Phone Number"/>
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Zip Code" onChange={this.onChange.bind(this, "zip")}/>
              </div>
              <div>
                <input type="checkbox" value="ebt" /> ebt
                <input type="checkbox" value="medicade" />medicade
                <input type="checkbox" value="section 8" />section 8
                <input type="checkbox" value="none" />none
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div>
                <input type="submit"/>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

export default RecipientRegPage;