import React from 'react'
import ReactDOM from 'react-dom/client'
import AppHeader from './AppHeader'
import { BrowserRouter } from "react-router-dom";
import AppRoute from './AppRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
        <AppHeader />
        <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
)
