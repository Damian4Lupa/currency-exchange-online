import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import Footer from './Footer'
import Offer from './Offer'
import Calculator from './Calculator';
import CurrencyInfo from './CurrencyInfo'

class App extends Component {
  state = {
    date: ""
  }


  //metoda która zwraca aktualną datę 


  render() {
    const { date } = this.state

    return (
      <div>
        <Header />
        <Calculator />
        <CurrencyInfo date={date} />
        <Offer />
        <Footer />
      </div>
    );
  }
}

export default App;




