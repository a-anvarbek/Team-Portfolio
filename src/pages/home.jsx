import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/profile.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(120deg, #0d0d0d, #1a1a1a);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 6rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
`;

const NameTopCorner = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    flex-direction: column;
  }
`;

const MiniImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #d5ff60;
`;

const NameText = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: #d5ff60;
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 1024px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  span {
    color: #d5ff60;
    display: inline-block;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #bbbbbb;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ContactButton = styled.button`
  background-color: #d5ff60;
  color: #000;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #c6ec4f;
    transform: scale(1.05);
  }
`;

const IconButton = styled.a`
  background-color: #1c1c1c;
  color: white;
  border-radius: 50%;
  padding: 0.75rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.1);
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const ProfileWrapper = styled.div`
  background: #181818;
  padding: 2rem;
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 30px rgba(213, 255, 96, 0.15);
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
`;

const Home = () => {
  return (
    <Wrapper>
      <NameTopCorner>
        <MiniImage src={profileImg} alt="Azizbek" />
        <NameText>Azizbek Abdukhakimov</NameText>
      </NameTopCorner>

      <TextSection>
        <Title>
          Hello, I’m <span>Azizbek Abdukhakimov</span>
        </Title>
        <Subtitle>
          I’m a frontend developer. I build modern, responsive, and user-friendly websites using technologies like HTML, CSS, JavaScript, and React.
        </Subtitle>
        <ButtonRow>
          <ContactButton>Contact Me</ContactButton>
          <IconButton href="https://linkedin.com" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </IconButton>
          <IconButton href="https://github.com/abdukhakimovdev" target="_blank">
            <i className="fab fa-github"></i>
          </IconButton>
        </ButtonRow>
      </TextSection>

      <ImageSection>
        <ProfileWrapper>
          <ProfileImage src={profileImg} alt="Azizbek Abdukhakimov" />
        </ProfileWrapper>
      </ImageSection>
    </Wrapper>
  );
};

export default Home;
