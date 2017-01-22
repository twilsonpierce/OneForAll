import React from 'react';
import store from '../store/store';
import {submit_donation} from '../actions/actions';

const DonationForm = React.createClass({
  getInitialState(){
    return {
      donations: {
        "canned_fruit": 0,
        "dry_mac_and_cheese": 0,
        "canned_soup": 0,
        "canned_tuna": 0,
        "other_canned_meats": 0,
        "spaghetti_sauce": 0,
        "pasta": 0,
        "peanut_butter": 0,
        "jelly": 0,
        "pork_and_beans": 0,
        "beans": 0,
        "juices": 0,
        "tea": 0,
        "coffee": 0,
        "crackers": 0,
        "flour": 0,
        "sugar": 0,
        "powdered_milk": 0
      },
      numOfItems: 0,
      shipping: ''
    }
  },
  handleChange(type, e){
    let donations = this.state.donations;
    donations = Object.assign({}, donations, {[type]: e.target.value})

    let numOfItems = 0;

    for(let food in donations){
      numOfItems += donations[food] ? parseInt(donations[food]) : 0;
    }

    this.setState({donations, numOfItems});
  },
  handleShippingChange(e){
    console.log(e.target.value)
    this.setState({shipping: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();

    let donations = Object.assign({}, this.state.donations);



    for(let food in donations){
      let quantity = donations[food];

      if(quantity && typeof quantity === 'string'){
        donations[food] = parseInt(donations[food]);
      } else if(!quantity){
        donations[food] = 0;
      }
    }

    let preparedState = Object.assign({}, this.state, {donations})
    
    //Add info in local state to store
    store.dispatch(submit_donation(preparedState));
  },
  nameFix(arr){
    let noUnderScore = arr.split('_');

    let titleCase = noUnderScore.map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    })

    return titleCase.join(' ');
  },
  render(){
    let item_names = Object.keys(this.state.donations);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {
            item_names.map((item, indx) =>
              <div key={indx}>
                <label>{this.nameFix(item)}</label>
                <input type="number" onChange={this.handleChange.bind(this, item)} />
              </div>
            )
          }

          <div>Total Items: {this.state.numOfItems}</div>


          <div onChange={this.handleShippingChange}>
            <input type="radio" name="shipping" value="pick_up" />Pick Up
            <input type="radio" name="shipping" value="drop_off" />Drop Off
          </div>

          <input type="submit" value="Submit"/>

        </form>


      </div>



    )
  }
})

export default DonationForm;
