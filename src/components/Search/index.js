import React, { Component } from 'react';
import './styles.css';

class Search extends Component {

  state = { searchTerm : '' }
  onSearch = () => {
    this.props.search(this.state.searchTerm);
  }
  onChange = e => {
    const { value } = e.target;
    this.setState({ searchTerm: value });
  }
  render(){
    return (
      <div className="card">
          <div className="search">
            <input type="input"
              value={this.state.searchTerm}
              className="search_input"
              onChange={this.onChange}
              autoFocus={true}/>
            <button className="search_submit" onClick={this.onSearch} >search</button>
          </div>
      </div>
    )
  }
}

export default Search;
