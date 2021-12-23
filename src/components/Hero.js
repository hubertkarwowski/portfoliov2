import React from "react";
import styled, { keyframes } from "styled-components";

import { zoomIn } from "react-animations";

const Hero = () => {
  return (
    <Container>
      <Heading>
        <h1>FRONT-END DEVELOPER</h1>
        <h2>HUBERT KARWOWSKI</h2>
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
`;

export default Hero;
