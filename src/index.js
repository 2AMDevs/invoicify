import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import * as serviceWorker from './serviceWorker'

import './sass/main.scss'

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'),
)

// unregister() to register() below.
serviceWorker.unregister()

// @todo @aashutoshrathi we need fav
// @todo @aashutoshrathi review the manifest
