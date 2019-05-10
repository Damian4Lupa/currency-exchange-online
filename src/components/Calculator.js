import React, { Component } from 'react';
import exchange from './img/exchange.svg'



class Calculator extends Component {
    state = {
        rotateButton: false,
        valueHave: "100",
        valueWant: "",
    }

    data = [
        { id: "EUR", title: "Euro", symbol: "€" },
        { id: "BGN", title: "Euro", symbol: "€" },
        { id: "NZD", title: "Euro", symbol: "€" },
        { id: "ILS", title: "Euro", symbol: "€" },
        { id: "RUB", title: "Euro", symbol: "€" },
        { id: "CAD", title: "Euro", symbol: "€" },
        { id: "USD", title: "Euro", symbol: "€" },
        { id: "PHP", title: "Euro", symbol: "€" },
        { id: "CHF", title: "Euro", symbol: "€" },
        { id: "ZAR", title: "Euro", symbol: "€" },
        { id: "AUD", title: "Euro", symbol: "€" },
        { id: "JPY", title: "Euro", symbol: "€" },
        { id: "TRY", title: "Euro", symbol: "€" },
        { id: "HKD", title: "Euro", symbol: "€" },
        { id: "MYR", title: "Euro", symbol: "€" },
        { id: "THB", title: "Euro", symbol: "€" },
        { id: "HRK", title: "Euro", symbol: "€" },
        { id: "NOK", title: "Euro", symbol: "€" },
        { id: "IDR", title: "Euro", symbol: "€" },
        { id: "DKK", title: "Euro", symbol: "€" },
        { id: "CZK", title: "Euro", symbol: "€" },
        { id: "HUF", title: "Euro", symbol: "€" },
        { id: "GBP", title: "Euro", symbol: "€" },
        { id: "MXN", title: "Euro", symbol: "€" },
        { id: "KRW", title: "Euro", symbol: "€" },
        { id: "ISK", title: "Euro", symbol: "€" },
        { id: "SGD", title: "Euro", symbol: "€" },
        { id: "BRL", title: "Euro", symbol: "€" },
        { id: "PLN", title: "Euro", symbol: "€" },
        { id: "INR", title: "Euro", symbol: "€" },
        { id: "RON", title: "Euro", symbol: "€" },
        { id: "CNY", title: "Euro", symbol: "€" },
        { id: "SEK", title: "Euro", symbol: "€" },
    ]


    handleButtonChange = () => {
        this.setState({
            rotateButton: false
        })
    }

    handleButtonRotate = () => {
        this.setState({
            rotateButton: true
        })
        setTimeout(this.handleButtonChange, 1000)
    }

    render() {
        const { valueHave, valueWant } = this.state
        let btn_class = this.state.rotateButton ? "rotate" : "exchange"

        return (
            <div className="alarmInfo">
                <div className="container">

                    <div className="row">
                        <div className="col-5">
                            <h4>Currency I Have:</h4>
                            <select className="custom-select custom-select-lg mb-3">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className="lg mb-3">

                                <input type="text" className="form-control form-control-lg" id="colFormLabelLg" placeholder={valueHave} value={valueHave} />

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
                            <select className="custom-select custom-select-lg mb-3">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <div className="lg mb-3">
                                <input type="text" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
                            </div>
                        </div>





                    </div>
                </div>
            </div>

        )
    }
}

export default Calculator