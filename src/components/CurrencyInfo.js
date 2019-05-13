import React from 'react';


const CurrencyInfo = props => {

    const CurrencyInfo = <center>{`Data on currencies come from the European Central Bank of ${props.date}`}</center>

    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-md-7 offset-md-9">
                        {props.rate ? `Rate: ${props.rate}` : null}
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