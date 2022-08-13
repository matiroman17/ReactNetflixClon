import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import '../style.css';
import CssBaseline from '@mui/material/CssBaseline';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
  textTransform: "none",
  marginTop: 20,
  padding: 10,
  '&:hover': {
    backgroundColor: "#2490fd",
  },
}));

const StyleTextField = styled(TextField)({

  borderRadius: 4,
  '& .MuiInputBase-root': {
    color: "#000",

  },
  '& .MuiInputBase-input': {
    padding: 11
  }
});

export default function LoginHelp() {
  const text1 = 'Te enviaremos un mensaje de texto con el código de verificación para que restablezcas tu contraseña. Pueden aplicar cargos de mensajes de texto y datos.'
  const text2 = 'Te enviaremos un email con instrucciones sobre cómo restablecer tu contraseña.';

  const countrys = [
    {
      value: 'Argentina',
      label: '+54',
    },
    {
      value: 'Uruguay',
      label: '+598',
    },
  ];
  const [labelButton, SetLabelButton] = useState('un mail');
  const [labelText, SetLabelText] = useState('Te enviaremos un email con instrucciones sobre cómo restablecer tu contraseña.')

  const handleChange = function (event) {
    SetLabelButton(event.target.value);
    if (event.target.value === 'un mensaje de texto') {
      SetLabelText(text1)
    } else {
      SetLabelText(text2)
    }
  };

  return (
    
    <div className='fondo1'>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#fff' }}>
          <Box component="form" noValidate sx={{ p: 4 }}>
            <Typography variant="h5" color={"#000"}>
              Olvidaste tu email/contraseña
            </Typography>
            <Typography variant="subtitle1" color={'#000'}>
              ¿Cómo te gustaría recuperarla?
            </Typography>

            <RadioGroup defaultValue="un mail" onChange={handleChange} sx={{marginLeft:"20px"}}>
              <FormControlLabel value="un mail" control={<Radio />} label="Email" sx={{ color: "#000" }} />
              <FormControlLabel value="un mensaje de texto" control={<Radio />} label="Mensaje de Texto (SMS)" sx={{ color: "#000" }} />
            </RadioGroup>

            <Typography variant="body2" color={"#000"}>
              {labelText}
            </Typography>
            <br />
            {(labelButton === 'un mail') ? <StyleTextField fullWidth id="mail" required variant="outlined" placeholder="nombre@ejemplo.com" /> :
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <StyleTextField sx={{ width: "35%" }} select variant="outlined">
                  {countrys.map((option) => (<MenuItem key={option.value} value={option.value} sx={{ color: "#000" }}>
                    {option.label}
                  </MenuItem>
                  ))}
                </StyleTextField>
                <StyleTextField fullWidth id="sms" name="sms" required variant="outlined" />
              </Box>
            }

            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
            >
              <Typography variant={"h6"}>Enviar {labelButton}</Typography>
            </ColorButton>
            <br /> <br />
            <Link to="/LoginHelpForm" className="blueLinks">
              <Typography variant="body1" >No me acuerdo de mi email ni de mi teléfono </Typography>
            </Link>
          </Box>
        </Box>
        <br />
        <Typography variant="body2" color="#757575">
          Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. Más info.
          <p>
            La información recopilada por Google reCAPTCHA está sujeta a la Política de privacidad y a las Condiciones del servicio de Google, y se utiliza para proporcionar, mantener y mejorar el servicio de reCAPTCHA, así como para fines generales de seguridad (Google no la utiliza para personalizar publicidad).
          </p>
        </Typography>
      </Container>
    </div>
  )
}
