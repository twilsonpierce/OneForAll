import React from 'react';
import {connect} from 'react-redux';

//Page shown after user(donor) logs in
const DonorMain = React.createClass({
  render(){

    return (
      <div>
        <h1>{'UserId: ' + this.props.state.userId}</h1>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(DonorMain);
