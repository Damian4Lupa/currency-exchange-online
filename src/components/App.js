import React from "react";
import "../styles/App.css";
import "../styles/media.css";
import Header from "./Header";
import Calculator from "./Calculator";
import Offer from "./Offer";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Calculator />
      <Offer />
      <Footer />
    </>
  );
};

export default App;
