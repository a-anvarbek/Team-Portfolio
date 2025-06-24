import React from 'react';
import styled from 'styled-components';
import profileImg from '../../images/profile.png';
import { Button, IconButton, AppBar, Toolbar, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const PageWrapper = styled.div`
  scroll-behavior: smooth;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(120deg, #0d0d0d, #1a1a1a);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8rem 6rem 4rem;
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

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const menuItems = [
     { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Work', href: '#work' },
    { text: 'Contact', href: '#contact' },
  ];

  const renderButtons = () =>
    menuItems.map((item) => (
      <Button
        key={item.text}
        href={item.href}
        variant="outlined"
        sx={{
          borderColor: '#d5ff60',
          color: '#d5ff60',
          '&:hover': {
            borderColor: '#c6ec4f',
            backgroundColor: '#1a1a1a',
          },
          fontWeight: 'bold',
          textTransform: 'none',
        }}
      >
        {item.text}
      </Button>
    ));

  return (
    <PageWrapper>
      <AppBar position="fixed" sx={{ background: '#0d0d0d', boxShadow: '0 0 10px #111' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <NameTopCorner>
            <MiniImage src={profileImg} alt="Azizbek" />
            <NameText>Azizbek Abdukhakimov</NameText>
          </NameTopCorner>

          {isMobile ? (
            <>
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#d5ff60' }}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List sx={{ width: 200 }}>
                  {menuItems.map((item) => (
                    <ListItem button component="a" href={item.href} key={item.text} onClick={() => setDrawerOpen(false)}>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '1rem' }}>{renderButtons()}</div>
          )}
        </Toolbar>
      </AppBar>

      <Wrapper>
        <TextSection>
          <Title>
            Hello, I’m <span>Azizbek Abdukhakimov</span>
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
  );
};

export default Home;
