import React from "react";
import safety from "./img/safety.jpg";
import working from "./img/working.jpg";
import cheaper from "./img/cheaper.jpg";

const Offer = () => {
  return (
    <section className="container marketing">
      <hr className="featurette-divider"></hr>

      <article className="row featurette middle">
        <div className="col-md-7">
          <header>
            <h2 className="featurette-heading">
              How it's working?{" "}
              <span className="text-muted">Check us out.</span>
            </h2>
          </header>
          <p className="lead">
            You register an account on our website. You get one main account and
            you can choose as many sub accounts as you need. You send a transfer
            in the selected currency to the main account. The system will
            automatically provide the appropriate sub-account.You approve the
            exchange rate and get a return transfer.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={working}
            alt=""
            width="500"
            height="500"
          />
        </div>
      </article>

      <hr className="featurette-divider" />

      <article className="row featurette middle">
        <div className="col-md-7 order-md-2">
          <header>
            <h2 className="featurette-heading">
              Safety.{" "}
              <span className="text-muted">
                This is the most important for us.
              </span>
            </h2>
          </header>
          <p className="lead">
            Each transaction is supervised by a team of experienced specialists.
            All currency exchange transactions are supervised and manually
            confirmed by our experts. Thanks to this, you can be sure that your
            money is safe. Our team is over 100 people - we are happy to help.
            Do you have any questions? Contact the Customer Service Office.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={safety}
            alt=""
            width="500"
            height="500"
          />
        </div>
      </article>

      <hr className="featurette-divider" />

      <article className="row featurette middle">
        <div className="col-md-7">
          <header>
            <h2 className="featurette-heading">
              Save money. <span className="text-muted">Do it cheaper.</span>
            </h2>
          </header>
          <p className="lead">
            Fees are reduced to a minimum! You do not pay any bank charges.
            Using the offer of online currency changers, you buy a currency
            around 10% cheaper than when shopping in any bank. Compare us with
            the banks and create an account today.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={cheaper}
            alt=""
            width="500"
            height="500"
          />
        </div>
      </article>
    </section>
  );
};

export default Offer;
