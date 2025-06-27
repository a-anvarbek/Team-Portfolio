import React from 'react';
import styled from 'styled-components';
import profileImg from '../../images/profile.png';
import { Button, IconButton, AppBar, Toolbar, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Projects from "./Projects";
import Footer from "./Footer";
import About from "../about/About";
import { useNavigate } from "react-router";




import Products1 from "./images/products1.png";
import Products2 from "./images/products2.png";
import Products3 from "./images/products3.png";





const PageWrapper = styled.div`
  scroll-behavior: smooth;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0f0f0f;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 120px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 8rem 2rem 3rem;
  }
`;

const NameTopCorner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #111;
  text-align: center;
  color: #fff;
  scroll-margin-top: 100px;

  h2 {
    color: #d5ff60;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;




// projects

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

const ButtonRow2 = styled.div`
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


const Home = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);




  return (
    <>
    <PageWrapper>
     
      <Wrapper>
        <TextSection>
          <Title>
            Hello, I’m <span> Azizbek Abdukhakimov</span>
          </Title>
          <Subtitle>
            I’m a frontend developer. I build modern, responsive, and user-friendly websites using technologies like HTML, CSS, JavaScript, and React.
          </Subtitle>
          <ButtonRow>
            <Button variant="contained" sx={{ backgroundColor: '#d5ff60', color: '#000', fontWeight: 'bold' }}>Contact Me</Button>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'white', backgroundColor: '#1c1c1c', '&:hover': { backgroundColor: '#333' } }}>
              <i className="fab fa-linkedin-in"></i>
            </IconButton>
            <IconButton href="https://github.com/abdukhakimovdev" target="_blank" sx={{ color: 'white', backgroundColor: '#1c1c1c', '&:hover': { backgroundColor: '#333' } }}>
              <i className="fab fa-github"></i>
            </IconButton>
          </ButtonRow>
        </TextSection>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <ProfileWrapper>
            <ProfileImage src={profileImg} alt="Azizbek Abdukhakimov" />
          </ProfileWrapper>
        </div>
      </Wrapper>
    </PageWrapper>














    



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
            <ButtonRow2>
              <a href="#">LIVE DEMO ↗</a>
              <a href="#">SEE ON GITHUB 🟢</a>
            </ButtonRow2>

          </ProjectInfo>
        </ProjectWrapper>
      </WidthCtn>
    </ProjectsCtn>


    <About />


    </>
  );
};

export default Home;
