import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" name="search" placeholder="Bar Search..." /><button id="search"><strong>Search</strong></button>
        </div>
    )
  }
}

export default Search