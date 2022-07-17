import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.scss'
import "swiper/css/bundle";
import store from './app/store'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router >
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
