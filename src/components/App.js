import React, { Component } from 'react';
import '../styles/App.css'
import '../styles/media.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import Footer from './Footer'
import Offer from './Offer'
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Calculator />
        <Offer />
        <Footer />
      </>
    );
  }
}

export default App;




