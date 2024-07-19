import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './providers/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./styles/global.css"
import Routes from './routes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <Routes/>
    </UserProvider>

    <ToastContainer
      position='top-center'
    />
  </React.StrictMode>,
)
