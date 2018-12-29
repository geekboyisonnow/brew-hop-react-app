import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tabs from './Tabs'
import './App.css';

class Dives extends Component {
  render() {
    return (
    <Router>
        <div id="content">
            <div class="bars">
                <div class="list"><strong><u>Dive Bars:</u></strong></div>
                <div class="list"><a href="bars.html" style="text-decoration:none">Skip's Bar</a></div>
                <div class="list"><a href="bars.html" style="text-decoration:none">Corner Bar</a></div>
                <div class="list"><a href="bars.html" style="text-decoration:none">The Dive</a></div>
                <div class="list"><a href="bars.html" style="text-decoration:none">Danny's Bar</a></div>
                <div class="list"><a href="bars.html" style="text-decoration:none">Any Bar USA</a></div>
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

export default Dives;