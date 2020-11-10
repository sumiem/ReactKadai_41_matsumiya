import React from "react";
import styled from "styled-components";
import imgPath1 from "./img/about_04.jpg";
import imgPath2 from "./img/about_03.jpg";
import imgPath3 from "./img/about_02.jpg";
import imgPath4 from "./img/about_01.jpg";

// import "./style.css";
// import ImgPath from './img';

// const About_h1 = styled.h1`
// color: yellow;
// `;

// const About_h2 = styled.ｈ２`
/* text-align: center;
    color: white;
    font-size: 30px;
    padding-top: 30px; */
// `;
// const AboutText = styled.p`
// font-size: 16px;
// color: #222222;
// `;

// const aboutText1 = styled.p`
// padding-top: 40px;
// font-size: 16px;
// `;
// const aboutText2 = styled.p`
// padding-top: 40px;
// font-size: 16px;
// `;
// const aboutText3 = styled.p`
// padding-top: 40px;
// `;
// const aboutText4 = styled.p`
// padding-top: 40px;
// padding-bottom: 60px;
// `;

const About = () => {
  return (
    <>
      <div className="AboutAll" id="AboutAll">
        <h1 className="AboutYellow">ABOUT</h1>
        <h2 className="AboutH2">チーズアカデミーについて</h2>
        <div className="aboutText">
          <p className="aboutText1">
            チーズアカデミーは、チーズ職人養成学校です。
          </p>
          <p className="aboutText2">
            チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。
            <br />
            <br />
            そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。
          </p>
          <p className="aboutText3">
            そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。
          </p>
          <p className="aboutText4">
            卒業後、チーズ自給自足のバックアップはもちろんのこと、
            <br />
            チーズ職人への就職・転職もサポートします。
          </p>
        </div>
        <div className="image">
        <img src={imgPath1} className="image" alt="" />
        <img src={imgPath2} className="image" alt="" />
        <img src={imgPath3} className="image" alt="" />
        <img src={imgPath4} className="image" alt="" />
      </div>
      </div>
    </>
  );
};

export default About;
