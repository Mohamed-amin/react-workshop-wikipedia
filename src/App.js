import React, { Component } from 'react';
import logo from './logo.svg';
import Results from './components/Results';
import Search from './components/Search';
import './App.css';

class App extends Component {
  state = { restult: [] }
  search = term => {
    console.log(term)
    fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${term}&limit=5`)
    .then(res => res.json())
    .then(results => {
        this.setState({ results })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Wikipedia</h1>
        </header>
        <section className="App-content">
          <Search search={this.search}/>
          <Results results={this.state.results}/>
        </section>
      </div>
    );
  }
}

export default App;
