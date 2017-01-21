import React from 'react';

const DonorReg = React.createClass({
  render(){
    return (
      <div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Phone Number" />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
})

export default DonorReg;
