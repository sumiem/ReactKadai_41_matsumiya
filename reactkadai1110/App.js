import React from "react";
// import Iframe from './IframeComm';
import "./styles.css";
import styled from "styled-components";
import HeaderImg from "./HeaderImg";
import HeaderNav from "./HeaderNav";
import Main from "./Main";
import About from "./About";
import Course from "./Course";
import News from "./News";
import Access from "./Access";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <header>
        <HeaderImg />
        <HeaderNav />
      </header>
      <Main />
      {/* <div className="wrap">  */}
      <About />
      <Course />
      <News />
      <Access />
      <Contact />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default App;
