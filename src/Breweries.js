import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tabs from './Tabs'
import './App.css';

class Breweries extends Component {
  render() {
    return (
    <Router>
    <div class="bars">
    <div class="list"><strong><u>Breweries:</u></strong></div>
    <div class="list"><a href="bars.html" style="text-decoration:none">Soggy Bottom Brewing</a></div>
    <div class="list"><a href="bars.html" style="text-decoration:none">7venth Sun</a></div>
    <div class="list"><a href="bars.html" style="text-decoration:none">Dunedin Brewery</a></div>
    <div class="list"><a href="bars.html" style="text-decoration:none">Caledonia Brewery</a></div>
    <div class="list"><a href="bars.html" style="text-decoration:none">Woodwright Brewing Company</a></div>
  </div>
  <div class="bars">
      <div class="list"><strong><u>Distance:</u></strong></div>
      <div class="list">0.5 Miles</div>
      <div class="list">0.75 Miles</div>
      <div class="list">1.1 Miles</div>
      <div class="list">1.25 Miles</div>
      <div class="list">3 Miles</div>
    </div>
  </Router>
    )
  }
}

export default Breweries;