import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

import { Outlet } from 'react-router-dom'

function App() {
  const numero = "244922254236"

  const icon = {
    fontSize: '2rem',
    position: 'fixed',
    left: '0',
    zIndex: '1000',
    bottom: '2rem',
    color: '#fff',
    backgroundColor: '#25D366',
    padding: '.5rem',
    width: '3.2rem',
    height: '3.2rem',
    cursor: 'pointer',
    borderRadius: '0 4px 4px 0',
    border: '1px solid #e6e6e6',
    boxShadow: '0 0 5px 3px rgba(0,0,0, .1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <>
      <Header />
      <Outlet />
      <Link to={`https://wa.me/${numero}?text=${encodeURIComponent('Olá, gostaria de mais informações sobre o pacote de viagens...')}`} target="_blank" rel="noopener noreferrer" style={icon}> <FaWhatsapp/> </Link>
      <Footer />
    </>
  )
}

export default App
