import React from 'react';

const RecipientRegPage = React.createClass({
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
            <form>
              <div>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Zip Code" />
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
            </form>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

export default RecipientRegPage;