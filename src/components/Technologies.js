import React, { Fragment } from "react";
import styled from "styled-components";
import { DiReact, DiCss3, DiSass } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiStyledcomponents } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";

const Technologies = (props) => {
  const iconsTheme =
    props.theme === "light" ? (
      <Fragment>
        <Icon>
          <AiFillHtml5 size={70} />
          <p>HTML</p>
        </Icon>
        <Icon>
          <DiCss3 size={70} />
          <p>CSS</p>
        </Icon>
        <Icon>
          <SiJavascript size={70} />
          <p>JavaScript</p>
        </Icon>
        <Icon>
          <DiReact size={70} />
          <p>React</p>
        </Icon>
        <Icon>
          <SiStyledcomponents size={70} />
          <p>Styled-Components</p>
        </Icon>
        <Icon>
          <FaGitAlt size={70} />
          <p>Git</p>
        </Icon>
        <Icon>
          <DiSass size={70} />
          <p>Sass</p>
        </Icon>
        <Icon>
          <BsBootstrapFill size={70} />
          <p>Bootstrap 5</p>
        </Icon>
      </Fragment>
    ) : (
      <Fragment>
        <Icon>
          <AiFillHtml5 size={70} color={"#F2F5F7"} />
          <p>HTML</p>
        </Icon>
        <Icon>
          <DiCss3 size={70} color={"#F2F5F7"} />
          <p>CSS</p>
        </Icon>
        <Icon>
          <SiJavascript size={70} color={"#F2F5F7"} />
          <p>JavaScript</p>
        </Icon>
        <Icon>
          <DiReact size={70} color={"#F2F5F7"} />
          <p>React</p>
        </Icon>
        <Icon>
          <SiStyledcomponents size={70} color={"#F2F5F7"} />
          <p>Styled-Components</p>
        </Icon>
        <Icon>
          <FaGitAlt size={70} color={"#F2F5F7"} />
          <p>Git</p>
        </Icon>
        <Icon>
          <DiSass size={70} color={"#F2F5F7"} />
          <p>Sass</p>
        </Icon>
        <Icon>
          <BsBootstrapFill size={70} color={"#F2F5F7"} />
          <p>Bootstrap 5</p>
        </Icon>
      </Fragment>
    );
  return (
    <Container>
      <h2>TECHNOLOGIES</h2>
      <Icons>{iconsTheme}</Icons>
    </Container>
  );
};

export default Technologies;

const Container = styled.section`
  background-color: ${(props) => props.theme.background};
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  h2 {
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
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  &:hover {
    gap: 0rem;
  }
  p {
    color: ${(props) => props.theme.text};
    font-weight: 500;
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;
