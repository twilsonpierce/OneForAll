import React from 'react';
import $ from 'jquery';
import store from '../store/store';

const Map = React.createClass({
  componentDidMount(){
    var zip = store.getState().loggedIn.zip

   $.ajax({
     url: "https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/"+zip+"/programs?api_key=fb8edd11a14dc07088e183b288c2503c&serviceTag=food+pantry&cursor=0&limit=10",
     type: "GET"
   })
   .done(data => {

     let locations = data.programs;

     let centerLat = locations[0].offices[0].location.latitude;
     let centerLng = locations[0].offices[0].location.longitude;

     let map = new google.maps.Map(document.getElementById('map'), {
       zoom: 15,
       center: {lat: centerLat, lng: centerLng},
       mapTypeId: 'terrain',
       noClear: true
     });

     for(let i = 0; i < locations.length; i++){
       let lat = locations[i].offices[0].location.latitude;
       let lng = locations[i].offices[0].location.longitude;

       new google.maps.Marker({
         position: {lat, lng},
         map: map
       });
     }
   })


  },
  render(){
    return (
      <div id="map-container">
        <div id="map" style={{width: "700px", height: "400px"}}></div>
      </div>
    )
  }
})

export default Map;
