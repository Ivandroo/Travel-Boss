import React from 'react'
import logo from '../assets/icon/trv.png'
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";

import { Link } from 'react-router-dom'


function Footer() {

  const icon = {
    fontSize: '1.3rem',
    color: '#fff',
    margin: '0 1rem',
    padding: '.5rem',
    width: '2.2rem',
    height: '2.2rem',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #e6e6e6',
    boxShadow: '0 0 5px 3px rgba(0,0,0, .1)'
  }

  const button = {
    padding: '.1rem',
    textDecoration: 'none',
    color: '#fff',
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-box main">
            <img src={logo} alt="" />
            <span>Viagem, Turismo e Câmbio</span>
            <div className="social">
              <Link className='social-icon'><FaTiktok style={icon}/></Link>
              <Link to="https://www.tiktok.com/search?q=travel%20boss&t=1743151249568" target="_blank" rel="noopener noreferrer" className='social-icon'><FaFacebookF style={icon} /></Link>
              <Link className='social-icon'><FaInstagram style={icon} /></Link>
            </div>
            
          </div>
          <div className="footer-box">
            <div className='nav-footer'>
              <h2>Link úteis</h2>
              <ul>
                  <li><Link to="/" style={button} onClick={() => document.getElementById('home') ?.scrollIntoView({ behavior: "smooth"})}>Casa</Link></li>
                  <li><Link to="blog" style={button} onClick={() => document.getElementById('blog') ?.scrollIntoView({ behavior: "smooth"})}>Blog</Link></li>
                  <li><Link to="about" style={button} onClick={() => document.getElementById('about') ?.scrollIntoView({ behavior: "smooth"})}>Sobre</Link></li>
                  <li><Link to="contacts" style={button} onClick={() => document.getElementById('contact') ?.scrollIntoView({ behavior: "smooth"})}>Contacto</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-box">
            <h2>Inscreva-se</h2>
            <span>Inscreva-se e fique a par das nossas atualizações</span>
            <div className="footer-subscribe">
              <form action="">
                <input type="email" name="" id="" placeholder='Email' required/>
                <button className='subscribe'><IoIosMail/></button>
              </form>
            </div>
          </div>
        </div>

        <div className="politics">
          <p><a href='#' target='_blank'> Políticas de privacidade.</a></p>
          <p>Desenvolvido pela <a href='#' target='_blank'> Silicom-Tech </a></p>
          <p>© 2026 TravelBoss. All rights reserved.</p>
        </div>
          
        
      </div>
     
    </footer>
  )
}   
export default Footer