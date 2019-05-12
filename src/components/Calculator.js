import React, { Component } from 'react';
import exchange from './img/exchange.svg'
import SelectIHave from './SelectIHave'
import SelectIWant from './SelectIWant'



class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rotateButton: false,
            currencyIHave: "EUR",
            currencyIWant: "USD",
            valueIHave: "100",
            valueIWant: "",
            currency: [],
            date: ""
        }
    }



    data = [
        { id: "EUR", title: "Euro", symbol: "€" },
        { id: "BGN", title: "Bulgarian lev", symbol: "лв" },
        { id: "NZD", title: "New Zealand dollar", symbol: "$" },
        { id: "ILS", title: "Israeli new shekel", symbol: "₪" },
        { id: "RUB", title: "Russian ruble", symbol: "₽" },
        { id: "CAD", title: "Canadian Dollar", symbol: "$" },
        { id: "USD", title: "U. S. Dollar", symbol: "$" },
        { id: "PHP", title: "Philippine peso", symbol: "₱" },
        { id: "CHF", title: "Swiss Francs", symbol: "CHF" },
        { id: "ZAR", title: "South African rand", symbol: "R" },
        { id: "AUD", title: "Australian Dollar", symbol: "$" },
        { id: "JPY", title: "Yen", symbol: "¥" },
        { id: "TRY", title: "Turkish lira", symbol: "₺" },
        { id: "HKD", title: "Hong Kong dollar", symbol: "$" },
        { id: "MYR", title: "Malaysian ringgit", symbol: "RM" },
        { id: "THB", title: "Thai baht", symbol: "฿" },
        { id: "HRK", title: "Croatian kuna", symbol: "kn" },
        { id: "NOK", title: "Norwegian Kroners", symbol: "kr" },
        { id: "IDR", title: "Indonesian rupiah", symbol: "Rp" },
        { id: "DKK", title: "Danish Kroners", symbol: "kr" },
        { id: "CZK", title: "Czech Koruna", symbol: "Kc" },
        { id: "HUF", title: "Hungarian forint", symbol: "Ft" },
        { id: "GBP", title: "Pounds Sterling", symbol: "£" },
        { id: "MXN", title: "Mexican Pesos", symbol: "$" },
        { id: "KRW", title: "South Korean won", symbol: "₩" },
        { id: "ISK", title: "Icelandic krona", symbol: "kr" },
        { id: "SGD", title: "Singapore dollar", symbol: "$" },
        { id: "BRL", title: "Brazilian real", symbol: "R$" },
        { id: "PLN", title: "Polish złoty", symbol: "zł" },
        { id: "INR", title: "Indian Rupee", symbol: "₹" },
        { id: "RON", title: "Romanian leu", symbol: "lei" },
        { id: "CNY", title: "Renminbi (China)", symbol: "元" },
        { id: "SEK", title: "Norwegian Kroners", symbol: "kr" },
    ]

    // selectId = ""

    //zapytanie o aktualną walutę
    downloadCurrency() {
        const API = `https://api.ratesapi.io/api/latest?base=${this.state.currencyIHave}`
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

    handleButtonChange = () => {
        this.setState({
            rotateButton: false
        })
    }

    handleChangeValueIWant = event => {
        this.setState({
            valueIWant: event.target.value
        })
    }

    handleChangeValueIHave = event => {
        this.setState({
            valueIHave: event.target.value
        })
    }

    handleButtonRotate = () => {
        this.setState({
            rotateButton: true,
            valueIHave: this.state.valueIWant,
            valueIWant: this.state.valueIHave,
            currencyIHave: this.state.currencyIWant,
            currencyIWant: this.state.currencyIHave,
        })
        setTimeout(this.handleButtonChange, 1000)
    }

    show_SelectIHave = this.data.map(item => (
        <SelectIHave key={item.id} id={item.id} title={item.title} chosen={this.handleSelectIHave(this, item.id)} />))

    show_SelectIWant = this.data.map(item => (
        <SelectIWant key={item.id} id={item.id} title={item.title} chosen={this.handleSelectIWant(this, item.id)} />
    ))

    handleSelectIHave(id) {
        this.setState({
            currencyIHave: id
        })
    }

    handleSelectIHave = event => {
        this.setState({
            currencyIHave: event.target.value
        })
    }

    handleSelectIWant(id) {
        this.setState({
            currencyIWant: id
        })
    }

    handleSelectIWant2 = event => {
        this.setState({
            currencyIWant: event.target.value
        })
    }

    //PRZELICZENIE KWOTY
    conversion() {
        let { valueIHave, currencyIWant, currency } = this.state
        let ratio = currency[currencyIWant]
        let result = (valueIHave * ratio).toFixed(2)
        console.log(`${ratio} - przeliczenie`)

        // this.setState({
        //     valueIWant: result
        // })
    }

    render() {

        const btn_class = this.state.rotateButton ? "rotate" : "exchange"

        const { valueIHave, valueIWant, currencyIHave, currencyIWant } = this.state
        // console.log(`${this.state.currency[currencyIWant]} - render`)     //1.123 - kurs
        // const flag_IHave = `./img/flags/${currencyIHave}.png`
        // const flag_IWant = `./img/flags/${currencyIWant}.png`


        // konstukcja z if - jeśłi coś się zmienia renderuje się
        this.downloadCurrency()


        return (
            <div className="alarmInfo">
                <div className="container">

                    <div className="row">
                        <div className="col-5">
                            <h4>Currency I Have:</h4>

                            <select className="custom-select custom-select-lg mb-3" value={currencyIHave}
                                onChange={this.handleSelectIHave}
                            >
                                {this.show_SelectIHave}
                            </select>


                            <div className="lg mb-3">

                                <input type="text" className="form-control form-control-lg" id="colFormLabelLg" value={valueIHave} onChange={this.handleChangeValueIHave} />

                            </div>
                        </div>

                        <div className="col-2 exchange">
                            <center>
                                <button type="button" className="btn btn-link btn" onClick={this.handleButtonRotate}>
                                    <img className={btn_class} src={exchange} alt="exchange" height="82px" />
                                </button>
                            </center>
                        </div>

                        <div className="col-5">
                            <h4>Currency I Want:</h4>
                            <select className="custom-select custom-select-lg mb-3" value={currencyIWant}
                                onChange={this.handleSelectIWant2}
                            >
                                {this.show_SelectIWant}
                            </select>

                            <div className="lg mb-3">
                                <input type="text" className="form-control form-control-lg" id="colFormLabelLg" value={valueIWant} onChange={this.handleChangeValueIWant} placeholder={valueIWant} />
                                {/* {valueIWant ? this.conversionValueIWant() : null} */}
                            </div>
                        </div>





                    </div>
                </div>
            </div>

        )
    }
}

export default Calculator