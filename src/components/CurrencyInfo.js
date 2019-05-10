import React from 'react';


const CurrencyInfo = props => {

    return (
        <div className="CurrencyInfo">
            <center>{`Data on currencies come from the European Central Bank of ${props.date}`}</center>
        </div>
    )
}

export default CurrencyInfo