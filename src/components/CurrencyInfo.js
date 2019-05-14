import React from 'react';


const CurrencyInfo = props => {

    const CurrencyInfo = <center>{`Data on currencies come from the European Central Bank of ${props.date}`}</center>
    let rate = 0

    if (props.rate === undefined) {
        rate = 0
    } else {
        rate = props.rate.toFixed(4)
    }

    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-md-7 offset-md-9">
                        {props.rate ? `Rate: ${rate}` : null}
                    </div>

                </div>
            </div>
            <div className="CurrencyInfo">

                {props.date ? CurrencyInfo : null}
            </div>
        </>
    )
}

export default CurrencyInfo