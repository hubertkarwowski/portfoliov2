import React from "react";
import styled from "styled-components";
const Project = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
};

const Container = styled.section``;

export default Project;
