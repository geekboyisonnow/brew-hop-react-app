import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breweries from './Breweries'
import './App.css';

class Tabs extends Component {
  render() {
    return (
      <Router>
      <div class="tab">
        
    <button><Link to="/Breweries"><strong>Brewery Hop</strong></Link></button>
    <button class="tablinks" onclick="openCity(event, 'Paris')"><a href="dive.html"><strong>Dive Hop</strong></a></button>
    <button class="tablinks" onclick="openCity(event, 'Tokyo')"><a href="pub.html"><strong>Pub Crawl</strong></a></button>
  
      </div>
      </Router>
    )
  }
}

export default Tabs;