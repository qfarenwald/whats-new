import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
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

  selectTopic = (e) => {
    console.log(e.target.id)

  }

  render () {
    return (
      <div className="app">
        <h1>What's New</h1>
        <Menu items={Object.keys(this.state)} selectTopic={this.selectTopic}/>
        <NewsContainer news={this.state.local} />
      </div>
    );
  }
}

export default App;
