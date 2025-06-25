import React from 'react';
import styled from 'styled-components';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import profileImg from '../../images/profile.png'; // mos path bo'lishi kerak
import { useNavigate } from "react-router";

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
  cursor: pointer;
`;

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const menuItems = [
    { text: 'About', href: '/about' },
    { text: 'PROJECTS', href: '/projects' },
    { text: 'Contact', href: '/footer' },
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

    const navigate = useNavigate();
  return (
    
    <AppBar position="fixed" sx={{ background: '#0d0d0d', boxShadow: '0 0 10px #111' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <NameTopCorner>
          <MiniImage src={profileImg} alt="Azizbek" />
          <NameText onClick={() => navigate("/")}>Azizbek Abdukhakimov</NameText>
        </NameTopCorner>

        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#d5ff60' }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 200 }}>
                {menuItems.map((item) => (
                  <ListItem
                    button
                    component="a"
                    href={item.href}
                    key={item.text}
                    onClick={() => setDrawerOpen(false)}
                  >
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
  );
};

export default Navbar;
