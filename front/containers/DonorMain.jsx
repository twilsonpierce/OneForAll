import React from 'react';
import {connect} from 'react-redux';
import DonationForm from '../components/DonationForm';
import DonationSummary from '../components/DonationSummary';

//Page shown after user(donor) logs in
const DonorMain = React.createClass({
  render(){
    let userId = this.props.state.userId;
    let donationMade = this.props.state.donationMade;

    let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    let date = new Date();
    let month = monthNames[date.getMonth()];
    let day = date.getDate()
    let year = date.getFullYear()

    return (
      <div>
        {
          donationMade ?
            <div>
              <h2>Donation Summary</h2>
              <h3>{`${month} ${day}, ${year} `}</h3>
              <DonationSummary state={this.props.state} />
            </div> :

            <div>
              <h2>Donation List</h2>
              <DonationForm state={this.props.state} />
            </div>

        }
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(DonorMain);
