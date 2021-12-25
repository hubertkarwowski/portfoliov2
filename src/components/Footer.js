import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
const Footer = (props) => {
  const color = props.theme === "light" ? "black" : "white";

  return (
    <Container>
      <Wrapper>
        <p>
          <MdAlternateEmail color={color} /> hubert.karwowski01@gmail.com
        </p>
        <p>
          <BsPhone color={color} /> 572 938 418
        </p>
      </Wrapper>
      <p>
        Created with <AiFillHeart color={color} /> by Hubert Karwowski © 2021
      </p>
    </Container>
  );
};

const Container = styled.footer`
  font-weight: 300;
  background-color: ${(props) => props.theme.body};
  text-align: center;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: ${(props) => props.theme.text};
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    font-size: 1.5rem;
    svg {
      font-size: 2rem;
      vertical-align: middle;
    }
  }
`;

const Wrapper = styled.div`
  p {
    margin-top: 1rem;
    vertical-align: middle;
  }
`;

export default Footer;
