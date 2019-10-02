import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchForm from '../SearchForm/SearchForm'
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
      currentTopic: local
    }
  }

  selectTopic = (topic) => {
    this.setState({
      currentTopic: topic
    })
  }

  render () {
    return (
      <div className="app">
        <SearchForm currentTopic={this.state.currentTopic}/>
        <h1>What's New</h1>
        <Menu items={Object.keys(this.state)} selectTopic={this.selectTopic}
        state={this.state}/>
        <NewsContainer news={this.state.currentTopic}/>
      </div>
    );
  }
}

export default App;
