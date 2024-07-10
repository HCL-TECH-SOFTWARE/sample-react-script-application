import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './components/App.jsx';

render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('dxroutingroot'));