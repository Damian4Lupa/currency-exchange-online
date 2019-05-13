import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import Footer from './Footer'
import Offer from './Offer'
import Calculator from './Calculator';

class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <Calculator />
        <Offer />
        <Footer />
      </div>
    );
  }
}

export default App;




