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
    currency: [],
    date: ""
  }

  componentDidMount() {
    const API = "https://api.exchangeratesapi.io/latest"

    fetch(API)
      .then(response => {
        // console.log(response)
        if (response.ok) {
          return response
        }
        throw Error(response.status)
        // jeśli response.ok jest false tworzymy błąd i domyśle jest przekazywany do catch. Przekazujemy w nawiasie numer błędu 
      })
      .catch(error => alert(`\nWystąpił błąd ${error}`))
      // catch uruchamia się jeśli pierwszy then zgłasza błąd
      .then(response => response.json())
      // z odpowiedzi z serwera konwertujemy to na format json
      .then(data => {
        const currency = data.rates
        const date = data.date
        // console.log(currency, date)

        this.setState({
          currency,
          date
        })
      })
  }

  render() {
    const { date, currency } = this.state
  
    return (
      <div>
        <Header />
        <Calculator currency={currency} date={this.state.date} />
        <CurrencyInfo date={date} />
        <Offer />
        <Footer />
      </div>
    );
  }
}

export default App;




