import React from 'react';
import wallet from './img/wallet.jpg'

const Footer = () => {

    return (
        <div className="container">
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <center>
                            <img className="mb-2" src={wallet} alt="" width="70" height="70" />

                            <small className="d-block mb-3 text-muted">© 2019</small>
                        </center>
                    </div>
                    <div className="col-6 col-md">
                        <header>
                        <h5>Currency Exchange</h5>
                        </header>
                        <nav aria-labelledby="footer-navigation-currency-exchange-info">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Exchange rates</a></li>
                            <li><a className="text-muted" href="#">How do you exchange currency?</a></li>
                            <li><a className="text-muted" href="#">Costs and time of the transaction</a></li>
                            <li><a className="text-muted" href="#">Currency tools</a></li>
                            <li><a className="text-muted" href="#">Tools for developers</a></li>
                            <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                        </nav>
                    </div>
                    <div className="col-6 col-md">
                    <header>
                        <h5>Payments</h5>
                        </header>
                        <nav aria-labelledby="footer-navigation-payments">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">How to pay?</a></li>
                            <li><a className="text-muted" href="#">For partners</a></li>
                            <li><a className="text-muted" href="#">Pay later</a></li>
                            <li><a className="text-muted" href="#">Micropayments in games</a></li>
                        </ul>
                        </nav>
                    </div>
                    <div className="col-6 col-md">
                    <header>
                        <h5>About</h5>
                        </header>
                        <nav aria-labelledby="footer-navigation-about">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Team</a></li>
                            <li><a className="text-muted" href="#">Locations</a></li>
                            <li><a className="text-muted" href="#">Privacy</a></li>
                            <li><a className="text-muted" href="#">Terms</a></li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer