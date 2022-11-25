import React from 'react'
import ReactDOM from 'react-dom/client'
import AppHeader from './AppHeader'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AppRoute from './AppRoute'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'CookieRun Bold',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
        <MuiThemeProvider theme={theme}>
            <AppHeader />
            <AppRoute />
        </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
