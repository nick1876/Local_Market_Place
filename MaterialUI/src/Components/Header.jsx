import React from 'react';
import { Avatar, Badge, Divider, IconButton, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import styled from 'styled-components';
import "./Css file/header.css";
import SideDrawer from './SideDrawer';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const RightSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const Header = () => {
  return (
    <>
      <StyledToolbar>
        <SideDrawer>
        <IconButton>
          <MenuIcon color='secondary'/>
        </IconButton>
        </SideDrawer>
        <Typography variant='h4'>Blogging website</Typography>
        <RightSection>
          <IconButton>
            <Badge color="secondary" badgeContent={2}>
              <NotificationsNoneOutlinedIcon color='secondary' />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar alt="Remy Sharp" src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" />
          </IconButton>
        </RightSection>
      </StyledToolbar>
      <Divider orientation="horizontal" flexItem />
      <Toolbar>
        Yeaah, tumh sikh gayee
      </Toolbar>
    </>
  );
}

export default Header;
