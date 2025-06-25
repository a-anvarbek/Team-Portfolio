import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Contact from "../components/Contact";

// === SECTION LAYOUT ===
export const Section = styled.section`
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

export const Left = styled.div`
  flex: 1;
  min-width: 250px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Right = styled.div`
  flex: 2;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// === TEXT STYLES ===
export const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const BigText = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SmallText = styled.p`
  font-size: 16px;
  color: #ccc;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MoreLink = styled.a`
  font-size: 14px;
  color: #d4ff77;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 4px;
  width: fit-content;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

// === BUTTONS & ICONS ===
export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ResumeButton = styled.a`
  background-color: #d4ff77;
  color: #000;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconLink = styled.a`
  color: white;
  font-size: 24px;

  &:hover {
    color: #d4ff77;
  }
`;

// === DIVIDER ===
export const Divider = styled.hr`
  margin: 60px 120px;
  border-color: #333;

  @media (max-width: 768px) {
    margin: 60px 24px;
  }
`;

// === CAPABILITIES SECTION ===
export const SectionTitle = styled.h3`
  font-size: 44px;
  font-weight: 800;
  padding:  120px;

  color: white;

  @media (max-width: 768px) {
    padding: 0 24px;
    font-size: 32px;
  }
`;

export const CapabilityBox = styled.div`
  padding: 0 120px;
  color: #ddd;
  font-size: 18px;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 0 24px;
    font-size: 16px;
  }
`;

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
`;

export const Tag = styled.div`
  padding: 10px 18px;
  background-color: #1f1f1f;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  color: #eee;
`;

// === EXPERIENCE SECTION ===
export const ExperienceBox = styled.div`
  padding: 0 120px 100px;

  @media (max-width: 768px) {
    padding: 0 24px 100px;
  }
`;

export const JobItem = styled.div`
  margin-top: 40px;
`;

export const JobTitle = styled.h4`
  font-size: 22px;
  font-weight: 700;
  color: #f5f5f5;
`;

export const Company = styled.span`
  display: block;
  font-size: 16px;
  color: #d4ff77;
  margin-top: 4px;
`;

export const JobPeriod = styled.span`
  float: right;
  font-size: 16px;
  color: #bbb;
`;

export const JobDesc = styled.p`
  color: #ccc;
  font-size: 17px;
  margin-top: 12px;
  line-height: 1.7;
`;

export default function AboutMe() {
  return (
    <>
      <Navbar />
      
      <Section>
        <Left>
          <Title>ABOUT ME</Title>
        </Left>
        <Right>
          <BigText>
            I am a front-end developer based in Sydney. <br />
            Has Mechanical Engineering background.
          </BigText>
          <SmallText>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to
            focus on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </SmallText>
          <ButtonGroup>
            <ResumeButton href="#">DOWNLOAD RESUME</ResumeButton>
            <IconLink href="#"><FaLinkedin /></IconLink>
            <IconLink href="#"><FaGithub /></IconLink>
          </ButtonGroup>
        </Right>
      </Section>

      <Divider />

      <SectionTitle>MY CAPABILITIES</SectionTitle>
      <CapabilityBox>
        <p>
          I am always looking to add more skills. Morbi egestas neque eu blandit
          fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus
          faucibus tristique ut et dolor.
        </p>
        <SkillTags>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
          <Tag>JAVASCRIPT</Tag>
          <Tag>JQUERY</Tag>
          <Tag>ACCESSIBILITY</Tag>
          <Tag>FIGMA</Tag>
          <Tag>TAILWIND CSS</Tag>
        </SkillTags>
      </CapabilityBox>

      <Divider />

      <SectionTitle>MY EXPERIENCE</SectionTitle>
      <ExperienceBox>
        <JobItem>
          <JobTitle>
            Freelance Developer <JobPeriod>Nov 2023 – Present</JobPeriod>
          </JobTitle>
          <JobDesc>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </JobDesc>
        </JobItem>
        <JobItem>
          <JobTitle>
            Front-End Intern <Company>Roos Tech</Company>
            <JobPeriod>Sep 2023 – Nov 2023</JobPeriod>
          </JobTitle>
          <JobDesc>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </JobDesc>
        </JobItem>
      </ExperienceBox>
      
      <Contact />
    </>
  );
}
