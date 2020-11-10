import React from "react";
import styled from "styled-components";
// import ImgPathH from "./img/header_logo.png";

const navMenu = styled.li`

    text-align: center;
    display: inline;
    padding: 50px 25px;
    font-size: 21px;
`;

const HeaderNav = () => {
  return (<>
  <div className="navMenu">
    <ul >
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#course">COURSE</a></li>
        <li><a href="#news">NEWS</a></li>
        <li><a href="#access">ACCESS</a></li>
        <li><a href="#contact">CONTACT</a></li>
    </ul>
  </div>
  
  </>);
};

export default HeaderNav;
