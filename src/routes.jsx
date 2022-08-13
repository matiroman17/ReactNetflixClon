import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Main from './components/Layout/Main'
import LoginHelp from './components/Login/LoginHelp';
import Formulario from './components/Login/Formulario';
import LoginHelpForm from './components/Login/LoginHelpForm';


export default function routes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route exact path="/LoginHelp" element={<LoginHelp />} />
                <Route exact path="/" element={<Main />} />
                <Route exact path="/LoginHelpForm" element={<LoginHelpForm />} />
                <Route exact path="/Login" element={<Formulario />} />

            </Routes >
        </BrowserRouter>
    )
}
