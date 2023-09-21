import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} />
            </BrowserRouter>
        </React.StrictMode>,
    )
}
