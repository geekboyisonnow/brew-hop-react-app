import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Search from './Search';
import Tabs from './Tabs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Tabs />
        <Home />
      </div>
    );
  }
}

export default App;
