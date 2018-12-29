import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Search from './Search';
import Tabs from './Tabs';
import Map from './Map';
import Breweries from './Breweries';
import Dives from './Dives';
import About from './About';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="body">
        <Header />
        <Search />
        <Tabs />
        <Map />
        <Home />
        {/* <Breweries />
        <Dives />
        <Pubs /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
