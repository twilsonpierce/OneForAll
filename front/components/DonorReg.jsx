import React from 'react';
import {browserHistory} from 'react-router';
import data from '../data.js';

const DonorReg = React.createClass({
  getInitialState(){
    return {name: '', email: '', password: '', zip:''}
  },
  handleChange(type, e){
    this.setState({[type]: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();

    data.users.push(this.state);

    let userId = data.users.length - 1;

    browserHistory.push(`/donor/${userId}`);
    console.log(this.state);
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
