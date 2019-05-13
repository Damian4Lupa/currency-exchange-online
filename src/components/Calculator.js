import React, { Component } from 'react';
import exchange from './img/exchange.svg'
import SelectIHave from './SelectIHave'
import SelectIWant from './SelectIWant'
import CurrencyInfo from './CurrencyInfo'



class Calculator extends Component {


    state = {
        valueIHaveIsChanged: false,
        valueIWantIsChanged: false,
        rotateButton: false,
        currencyIHaveIsChanged: false,
        currencyIWantIsChanged: false,
        currencyIHave: "EUR",
        currencyIWant: "USD",
        valueIHave: "100",
        valueIWant: "",
        currency: [],
        date: "",
        rate: 1.1245,
        symbolIHave: " €",
        symbolIWant: " $"
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



    //Sprawdzanie zmian walut i value
    componentDidMount() {
        this.downloadCurrency()

        setTimeout(() => {
            this.conversion()
        }, 200)

        console.log("zamontowano")
    }

    componentDidUpdate() {
        if (this.state.valueIHaveIsChanged) {
            this.conversion()
            this.setState({
                valueIHaveIsChanged: false
            })
        }
        if (this.state.currencyIWantIsChanged) {
            this.conversion()
            this.setState({
                currencyIWantIsChanged: false
            })
        }
        if (this.state.currencyIHaveIsChanged) {
            this.downloadCurrency()
            this.setState({
                currencyIHaveIsChanged: false
            })
            setTimeout(() => {
                this.conversion()
            }, 500)
        }
        if (this.state.valueIWantIsChanged) {
            this.reverseConversion()
            this.setState({
                valueIWantIsChanged: false
            })
        }
        if (this.state.currencyIHaveIsChanged === true && this.state.valueIHaveIsChanged === true) {
            this.downloadCurrency()
            this.setState({
                currencyIHaveIsChanged: false,
                valueIHaveIsChanged: false
            })
            setTimeout(() => {
                this.conversion()
            }, 500)
        }

    }




    //zapytanie serwera o aktualną walutę
    downloadCurrency = () => {
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
            .then(() => {
                let rate = this.state.currency[this.state.currencyIWant]
                this.setState({
                    rate
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
            valueIWant: event.target.value,
            valueIWantIsChanged: true
        })
    }

    changeValueIsChanged = () => {
        this.setState({
            valueIHaveIsChanged: true
        })
    }

    handleChangeValueIHave = event => {
        this.setState({
            valueIHave: event.target.value
        })
        setTimeout(this.changeValueIsChanged, 1500)
    }

    handleButtonRotate = () => {
        this.setState({
            rotateButton: true,
            currencyIHaveIsChanged: true,
            valueIHaveIsChanged: true,
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
            currencyIHave: id,
            currencyIHaveIsChanged: true
        })
    }

    handleSelectIHave = event => {
        this.setState({
            currencyIHave: event.target.value,
            currencyIHaveIsChanged: true
        })
    }

    handleSelectIWant(id) {
        this.setState({
            currencyIWant: id,
            currencyIWantIsChanged: true
        })
    }

    handleSelectIWant2 = event => {
        this.setState({
            currencyIWant: event.target.value,
            currencyIWantIsChanged: true
        })
    }

    //PRZELICZENIE KWOTY
    conversion = () => {
        let { valueIHave, currency, currencyIWant } = this.state
        let rate = currency[currencyIWant]
        let valueIWant = (valueIHave * rate).toFixed(2)
        console.log("przeliczono")

        this.setState({
            valueIWant,
            rate
        })
    }

    reverseConversion = () => {
        let { valueIWant, currency, currencyIWant } = this.state
        let rate = currency[currencyIWant]
        let valueIHave = (valueIWant / rate).toFixed(2)

        this.setState({
            valueIHave
        })
    }

    render() {

        const btn_class = this.state.rotateButton ? "rotate" : "exchange"

        const { valueIHave, valueIWant, currencyIHave, currencyIWant, date, rate, symbolIWant } = this.state

        // const flag_IHave = `./img/flags/${currencyIHave}.png`
        // const flag_IWant = `./img/flags/${currencyIWant}.png`


        let showValueIWant = valueIWant.concat(symbolIWant)
        console.log(showValueIWant)

        return (
            <>
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
                                    <input type="text" className="form-control form-control-lg" id="colFormLabelLg" value={valueIWant} onChange={this.handleChangeValueIWant} placeholder={showValueIWant} />

                                </div>
                            </div>





                        </div>
                    </div>
                </div>
                <CurrencyInfo date={date} rate={rate} />
            </>
        )
    }

}

export default Calculator