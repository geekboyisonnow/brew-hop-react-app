import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div class="tab">
        
    <button class="tablinks" onclick="openCity(event, 'London')"><a href="breweries.html"><strong>Brewery Hop</strong></a></button>
    <button class="tablinks" onclick="openCity(event, 'Paris')"><a href="dive.html"><strong>Dive Hop</strong></a></button>
    <button class="tablinks" onclick="openCity(event, 'Tokyo')"><a href="pub.html"><strong>Pub Crawl</strong></a></button>
  
      </div>
    )
  }
}
