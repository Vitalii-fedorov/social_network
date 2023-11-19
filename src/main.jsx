import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))
 function Index () {
      return (
          <React.StrictMode>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </React.StrictMode>
      )
  }
root.render(<Index />)