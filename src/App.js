import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
      </div>
    );
  }
}

export default App;
