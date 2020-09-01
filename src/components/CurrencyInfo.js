import React from 'react';

const CurrencyInfo = props => {

    const CurrencyInfo = <center><p>{`Data on currencies come from the European Central Bank of ${props.date}`}</p></center>
    let rate = 0

    if (props.rate === undefined) {
        rate = 0
    } else {
        rate = props.rate.toFixed(4)
    }

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-7 offset-md-9">
                        {props.rate ? `Rate: ${rate}` : null}
                    </div>
                </div>
            </section>
            <section className="CurrencyInfo">
                {props.date ? CurrencyInfo : null}
            </section>
        </>
    )
}

export default CurrencyInfo