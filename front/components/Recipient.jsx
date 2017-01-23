import React from 'react';
import store from '../store/store'
import Map from './Map';

const Recipient = React.createClass({
  render(){
    return(
      <div>
        choose your package
        Please choose the package ....
        <img src="#"/>
        <img src="#"/>
        <img src="#"/>
        <button>package1</button>
        <button>package2</button>
        <button>package3</button>
        <Map />
      </div>
      )
  }
})

export default Recipient;
