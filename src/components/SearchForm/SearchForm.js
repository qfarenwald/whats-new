import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitSearch = event => {
    event.preventDefault();
    let searchInput = event.target.value.toUpperCase();
    return this.props.currentTopic.filter((topic) => {
      return topic.headline.toUpperCase().includes(searchInput)
    })
  }

  render () {
    return (
      <form>
        <input
        type="text"
        placeholder="Search"
        name="search"
        value={this.state.search}
        onChange={event => this.handleChange(event)}
        />
        <button value={this.state.search} onClick={event => this.submitSearch(event)}>Search</button>
      </form>
    )
  }
}

export default SearchForm;
