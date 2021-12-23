import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
const Project = ({ title, img, github, link, text }) => {
  return (
    <Container>
      <img src={img} alt="project showcase" />
      <Info>
        <h2>{title}</h2>
        <p>{text}</p>
        <Wrapper>
          <a href={github} target="_blank" rel="noreferrer">
            <AiFillGithub size={40} />
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <BsGlobe size={40} />
          </a>
        </Wrapper>
      </Info>
    </Container>
  );
};

const Container = styled.section`
  max-width: 400px;
  max-height: 260px;
  position: relative;
  text-align: center;
  color: ${(props) => props.theme.text};
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h2 {
    text-transform: uppercase;
    font-weight: 300;
  }
  &:hover {
    opacity: 1;
    background-color: ${(props) => props.theme.card};
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  a {
    color: ${(props) => props.theme.text};
    &:hover {
      color: ${(props) => props.theme.textHover};
    }
  }
`;

export default Project;
