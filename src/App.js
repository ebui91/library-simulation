import React, { Component } from 'react';
import router from './router.js';
// import axios from 'axios';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        { router }
      </div>
    );
  }
}

export default App;
