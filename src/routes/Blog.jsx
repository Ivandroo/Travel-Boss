import React from 'react'
import mapa from '../assets/img/61772.jpg';

import vistoAfrica from '../assets/blog/capetown.jpg';
import vistoCanada from '../assets/blog/vancouver.jpg';
import vistoFranca from '../assets/blog/paris.jpg';
import eua from '../assets/img/eua.jpg'
import barcelona from '../assets/img/02barcelona.jpg'


import video1 from '../assets/blog/video1.mp4';
import video2 from '../assets/blog/video2.mp4';

import { FaCalendar, FaUmbrellaBeach } from 'react-icons/fa';
import { MdHealthAndSafety } from "react-icons/md";

function Blog() {
  const icon = {
    margin: '0 auto',
    color: '#064970',
    fontSize: '2rem',
  }

  const numero = "244922254236"

  return (
    <div className='blog-container'>
      <div className="contact-container" style={{backgroundImage: `url(${mapa})`}}>
        <div className="contact-content">
          <div className="contact-box">
            <FaCalendar style={icon} />
            <h2>Planeje conosco</h2>
            <p>Fazemos a consultoria e o roteiro para a suas viagens.</p>
          </div>
          <div className="contact-box">
            <MdHealthAndSafety style={icon} />
            <h2>Viaje com seguraça</h2>
            <p>Asseguramos a si e a sua familia, desde a partida até ao regresso.</p>
          </div>
          <div className="contact-box">
            <FaUmbrellaBeach style={icon} />
            <h2>Desfrute a viagem </h2>
            <p>Tratamos de tudo para que não precise se preocupar.</p>
          </div>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-boxes">
          <div className="blog-box">
            <div className="blog-img">
              <img src={vistoAfrica} alt="" />
            </div>
            <div className="destiny-text">
              <div className="destiny-price">
                  <h2>Capetown, Africa do Sul</h2>
                  <span>300.000kzs</span>
              </div>
              <div className="destiny-details">
                  <a href={`https://wa.me/${numero}?text=${encodeURIComponent()}`} target="_blank" rel="noopener noreferrer" ><button className="agendar">Consultar</button></a>
              </div>  
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={vistoCanada} alt="" />
            </div>
            <div className="destiny-text">
              <div className="destiny-price">
                  <h2>Vancouver, Canadá</h2>
                  <span>1.150.000kzs</span>
              </div>
              <div className="destiny-details">
                  <a href={`https://wa.me/${numero}?text=${encodeURIComponent()}`} target="_blank" rel="noopener noreferrer" ><button className="agendar">Consultar</button></a>
              </div>  
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={vistoFranca} alt="" />
            </div>
            <div className="destiny-text">
              <div className="destiny-price">
                  <h2>Paris, França</h2>
                  <span>700.000kzs</span>
              </div>
              <div className="destiny-details">
                  <a href={`https://wa.me/${numero}?text=${encodeURIComponent()}`} target="_blank" rel="noopener noreferrer" ><button className="agendar">Consultar</button></a>
              </div>  
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={barcelona} alt="" />
            </div>
            <div className="destiny-text">
              <div className="destiny-price">
                  <h2>Barcelona, Espanha</h2>
                  <span>700.000kzs</span>
              </div>
              <div className="destiny-details">
                  <a href={`https://wa.me/${numero}?text=${encodeURIComponent()}`} target="_blank" rel="noopener noreferrer" ><button className="agendar">Consultar</button></a>
              </div>  
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={eua} alt="" />
            </div>
            <div className="destiny-text">
              <div className="destiny-price">
                  <h2>Nova York, EUA</h2>
                  <span>850.000kzs</span>
              </div>
              <div className="destiny-details">
                  <a href={`https://wa.me/${numero}?text=${encodeURIComponent()}`} target="_blank" rel="noopener noreferrer" ><button className="agendar">Consultar</button></a>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div className="videos-container">
        <div className="videos-content">
          <div className="videos-box">
            <video controls>
              <source src={`${video1}#t=6.5`} type="video/mp4" />
            </video>
          </div>
          <div className="videos-box">
            <video src={`${video2}#t=6.5`}  controls></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog