import React from "react";
import styled from "styled-components";
import Project from "./Project";
const Projects = () => {
  return (
    <Wrapper>
      <Title>PROJECTS</Title>
      <Container>
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
          grid="project1"
        />
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
          grid="project2"
        />
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
          grid="project3"
        />
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
          grid="project4"
        />
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
          grid="project5"
        />
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
          grid="project6"
        />
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
          grid="project7"
        />
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
          grid="project8"
        />
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.jpg"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
          grid="project9"
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
  @media (min-width: 1440px) {
    font-size: 4.5rem;
  }
`;

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: ${(props) => props.theme.body};
`;

export default Projects;
