import React, { Component } from 'react';
import backgroundPhoto from '../assets/images/toppage.png';
import './Default.scss';

class Default extends Component {
  render() {
    return (
      <div className="default">
        <span>Default!</span>
        {/* <img src={backgroundPhoto} alt="Background" /> */}
        <input
          // value={this.state.searchValue}
          type="search"
          className="find"
          placeholder="Find Candidate..."
          // onChange={this.search.bind(this)}
        />
      </div>
    );
  }
}

export default Default;
