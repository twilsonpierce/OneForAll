import React from 'react';

const DonationSummary = React.createClass({
  nameFix(arr){
    let noUnderScore = arr.split('_');

    let titleCase = noUnderScore.map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    })

    return titleCase.join(' ');
  },
  render(){
    let summary = this.props.state.donations;
    let list = summary ? Object.keys(summary) : []

    return (
      <div>
        <ul>
          {
            list.reduce((items, item, indx) => {
              return summary[item] ?
                [...items, <li key={indx}>{this.nameFix(item) + ' x ' + summary[item]}</li>] :
                items
            }, [])
          }
        </ul>
      </div>
    )
  }
})

export default DonationSummary;
