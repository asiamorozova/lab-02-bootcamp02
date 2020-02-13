import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './ImageTag';
import images from './images.js';
import Header from './Header.js';
import request from 'superagent';
import HornedList from './HornedList.js';




class App extends Component {



  render() {



    return (
      <main>
        <Header />
        <HornedList />
      </main>

    );
  }
}

export default App;
