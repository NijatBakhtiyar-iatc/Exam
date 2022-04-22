import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { GetProvider } from './components/getContext'

ReactDOM.render(
  <React.StrictMode>
    <GetProvider>
      <App />
    </GetProvider >
  </React.StrictMode>
  ,
  document.getElementById('root')
)
