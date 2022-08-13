import React from "react";
import Footer from './components/footer';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from './routes';

const outerTheme = createTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h5: {
      fontWeight: 700,
      fontSize: "34px"
    }
  },
  palette: {
    background: {
      default: '#000',
    },
    text: {
      primary: "#fff"
    }
  },
});

function App() {
  return (

    <ThemeProvider theme={outerTheme}>
      <CssBaseline />
      <div>
        <Routes>
        </Routes>
      </div>
      <br /><br />
      <div>
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
