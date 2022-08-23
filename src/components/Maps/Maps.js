import React, { useState } from "react";
import "./Map.css"
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";


function Map() {
  const [marker, setMarker] = useState(false);
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.748109, lng: -73.850514 }}
    >
      <Marker
        position={{ lat: 40.748109, lng: -73.850514 }}
        onClick={() => {
          setMarker(true);
        }}
      />
      {marker && (
        <InfoWindow
          position={{ lat: 40.748109, lng: -73.850514 }}
          onCloseClick={() => {
            setMarker(false);
          }}
        >
          <div>
            <h2>Queens Night Market </h2>
            <p>
              {" "}
              Located at NEW YORK HALL OF SCIENCE FLUSHING MEADOWS CORONA PARK,
              QUEENS
            </p>
            <p>Open on Saturday from 5pm till 12pm</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps() {
  return (

    <div className="map-container">
      
      <div className="map"> <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /></div>
     <div className="map-description"> 
      <h1> Location </h1>
      <h2>Queens Night Market </h2>
    <br></br>
      <p>Located outside of New York Hall of Science</p>
      <p>4701 111th St, Queens, NY 11368 </p>
      <br/>
      <p>Open Saturdays </p>
      <p> Hours: 5PM-12PM</p>
      <p>April-October</p>
 <br/>
      <h3>Directions</h3>
      <div className="map-box">
        <p>Due to very limited parking availability, we strongly encourage visitors to walk, bike, or take mass transit here. The operator of the adjacent parking lot, which we do not control, the organizer will be charging $15 for vehicles.</p>
        <br/>
 <p> 
 SUBWAY: Take the 7 train to the 111th Street station. Walk south 4 blocks until you pass under an overpass. You will see the Night Market behind the New York Hall of Science on the Left.
 </p>
</div>
     </div>

  

    </div>
  );
}
