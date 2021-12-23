import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <Container id="about">
      <Title>ABOUT ME</Title>
      <Wrapper>
        <Selfie src="/images/selfie.png" alt="my selfie" />
        <Info>
          <h3>
            I'm self-taught <span>Front-End Developer</span>.
          </h3>
          <p>I specialize in building websites with React.</p>
          <p>I aim to build modern-looking websites.</p>
          <p>
            I take into account W3C, optimization, conventions and code
            semantics.
          </p>
        </Info>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 3rem 0;
`;
const Title = styled.h2`
  text-align: center;
  color: transparent;
  font-size: 1.5rem;
  -webkit-text-stroke: 1px ${(props) => props.theme.text};
  letter-spacing: 10px;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
  @media (min-width: 1440px) {
    font-size: 4.5rem;
  }
`;
const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    text-align: left;
  }
`;
const Selfie = styled.img`
  max-width: 100%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 300;
  width: 60%;
  h3 {
    font-weight: 300;
    @media (min-width: 1440px) {
      font-size: 2rem;
    }
  }
  span {
    font-weight: 500;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
`;

export default About;
