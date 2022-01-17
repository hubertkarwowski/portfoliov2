import React from "react";
import styled, { keyframes } from "styled-components";

import { zoomIn } from "react-animations";

const Hero = () => {
  return (
    <Container>
      <Heading>
        <h1>FRONT-END DEVELOPER</h1>
        <h2>HUBERT KARWOWSKI</h2>
        <a href="/CV_ANG.pdf" download>
          Download CV
        </a>
      </Heading>
    </Container>
  );
};

const zoomAnimation = keyframes`${zoomIn}`;

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;
const Heading = styled.div`
  animation: 1s ${zoomAnimation};
  h1 {
    font-weight: 300;
  }
  h2 {
    font-weight: 400;
  }
  a {
    margin-top: 1rem;
    background-color: ${(props) => props.theme.background};
    border-radius: 36px;
    display: inline-block;
    cursor: pointer;
    color: ${(props) => props.theme.text};
    font-family: Arial;
    font-size: 20px;
    padding: 14px 43px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #2f6627;
  }
`;

export default Hero;
