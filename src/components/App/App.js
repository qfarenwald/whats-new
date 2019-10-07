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
    this.local = local;
    this.entertainment = entertainment;
    this.health = health;
    this.science = science;
    this.technology = technology;
    this.topics = ['local', 'entertainment', 'health', 'science', 'technology'];
    this.string = 'local';
    this.state = {
      currentTopic: this.local
    };
  };

  selectTopic = (topic) => {
    this.setState({
      currentTopic: this[topic]
    });
    this.string = topic;
  };

  displaySearch = (filteredArray) => {
    this.setState({
      currentTopic: filteredArray
    });
  };

  search = (searchValue) => {
    this.setState({
      currentTopic: this[this.string]
    }, () => {
      this.displaySearch(this.state.currentTopic.filter((topic) => {
       return topic.headline.toUpperCase().includes(searchValue) || topic.description.toUpperCase().includes(searchValue)
     }))
   });
 };

  render () {
    return (
      <div className="app">
        <SearchForm
          currentTopic={this.state.currentTopic}
          search={this.search}
        />
        <h1>The Hub</h1>
        <Menu
          topics={this.topics}
          selectTopic={this.selectTopic}
        />
        <NewsContainer
          news={this.state.currentTopic}
        />
      </div>
    );
  };
};

export default App;
