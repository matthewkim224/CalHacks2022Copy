import React, { Component } from "react";
import "./App.css";
import "./PreferencesBar.css";
import "semantic-ui-css/semantic.min.css";
import Map from "./Components/Map";
import PreferencesBar from "./Components/PreferencesBar";
import SearchBox from "./Components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add preference states here
      // Default values that are set when a marker is dropped
      destCity: "Chuo city",
      destState: "Tokyo",
      destCountry: "JP",
      lat: 37.871666, //will be got from the location api
      lng: -122.272781,
      destLat: 35.679308664334854, //just default values that are set when a marker is dropped
      destLng: 139.76735851097857,
      // startDate: new Date().toISOString().slice(0, 10),
      startDate: "2021-10-31",
      endDate: "2021-12-25",
      currency: "CAD",
      originCity: "Vancouver",
      originState: "British Columbia",
      originCountry: "CA",
    };
  }

  // For data ={}, add any states needed
  render() {
    return (
      <div className="App">
        <PreferencesBar
          data={this.state}
          startDate={this.editStart}
          endDate={this.editEnd}
          changeCurrency={this.editCurrency}
        />
        <div className="mainContainer">
          <div className="mapContainer">
            <Map data={this.state} action={this.mapInfoSetter} />
          </div>
          <SearchBox data={this.state} />
        </div>
      </div>
    );
  }

  mapInfoSetter = (lat, long, city, state, country) => {
    this.setState({
      destLat: lat,
      destLng: long,
      destCity: city,
      destState: state,
      destCountry: country,
    });
  };

  editStart = (date) => {
    this.setState({
      startDate: date,
    });
  };

  editEnd = (date) => {
    this.setState({
      endDate: date,
    });
  };

  editCurrency = (value) => {
    const newCurr = this.state.currency === "USD" ? "CAD" : "USD";
    this.setState({
      currency: newCurr,
    });
  };
}

export default App;
