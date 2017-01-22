import React from 'react';
import store from '../store/store';
import {register} from '../actions/actions';

const DonorReg = React.createClass({
  getInitialState(){
    return {name: '', email: '', password: '', zip:''}
  },
  handleChange(type, e){
    this.setState({[type]: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();

    store.dispatch(register(this.state))

    //console.log(this.state);
  },
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" onChange={this.handleChange.bind(this, 'name')} />
          <input type="text" placeholder="Email" onChange={this.handleChange.bind(this, 'email')}/>
          <input type="password" placeholder="Password" onChange={this.handleChange.bind(this, 'password')}/>
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Zip Code" onChange={this.handleChange.bind(this, 'zip')}/>
          <input type="text" placeholder="Phone Number" />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
})

export default DonorReg;
