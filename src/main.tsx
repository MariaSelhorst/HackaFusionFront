import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './providers/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes'
import 'rsuite/dist/rsuite.min.css';
import "./styles/global.css"

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
