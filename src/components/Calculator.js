import React, { Component } from 'react';
import exchange from './img/exchange.svg'



class Calculator extends Component {
    state = {
        rotateButton: false
    }

    handleButtonRotate = () => {
        this.setState({
            rotateButton: !this.state.rotateButton
        })
    }

    render() {

        const btn_class = this.state.rotateButton ? "rotated" : "exchage"

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
                                <input type="text" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
                            </div>
                        </div>

                        <div className="col-2 exchange">
                            <center>
                                <button type="button" className="btn btn-link btn" onClick={this.handleButtonRotate}>
                                    <img className={btn_class} src={exchange} alt="" height="82px" />
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