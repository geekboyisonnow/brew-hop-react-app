import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Pic from './map-example.PNG'

class Map extends Component {
  render() {
    return (
      <div>
        
        <img src="map-example.PNG" width="100%" alt="Map"/>
      </div>
    )
  }
}

export default Map