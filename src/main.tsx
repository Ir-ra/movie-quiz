import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter as Router, } from 'react-router-dom'

const BASE_URL = '/movie-quiz/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename={BASE_URL}>
      <App />
    </Router>
  </React.StrictMode>,
)
