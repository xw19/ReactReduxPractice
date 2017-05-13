import React, { Component } from 'react';
import NavbarTop from './NavbarTop'
import Articles from './Articles'
import AddArticle from './AddArticle'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTop />
        <AddArticle />
        <Articles />
      </div>
    );
  }
}

export default App;
