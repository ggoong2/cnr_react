import React from 'react';
import styled from 'styled-components';

const HeadBlock = styled.div`
  background: black;
  height: 200px;
`;

function Head() {
    // const name = this.props.name;
    // const imgUrl = "/img/head/"+name+".png";

  return (
    <HeadBlock>
      <div className="container">
            <div id="navbar">
                <ul>
                    {/* <img className='' src = {imgUrl} alt = {name} title= {name} /> */}
                    <a href =""><img src={require('../img/head/header_about-us-over.png')} /></a>
                    <a href =""><img src={require('../img/head/header_our-work-over.png')} /></a>
                    <a href =""><img src={require('../img/head/header_portfolio-over.png')} /></a>
                    <a href ="components/ContactUs.js"><img src={require('../img/head/header_contact-us-over.png')} /></a>
                    <img src={require('../img/head/header_tel.png')} />
                    <a href =""><img src={require('../img/head/header_goodbox.png')} /></a>
                    <a href =""><img src={require('../img/head/header_blog.png')} /></a>
                </ul>
            </div>
        </div>
    </HeadBlock>
  );
}

export default Head;

