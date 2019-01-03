import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breweries from './Breweries'
import Dives from './Dives'
import Pubs from './Pubs'
import Crawl from './Crawl'
import './App.css';

class Tabs extends Component {
  render() {
    return (
      <Router>
      <div class="tab">
    {/* USED Example from W3Schools for tabs    */}
    <button><Link to="/Breweries"><strong>breweries</strong></Link></button>
    <button class="tablinks" onclick="openFunction(event, 'Dives')"><a href="dive.html"><strong>dive bars</strong></a></button>
    <button class="tablinks" onclick="openFunction(event, 'Pubs')"><a href="pub.html"><strong>pub crawl</strong></a></button>
     
      </div>
      </Router>
    )
  }
}

export default Tabs;