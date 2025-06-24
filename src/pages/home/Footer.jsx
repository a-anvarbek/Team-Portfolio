import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const FooterSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 100px 120px;
  background-color: #0f0f0f;
  color: white;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 100px 24px;
  }
`;

const Left = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;

  a {
    color: #d4ff77;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;

  svg {
    font-size: 24px;
    color: #d4ff77;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Copy = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 20px;
`;

const Right = styled.div`
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Input = styled.input`
  padding: 12px;
  background-color: #1c1c1c;
  border: none;
  color: white;
  border-radius: 6px;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  background-color: #1c1c1c;
  border: none;
  color: white;
  border-radius: 6px;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 12px;
  width: 120px;
  padding: 10px 20px;
  background-color: #d4ff77;
  border: none;
  border-radius: 30px;
  color: black;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default function Footer() {
  return ( 


    <>
    <Navbar />


    <FooterSection>
      <Left>
        <Title>LET’S CONNECT</Title>
        <Text>
          Say hello at <a href="mailto:robertgarcia@gmail.com">robertgarcia@gmail.com</a>
        </Text>
        <Text>
          For more info, here’s my <a href="#">resume</a>
        </Text>
        <Icons>
          <FaLinkedin />
          <FaGithub />
          <FaXTwitter />
          <FaInstagram />
        </Icons>
        <Copy>&copy; 2023 Robert Garcia</Copy>
      </Left>

      <Right>
        <Form>
          <Label>Name</Label>
          <Input type="text" placeholder="John Doe" />
          <Label>Email</Label>
          <Input type="email" />
          <Label>Subject</Label>
          <Input type="text" />
          <Label>Message</Label>
          <Textarea rows="4" />
          <SubmitButton>SUBMIT</SubmitButton>
        </Form>
      </Right>
    </FooterSection>
    </>
  );
}
