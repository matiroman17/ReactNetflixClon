import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: "#e50914",
    textTransform: "none",
    marginTop: 16,
    borderRadius:0,
    padding: 14,
    '&:hover': {
        backgroundColor: "#e50914",
    },
}));
const StyleTextField = styled(TextField)({
    backgroundColor: "#fff",
    color: "#fff",
    '& .MuiInputBase-input': {
        padding: 8
    },
    '& .MuiInputLabel-root': {
        color: "#000",
        marginLeft: "13px",
        marginTop: "2px"
    },
    '& .MuiInputBase-root-MuiInput-root:before': {
        borderBottom: 0
    },
});
export default function FirtsStep() {
    return (
        <div>
            <Box component="form" noValidate sx={{ p: 2 }}>
                <Typography variant="h6">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</Typography>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={5}>
                        <StyleTextField
                            margin="normal"
                            variant="standard"
                            fullWidth
                            color="warning"
                            size="normal"
                            required
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <ColorButton
                            type="submit"
                            
                            size='large'
                            variant="contained"
                        >
                            Comenzar
                        </ColorButton>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>

            </Box>
        </div>
    )
}
