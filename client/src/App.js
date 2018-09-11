import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"> This works op </p>
        <div id="box">Hold content.</div>
        <img className="img-responsive" src={"https://www.smirnoff.com/en-us/wp-content/uploads/2015/02/WrappedInRubies-SmallGrid.jpg"} alt="logo"/>


<section>
  <p id="meh">Meh I am just annoyed.</p>
</section>
      </div>
    );
  }
}

export default App;
