import React from 'react';

const RecipientRegPage = React.createClass({
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
            <form className="regPage">
              <div className="regPageBox1">
                <input type="text" placeholder="First Name" /> <br/>
                <input type="text" placeholder="Last Name" /> <br/>
                <input type="text" placeholder="Email" /> <br/>
                <input type="text" placeholder="Password" /> <br/>
                <input type="text" placeholder="Phone Number" /> <br/>
                <input type="text" placeholder="Address" /> <br/>
                <input type="text" placeholder="City" /> <br/>
                <input type="text" placeholder="Zip Code" />
              </div>
              <div className="regPageBox2">
                <input type="checkbox" value="ebt" /> <span>ebt</span>
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
            </form>
        </div>
      </div>
      )
  }
})

export default RecipientRegPage;
