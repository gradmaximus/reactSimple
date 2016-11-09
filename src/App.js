import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';


class App extends Component {

  constructor() {
    super();
    this.state = {
      truth: false,
    }
  }
  clicker(x) {
    alert('was clicked ' + x);
  }
  render() {
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <Header headerprop="TEST" onClick={(x)=>this.clicker(x)}/>
      <Footer footerprop="&copy; 2016" />

      </div>
    );
  }
}

export default App;
