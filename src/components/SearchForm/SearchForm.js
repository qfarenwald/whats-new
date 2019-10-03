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
    let searchInput = this.state.search.toUpperCase();

    this.props.search(searchInput)

    this.setState({
      search: ''
    })
  }

  render () {
    return (
      <form className="searchForm">
        <input
        type="text"
        placeholder="Enter Keyword"
        name="search"
        value={this.state.search}
        onChange={event => this.handleChange(event)}
        />
        <button type="submit" value={this.state.search} onClick={(event) => this.submitSearch(event)}>Search</button>
      </form>
    )
  }
}

export default SearchForm;
