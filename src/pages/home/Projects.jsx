import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../home/Footer";

import Products1 from "./images/products1.png";
import Products2 from "./images/products2.png";
import Products3 from "./images/products3.png";

const ProjectsCtn = styled.div`
  width: 100%;
  padding: 60px 20px;
  background-color: #0f0f0f;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  @media (max-width: 1024px) {
    padding: 100px 24px;
   
  }
`;

const WidthCtn = styled.div`
  max-width: 1224px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #cfcfcf;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-bottom: 80px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageBox = styled.div`
  flex: 1;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 12px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Badge = styled.div`
  background-color: #262626;
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 16px;
  margin-bottom: 10px;
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ProjectDesc = styled.p`
  font-size: 16px;
  color: #ccc;
  margin-bottom: 40px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

const InfoTitle = styled.h4`
  font-size: 14px;
  color: #ccc;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const InfoTable = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 20px 0;

  div {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    padding-bottom: 8px;
    border-bottom: 1px solid #222;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  span:first-child {
    color: #777;
  }

  span:last-child {
    color: #fff;
    @media (max-width: 480px) {
      margin-top: 4px;
    }
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  a {
    font-size: 14px;
    color: #ccff00;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Projects = () => {
  return (
    <>


    <Navbar />



    <ProjectsCtn>
      <WidthCtn>
        <SectionTitle>FEATURED PROJECTS</SectionTitle>
        <SectionSubtitle>
          Here are some of the selected projects that showcase my passion for front-end development.
        </SectionSubtitle>

        <ProjectWrapper>
          <ImageBox>
            <Badge>Conceptual Work</Badge>
            <Img src={Products1} alt="Project 1" />
          </ImageBox>
          <ProjectInfo>
            <ProjectTitle>Promotional landing page for our favorite show</ProjectTitle>
            <ProjectDesc>
              Teamed up with a designer to breathe life into a promotional webpage for our beloved show,
              Adventure Time. Delivered a fully responsive design with dynamic content capabilities...
            </ProjectDesc>
            <InfoTitle>Project Info</InfoTitle>
            <InfoTable>
              <div><span>Year</span><span>2023</span></div>
              <div><span>Role</span><span>Front-end Developer</span></div>
            </InfoTable>
            <ButtonRow>
              <a href="#">LIVE DEMO ↗</a>
              <a href="#">SEE ON GITHUB 🟢</a>
            </ButtonRow>
          </ProjectInfo>
        </ProjectWrapper>

        <ProjectWrapper>
          <ImageBox>
            <Img src={Products2} alt="Project 2" />
          </ImageBox>
          <ProjectInfo>
            <ProjectTitle>Blog site for World News</ProjectTitle>
            <ProjectDesc>
              Mastered CSS Grid complexities in building an innovative news homepage...
            </ProjectDesc>
            <InfoTitle>Project Info</InfoTitle>
            <InfoTable>
              <div><span>Client</span><span>World News</span></div>
              <div><span>Year</span><span>2022</span></div>
              <div><span>Role</span><span>Front-end Developer</span></div>
            </InfoTable>
            <ButtonRow>
              <a href="#">VIEW PROJECT ↗</a>
            </ButtonRow>
          </ProjectInfo>
        </ProjectWrapper>

        <ProjectWrapper>
          <ImageBox>
            <Badge>Challenge</Badge>
            <Img src={Products3} alt="Project 3" />
          </ImageBox>
          <ProjectInfo>
            <ProjectTitle>E-commerce product page</ProjectTitle>
            <ProjectDesc>
              Successfully crafted an engaging product page featuring a dynamic lightbox gallery...
            </ProjectDesc>
            <InfoTitle>Project Info</InfoTitle>
            <InfoTable>
              <div><span>Year</span><span>2022</span></div>
              <div><span>Role</span><span>Front-end Developer</span></div>
            </InfoTable>
            <ButtonRow>
              <a href="#">LIVE DEMO ↗</a>
              <a href="#">SEE ON GITHUB 🟢</a>
            </ButtonRow>
          </ProjectInfo>
        </ProjectWrapper>
      </WidthCtn>
    </ProjectsCtn>
    <Footer />
    </>
  );
};

export default Projects;
