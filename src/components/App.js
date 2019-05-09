import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import Footer from './Footer'
import Calculator from './Calculator';

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Header />
        <Calculator />
        <h1>działa</h1>
        <Footer />
      </div>
    );
  }
}

export default App;




