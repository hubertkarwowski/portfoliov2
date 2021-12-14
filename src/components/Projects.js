import React from "react";
import styled from "styled-components";
import Project from "./Project";
const Projects = () => {
  return (
    <Container>
      <Project title="Amko" />
    </Container>
  );
};

const Container = styled.section`
  background-color: ${(props) => props.theme.background};
  padding: 4rem 0;
`;

export default Projects;
