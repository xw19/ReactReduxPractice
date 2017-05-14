import React, { Component } from 'react';
import NavbarTop from './NavbarTop'
import Articles from './Articles'
import AddArticle from './AddArticle'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTop />
        <AddArticle />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
