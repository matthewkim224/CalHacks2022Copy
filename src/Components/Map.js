import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

function Map(props) {
  Geocode.setApiKey("AIzaSyCLdIa6-k1T6ezYBWLxa6o1NfukLxggROE");
  Geocode.setLocationType("APPROXIMATE");

  const containerStyle = {
    width: "63vw",
    height: "85vh",
  };

  const [marker, setMarker] = useState({});
  const [center, setCenter] = useState({ lat: 37.871666, lng: -122.272781 });

  const addMarker = (coords) => {
    setMarker((marker) => (marker = { coords }));
    props.data.destLat = coords.lat;
    props.data.destLng = coords.lng;
    setCenter(coords);
    // remove later
    console.log(coords);
    Geocode.fromLatLng(coords.lat, coords.lng).then(
      (response) => {
        let city, state, country;
        let resultObject = response.results[0];
        for (let i = 0; i < resultObject.address_components.length; i++) {
          const currObj = resultObject.address_components[i];
          for (let j = 0; j < currObj.types.length; j++) {
            // is short name needed instead of long name
            switch (currObj.types[j]) {
              case "locality":
                city = currObj.long_name;
                break;
              case "administrative_area_level_1":
                state = currObj.long_name;
                break;
              case "country":
                country = currObj.short_name;
                break;
              default:
                break;
            }
          }
        }
        //temporary error handling
        if (!city) {
          city = "Seattle";
        }
        if (!state) {
          state = "WA";
        }
        if (!country) {
          country = "US";
        }
        props.action(coords.lat, coords.lng, city, state, country);
      },
      (error) => {
        console.error("Please try again");
      }
    );
  };

  return (
    <section id="map">
      <LoadScript googleMapsApiKey="AIzaSyCLdIa6-k1T6ezYBWLxa6o1NfukLxggROE">
        <GoogleMap
          mapContainerStyle={containerStyle}
          // defaultCenter={center}
          center={center}
          zoom={9}
          onClick={(e) => addMarker(e.latLng.toJSON())}
        >
          <Marker position={marker.coords} />
        </GoogleMap>
      </LoadScript>
    </section>
  );
}

export default Map;
