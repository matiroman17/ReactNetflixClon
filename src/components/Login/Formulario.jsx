import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../img/Netflix_2015_logo.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import '../style.css';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: "#e50914",
  textTransform: "none",
  marginTop: 20,
  padding: 10,
  '&:hover': {
    backgroundColor: "#e50914",
  },
}));
const StyleTextField = styled(TextField)({
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: 4,

  '& .MuiInputBase-input': {
    padding: 8
  },
  '& .MuiInputLabel-root': {
    color: "#8c8c8c",
    marginLeft: "18px",
    marginTop: "2px"
  },
  '& .MuiInputBase-root-MuiInput-root:before': {
    borderBottom: 0
  },
});
const StyleCheckBox = styled(Checkbox)({
  color: "#fff",
  '&.Mui-checked': {
    color: "#999"
  },
});


export default function Formulario() {
  return (
    <div className='fondo0'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <Toolbar>
            <Container sx={{ width: "80%" }}>
              <img src={logo} className="logo" />
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',

            backgroundColor: "rgba(0,0,0,.75)",
            borderRadius: 1
          }}
        >

          <Box component="form" noValidate sx={{ p: 7 }}>
            <Typography variant="h5">
              Inicia sesión
            </Typography>
            <StyleTextField
              margin="normal"
              variant="standard"
              color="warning"
              required
              fullWidth
              id="email"
              label="Email o número de teléfono"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <StyleTextField
              margin="normal"
              variant="standard"
              color="warning"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
            >
              Iniciar Sesión
            </ColorButton>

            <FormControlLabel
              control={<StyleCheckBox value="remember" defaultChecked />}
              label="Recuerdáme" />
            <Link to="/LoginHelp" className='links'>¿Necesitas ayuda?</Link>
            <Box>
              <Grid container spacing={0.5} columns={{ xs: 8 }}>
                <Grid item xs={1} sx={{ paddingLeft: "0px !important" }}>
                  <FacebookIcon fontSize="large" color="primary" />
                </Grid>
                <Grid item xs={7}>
                  <Link to="#" className='links'>Iniciar sesión con Facebook</Link>
                </Grid>
              </Grid>
              <p className='txtGray' style={{ fontSize: "14px" }}>
                ¿Primera vez en Netflix?
                <Link to="/" className='links' style={{ padding: "5px" }}>Suscríbete ahora.</Link>
              </p>
              <div className='txtGray'>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
                Más info. </div>
            </Box>

          </Box>
        </Box>
      </Container>
    </div>
  )
}
