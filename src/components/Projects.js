import React from "react";
import styled from "styled-components";
import Project from "./Project";
const Projects = () => {
  return (
    <Wrapper id="projects">
      <Title>PROJECTS</Title>
      <Container>
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
        />
        <Project
          title="Starbucks Clone"
          text="I built starbucks clone."
          img="/images/starbucks.jpg"
          github="https://github.com/hubertkarwowski/starbucks-clone"
          link="https://fir-hosting-starbucks.web.app/"
        />
        <Project
          title="Shop"
          text="Shop project created during course with react, redux, styled components, react-router-dom and firebase."
          img="/images/shop.jpg"
          github="https://github.com/hubertkarwowski/shop"
          link="https://crwn-shop2001.herokuapp.com/"
        />
        <Project
          title="Sunnyside Landing page"
          text="I tried to build a site as fast as i can with react and styled-components, site works for 375px and 1440px."
          img="/images/sunnyside.jpg"
          github="https://github.com/hubertkarwowski/sunnyside"
          link="https://fir-hosting-sunnyside.web.app/"
        />
        <Project
          title="Weather App"
          text="I built that app to test my JS skills, also implemented auto location and charts."
          img="/images/weather.jpg"
          github="https://github.com/hubertkarwowski/weather-app-js"
          link="https://loving-lamport-3cd2aa.netlify.app/"
        />
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Title = styled.h3`
  margin-bottom: 3rem;
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

const Wrapper = styled.section`
  padding: 4rem 1rem;
  background-color: ${(props) => props.theme.body};
`;

export default Projects;
