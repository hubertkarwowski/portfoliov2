import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
const Footer = () => {
  return (
    <Container>
      <p>
        Created with <AiFillHeart /> by Hubert Karwowski © 2021
      </p>
    </Container>
  );
};

const Container = styled.footer`
  background-color: ${(props) => props.theme.body};
  text-align: center;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};
`;

export default Footer;
