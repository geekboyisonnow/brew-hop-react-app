import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tabs from './Tabs'
import './App.css';

class Pubs extends Component {
  render() {
    return (
    <Router>
        <div id="content">
        
        <div class="bars">
          <div class="list"><strong><u>Pub Crawl:</u></strong></div>
          <div class="list"><a href="bars.html" style="text-decoration:none">Flannigan's Pub</a></div>
          <div class="list"><a href="bars.html" style="text-decoration:none">Rosie's Pub</a></div>
          <div class="list"><a href="bars.html" style="text-decoration:none">Pinehurst Pub</a></div>
          <div class="list"><a href="bars.html" style="text-decoration:none">Peggy O'Neal's Irish Pub</a></div>
          <div class="list"><a href="bars.html" style="text-decoration:none">O'keef's Irish Pub</a></div>
        </div>
        <div class="bars">
            <div class="list"><strong><u>Distance:</u></strong></div>
            <div class="list">0.5 Miles</div>
            <div class="list">0.75 Miles</div>
            <div class="list">1.1 Miles</div>
            <div class="list">1.25 Miles</div>
            <div class="list">3 Miles</div>
          </div>
        </div>
    </Router>
    )
  }
}

export default Pubs;