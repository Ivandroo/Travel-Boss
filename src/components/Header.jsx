import React from 'react'
import { useRef , useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/icon/favicon.ico'

import { FaTiktok, FaFacebookF, FaInstagram, FaStopwatch, FaList } from "react-icons/fa"

function Header(){
    
    const button = {
        marginBottom: '1rem',
        borderBottom: '.1rem solid #e6e6e6'
    }

    const icon = {
        fontSize: '1.3rem',
        color: '#fff',
        backgroundColor: 'transparent',
        margin: '0 1rem',
        padding: '.5rem',
        width: '2.2rem',
        height: '2.2rem',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '1px solid #e6e6e6',
        boxShadow: '0 0 5px 3px rgba(0,0,0, .1)'
    }

    const watch = {
        fontSize: '1.3rem',
        color: '#064970',
        margin: 'auto .5rem',
    }

    const numero = "244922254236"
    const orcamento = "Olá, gostaria de fazer um orçamento para saber qual o valor dos vistos, para uma viagem!"

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleRef = useRef(null);

    const showMenu = () => setMenuOpen(open => !open);


    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (typeof window === 'undefined' || !ref.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
            if (menuOpen && !entry.isIntersecting) {
                setMenuOpen(false); // fecha o menu quando sai da viewport apenas se estava aberto
            }
        }, { threshold: 0.1 });

        observer.observe(ref.current);

        return () => observer.disconnect(); // limpeza
    }, [menuOpen]);

    // Fecha o menu quando a rota muda
    useEffect(() => {
        setMenuOpen(false);
    }, [location?.pathname]);

    // Fecha com ESC quando aberto
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    // Fecha ao clicar fora do menu (quando aberto)
    useEffect(() => {
        if (!menuOpen) return;
        const onDocClick = (e) => {
            if (!ref.current) return;
            if (ref.current.contains(e.target)) return;
            if (toggleRef.current && toggleRef.current.contains(e.target)) return;
            setMenuOpen(false);
        }
        document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, [menuOpen]);

    return(

        <header>
            <div className="header-up">
                <div className="header-box">
                    <img src={logo} alt="" />
                </div>
                <div className="header-box">
                    <span><FaStopwatch style={watch} />08h00 AM - 05h00 PM</span>
                    <a href={`https://wa.me/${numero}?text=${encodeURIComponent(orcamento)}`} target="_blank" rel="noopener noreferrer" ><button className='bugdet'>Obter Orçamento</button></a>
                </div>
            </div>
            <div className="header-container">
                <div className="header-box">
                    <nav>
                        <ul>
                            <li><Link to="/" className='selected'>Casa</Link></li>
                            <li><Link to="blog" className='selected'>Viajar</Link></li>
                            <li><Link to="about" className='selected'>Sobre</Link></li>
                            <li><Link to="contacts" className='selected'>Contacto</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-box">
                    <Link className='social-icon'><FaTiktok style={icon} /></Link>
                    <Link to="https://www.facebook.com/people/Travel-Boss-viagens-e-C%C3%A2mbio/61554085484818/" target="_blank" rel="noopener noreferrer" className='social-icon'><FaFacebookF style={icon} /></Link>
                    <Link className='social-icon'><FaInstagram style={icon} /></Link>
                </div>
                <div className="header-menu">
                    <button style={icon} ref={toggleRef} className="menu-toggle" onClick={showMenu} aria-expanded={menuOpen} aria-controls="menu-box" aria-label="Toggle menu">
                        <FaList />
                    </button>
                </div>
            </div>
            <div className="menu-content" style={{ display: menuOpen ? 'block' : 'none' }}>
                <div className="menu-box" id='menu-box' ref={ref}>
                    <nav>
                        <ul>
                            <li><Link to="/" onClick={() => setMenuOpen(false)} style={button} className='selected'>Casa</Link></li>
                            <li><Link to="blog" onClick={() => setMenuOpen(false)} style={button} className='selected'>Viajar</Link></li>
                            <li><Link to="about" onClick={() => setMenuOpen(false)} style={button} className='selected'>Sobre</Link></li>
                            <li><Link to="contacts" onClick={() => setMenuOpen(false)} style={button} className='selected'>Contacto</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header