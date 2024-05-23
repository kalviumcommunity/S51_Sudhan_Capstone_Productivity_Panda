import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ParentComponentProvider } from './Components/ParentComponent.jsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParentComponentProvider>
      <ToastContainer/>
      <App />
    </ParentComponentProvider>
  </React.StrictMode>,
)
