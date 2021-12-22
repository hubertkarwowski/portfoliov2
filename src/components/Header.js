import React, { useState } from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";

const Header = (props) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };
  const icon =
    props.theme === "light" ? (
      <BsMoonStarsFill size={40} />
    ) : (
      <WiDaySunny size={40} color={"white"} />
    );

  const logo =
    props.theme === "light" ? (
      <img src="images/logo.png" alt="minimalistic logo" />
    ) : (
      <img src="images/logowhite.png" alt="minimalistic logo" />
    );

  const hamburger =
    props.theme === "light" ? (
      <BiMenu size={40} />
    ) : (
      <BiMenu size={40} color={"#F2F5F7"} />
    );

  const close =
    props.theme === "light" ? (
      <MdClose size={40} />
    ) : (
      <MdClose size={40} color={"#F2F5F7"} />
    );

  return (
    <Container>
      <Logo>{logo}</Logo>
      <Menu>
        <Toggler onClick={changeTheme}>{icon}</Toggler>
        <a href="#">PROJECTS</a>
        <a href="#">TECHNOLOGIES</a>
        <a href="#">ABOUT ME</a>
        <a href="#">CONTACT</a>
      </Menu>
      <Button onClick={() => setBurgerStatus(true)}>{hamburger}</Button>
      <MobileNav show={burgerStatus}>
        <Wrap>
          <ButtonMobile onClick={() => setBurgerStatus(false)}>
            {close}
          </ButtonMobile>
          <Toggler onClick={changeTheme}>{icon}</Toggler>
        </Wrap>
        <MobileMenu>
          <a href="#">PROJECTS</a>
          <a href="#">TECHNOLOGIES</a>
          <a href="#">ABOUT ME</a>
          <a href="#">CONTACT</a>
        </MobileMenu>
      </MobileNav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.1);
  z-index: 16;
  a {
    color: ${(props) => props.theme.text};
    position: relative;
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      background-color: ${(props) => props.theme.text};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;
const Logo = styled.div`
  img {
    height: 50px;
    @media (min-width: 768px) {
      height: 70px;
    }
  }
`;
const Menu = styled.div`
  display: none;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
const Button = styled.div`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
const ButtonMobile = styled(Button)`
  margin: auto 0;
  padding: 1rem 0;
`;
const Toggler = styled.div`
  cursor: pointer;
`;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 60%;
  z-index: 16;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.2s ease;
  font-size: 1.2rem;
`;
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 1rem;
`;

const Wrap = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
