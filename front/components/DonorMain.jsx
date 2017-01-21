import React from 'react';
const DonorMain = React.createClass({
  getInitialState(){
    return {userId: this.props.params.id}
  },
  render(){
    return (
      <div>
        <h1>{'UserId: ' + this.props.params.id}</h1>
      </div>
    )
  }
})

export default DonorMain;
