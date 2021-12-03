import React from "react";

const CurrencyInfo = (props) => {
  const DataInfo = () => {
    let monthArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth();
    let day = time.getDate();
    let daySufix =
      day >= 10 && day <= 20
        ? "th"
        : (day % 10) == 1
        ? "st"
        : day == 2
        ? "nd"
        : day == 3
        ? "rd"
        : "th";
    let date = `${day}${daySufix} ${monthArray[month]} ${year}.`;
    return date;
  };

  const CurrencyInfo = (
    <center>
      <p>{`The currencies have been updated from the Free Currency Conversion, last transfer: ${DataInfo()}`}</p>
    </center>
  );
  let rate = 0;

  if (props.rate === undefined) {
    rate = 0;
  } else {
    rate = props.rate.toFixed(4);
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
      <article className="CurrencyInfo">{CurrencyInfo}</article>
    </>
  );
};

export default CurrencyInfo;
