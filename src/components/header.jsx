import * as React from 'react';
import {Link } from "react-router-dom";

import logo from '../img/Netflix_2015_logo.png';
import './style.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: "#e50914",
  textTransform: "none",
  marginTop: 16,
  padding:3,
  borderRadius: 3,
  '&:hover': {
    backgroundColor: "#e50914",
  },
}));

function header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <Container sx={{width:"80%"}}>
            <img src={logo} className="logo" />
          </Container>
          <Link to="/Login" className='links'>
            <ColorButton >Iniciar sesión</ColorButton>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}



export default header
