import React from 'react';
import store from '../store/store'
import Map from './Map';
import '../css/Recipient.css';

const Recipient = React.createClass({
  render(){
    return(
      <div>
        <div>
          <div className="navbarOne">
            <img  alt="logo" src="/oneforallLogo.jpg"/>
          </div>
        </div>
        <div className="receiveIntro1">
          Please Choose Your Package
        </div>
        <div className="packageTextBox">
            <h3>Please choose the package that best fits your family’s needs. <br/> Each package holds our necessities that we recieve on a weekly basis. <br/> Packages are on a first come, first serve basis.</h3>
        </div>
      <div className="mainPackage">
        <div className="packages">
          <div className="package1">
            <div className="packageA">
              <img src="https://media.blueapron.com/recipes/2103/c_main_dish_images/1484937133-4-2198/130-FPP-Thai-Chicken-Noodle-Soup-20277_Center_high_menu_thumb.jpg"/>
              <button className="buttonPackage">Package 1</button>
            </div>
          </div>

            <div className="package1">
              <div className="packageA">
                <img src="https://media.blueapron.com/recipes/2098/c_main_dish_images/1484849079-4-3217/130-2PF-creamy-shrimp-spaghetti-14497_v2_Center_high_menu_thumb.jpg"/>
                <button className="buttonPackage">Package 2</button>
              </div>
          </div>

          <div className="package1">
            <div className="packageA">
              <img src="https://media.blueapron.com/recipes/2099/c_main_dish_images/1484849964-4-0754/130-2PM-Burgers-Red-Cabbage-Slaw14618_Center_high_menu_thumb.jpg"/>
              <button className="buttonPackage">Package 3</button>
            </div>
          </div>
        </div>
      </div>

      <div className="receiveIntro1">
        Find Food Pantries Near You!
      </div>
        <div className="mapContainer">
          <Map />
        </div>

      </div>
    )
  }
})

export default Recipient;
