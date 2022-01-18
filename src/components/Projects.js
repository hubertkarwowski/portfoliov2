import React from "react";
import styled from "styled-components";
import Project from "./Project";
const Projects = () => {
  return (
    <Wrapper id="projects">
      <Title>MY PROJECTS</Title>
      <Container>
        <Project
          title="HappyPizza Shop"
          text="HappyPizza is my shop built from scratch using MERN stack, Redux-Toolkit, Chakra-UI and Stripe ."
          img="/images/PizzaShop.png"
          github="https://github.com/hubertkarwowski/happypizza"
          link="https://elegant-bohr-6a5aa5.netlify.app/"
        />
        <Project
          title="LinkedIn clone"
          text="LinkedIn clone built with React, styled-components, Redux and connected to a firebase database with login page and authorization"
          img="/images/linkedin.png"
          github="https://github.com/hubertkarwowski/linkedin-clone"
          link="https://linkedin-clone-3a8ee.web.app/"
        />
        <Project
          title="Scoot Website"
          text="This is a multi-page website created with react, react-router and styled-components and smooth animations."
          img="/images/scoot.png"
          github="https://github.com/hubertkarwowski/Scoot"
          link="https://fir-hosting-scoot.web.app/"
        />

        <Project
          title="CRWN | SHOP"
          text="CRWN | Shop is a website with login functionality created with React, Redux, styled-components and Firebase."
          img="/images/shop.png"
          github="https://github.com/hubertkarwowski/shop"
          link="https://crwn-shop2001.herokuapp.com/"
        />
        <Project
          title="Old Portfolio"
          text="This was my first portfolio website. Everything here is build by me with my design and code."
          img="/images/oldportfoli.png"
          github="https://github.com/hubertkarwowski/portfolio"
          link="https://fir-hosting-portfolio-bca68.web.app/"
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
