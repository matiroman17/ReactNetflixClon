import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import FormControl from '@mui/material/FormControl';

import NativeSelect from '@mui/material/NativeSelect';

import InputBase from '@mui/material/InputBase';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    //position: 'relative',
    backgroundColor: "#000",
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
  },
  '& .MuiNativeSelect-icon':{
    color: "#fff"
  }
}));

const FormLang = styled(FormControl)(({ theme }) => ({
  width: 120,
  color: theme.palette.success.main,
  border: "1px solid",
  borderColor: "#333",
  marginTop: "10px"
}));
export default function footer() {
  return (
    <div>
      
      <Container maxWidth={false} disableGutters={true}>
        <Box className="footer" sx={{ backgroundColor: "rgba(0,0,0,.75)" }}>
          <div className='footerContent'>
            <p>¿Preguntas? Llama al 0-800-666-2803 </p>
            <Grid container rowSpacing={0.5} columnSpacing={{xs: 0.5}}>
              <Grid item xs={3}>
                <span className='options'>Preguntas Frecuentes</span>
              </Grid>
              <Grid item xs={3}>
                <span className='options'>Centro de Ayuda</span>
              </Grid>
              <Grid item xs={3}>
                <span className='options'>Términos de Uso</span>
              </Grid>
              <Grid item xs={3}>
                <span className='options'>Privacidad</span>
              </Grid>
              <Grid item xs={3}>
                <span className='options'>Preferencias de Cookies</span>
              </Grid>
              <Grid item xs={3}>
                <span className='options'>Información Corporativa</span>
              </Grid>
            </Grid>

            <FormLang variant="filled">
              <NativeSelect
                input={<BootstrapInput />}
              >
                <option value={10}>Español</option>
                <option value={20}>English</option>
              </NativeSelect>
            </FormLang>
            
          </div>
        </Box>
      </Container>
    </div>
  )
}
