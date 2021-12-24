import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqnoqqg");
  return (
    <Container id="contact">
      <Title>CONTACT ME</Title>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <input id="name" type="text" name="name" />
          <label>Full Name</label>
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </InputContainer>
        <InputContainer>
          <input id="email" type="email" name="email" />
          <label>E-mail</label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </InputContainer>
        <InputContainer>
          <textarea type="text" id="message" name="message" />
          <label>Message</label>
        </InputContainer>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Wrapper>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          {state.succeeded ? <h4>Message sent!</h4> : null}
        </Wrapper>
      </Form>
    </Container>
  );
};

const Container = styled.section`
  background-color: ${(props) => props.theme.background};
  text-align: center;
  padding: 2rem 0;
  color: ${(props) => props.theme.text};
`;

const Title = styled.h2`
  margin-bottom: 3rem;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  button {
    color: #fff;
    background-color: #e74c3c;
    outline: none;
    border: 0;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 25px;
  width: 60%;
  label {
    position: absolute;
    top: -12px;
    left: 0px;
    transition: all 0.5s ease-in-out;
  }
  input,
  textarea {
    resize: none;
    border: 0;
    border-bottom: 1px solid #555;
    background-color: transparent;
    width: 100%;
    padding: 8px 0 5px 0;
    font-size: 16px;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid #e74c3c;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.background} inset;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export default Contact;
