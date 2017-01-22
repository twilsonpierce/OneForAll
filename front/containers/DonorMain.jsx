import React from 'react';
import {connect} from 'react-redux';
import DonationForm from '../components/DonationForm';

//Page shown after user(donor) logs in
const DonorMain = React.createClass({
  render(){
    let userId = this.props.state.userId;

    return (
      <div>
        <h2>Donation List</h2>
        <DonationForm state={this.props.state}/>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(DonorMain);
