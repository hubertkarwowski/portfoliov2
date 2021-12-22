import React from "react";
import styled from "styled-components";

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
  h1 {
    font-weight: 300;
  }
  h2 {
    font-weight: 400;
  }
`;

export default Hero;
