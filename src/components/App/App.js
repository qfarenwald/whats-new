import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
    }
  }

  render () {
    return (
      <div className="app">
        <h1>What's New</h1>
        <NewsContainer news={this.state.local} />      
      </div>
    );
  }
}

export default App;
