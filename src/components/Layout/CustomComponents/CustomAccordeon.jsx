import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../mainCss.css'

export default function CustomAccordeon() {
    return (
        <div>
            <Accordion sx={{ backgroundColor: "#303030" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="#fff" />}>
                    <Typography variant="h5" className="acorddeonText">
                        ¿Qué es Netflix?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" className="acorddeonText">
                        <p>
                            Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
                        </p>
                        <p>
                            Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#303030" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" className="acorddeonText">
                        ¿Cuánto cuesta Netflix?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" className="acorddeonText">
                        Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 429 hasta $ 1.199 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#303030" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" className="acorddeonText">
                        ¿Dónde puedo ver Netflix?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" className="acorddeonText">
                        <p>
                            Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.
                        </p>
                        <p>
                            Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.
                        </p>
                    </Typography>

                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#303030" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" className="acorddeonText">
                        ¿Cómo cancelo?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" className="acorddeonText">
                        Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#303030" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" className="acorddeonText">
                        ¿Qué puedo ver en Netflix?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" className="acorddeonText">
                        Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#303030" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" className="acorddeonText">
                        ¿Es bueno Netflix para los niños?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" className="acorddeonText">
                        <p>
                            La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.
                        </p>
                        <p>
                            Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div >
    )
}
