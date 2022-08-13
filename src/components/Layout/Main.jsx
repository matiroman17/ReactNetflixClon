import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Header from '../header';
import FirtsStep from './FirtsStep'
import CustomAccordeon from './CustomComponents/CustomAccordeon';
import boxshot from '../../img/boxshot.png'
import ninos from '../../img/niños.png'

import mobile from '../../img/mobile-0819.jpg'
import './mainCss.css';


const StyleBox = styled(Box)({
    position: "relative",
    top: "-140px",
    backgroundColor: "#000",
    border: "2px solid rgba(255,255,255,.25)",
    borderRadius: 8,
    width: "80%"
});
export default function Main() {
    return (
        <Box  >
            <Container className='firstMainElement' maxWidth="xl">
                <Header />
                <Box sx={{ padding: "150px" }}>
                    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
                        <Typography variant="h2" align="center"> Películas y series ilimitadas y mucho más.</Typography>
                        <br />
                        <Typography variant="h4" align="center">Disfruta donde quieras. Cancela cuando quieras</Typography>
                    </div>
                    <br />
                    <FirtsStep />
                </Box>
            </Container>
            <br />
            <Divider sx={{ height: "10px", backgroundColor: "#334" }} />
            <Container className='secondMainElement'>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <br /><br /><br /><br /><br />
                        <Typography variant="h3">Disfruta en tu TV.</Typography>
                        <Typography variant="h6">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</Typography>
                    </Grid>
                    <Grid item xs={5} sx={{ textAlign: "center" }}>
                        <div className='vid'>
                            <video loop autoPlay muted>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                            </video>
                        </div>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Container>
            <br />
            <Divider sx={{ height: "10px", backgroundColor: "#334" }} />
            <Container className='secondMainElement'>
                <Grid container>
                    <Grid item xs={1} />

                    <Grid item xs={5}>
                        <img src={mobile} alt="" />
                        <StyleBox>
                            <Grid container >
                                <Grid item xs={2}>
                                    <img className="imageBox" src={boxshot} alt="" />
                                </Grid>
                                <Grid item xs={5}>
                                    <div className='txtBox'>
                                        <Typography variant="subtitle1">Stranger Things</Typography>
                                        <Typography variant="subtitle2" color="#0071eb">Descargando...</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sx={{ textAlign: "right" }}>
                                    <img className="imageBox" src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"} alt="" />
                                </Grid>
                            </Grid>
                        </StyleBox>
                    </Grid>
                    <Grid item xs={6}>
                        <br /><br /><br /><br /><br />
                        <Typography variant="h3">Descarga tus series para verlas offline.</Typography>
                        <Typography variant="h6">Guarda tu contenido favorito y tendrás siempre algo para ver.</Typography>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Container>
            <Divider sx={{ height: "10px", backgroundColor: "#334" }} />
            <Container className='secondMainElement'>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <br /><br /><br /><br /><br />
                        <Typography variant="h3">Disfruta donde quieras.</Typography>
                        <Typography variant="h6">Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra.</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <div className='vidDevice'>
                            <video loop autoPlay muted>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                            </video>
                        </div>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Container>
            <br />
            <Divider sx={{ height: "10px", backgroundColor: "#334" }} />
            <Container className='secondMainElement'>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <img src={ninos} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <br /><br /><br /><br /><br />
                        <Typography variant="h3">Crea perfiles para niños.</Typography>
                        <Typography variant="h6">Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</Typography>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Container>
            <Divider sx={{ height: "10px", backgroundColor: "#334" }} />
            <Container className='secondMainElement' maxWidth="md">
                <Typography variant="h3" align="center">Preguntas frecuentes</Typography>
                <br />
                <CustomAccordeon />
                <br />
                <FirtsStep />
            </Container>
            <br />
            <Divider sx={{ height: "10px", backgroundColor: "#334" }} />
        </Box>
    )
}
