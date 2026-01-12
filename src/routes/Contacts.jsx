import React from "react"

import { FaPhone, FaMailBulk, FaHome } from 'react-icons/fa'

import viagem from '../assets/img/imagem3.jpg'

import mapa from '../assets/img/61772.jpg'

function Contacts() {

  const icon = {
    margin: '0 auto',
    color: '#064970',
    fontSize: '2rem',
  }

  return (
    <div className="contact-form" id="contact">
      <div className="contact-container" style={{backgroundImage: `url(${mapa})`}}>
        <div className="contact-content">
          <div className="contact-box">
            <FaPhone style={icon}/>
            <h2>Contacto</h2>
            <p>+244 923 531 284</p>
            <p>+244 947 876 761</p>
          </div>
          <div className="contact-box">
            <FaMailBulk style={icon} />
            <h2>Email</h2>
            <p>geral@magivic.gdmao.com</p>
          </div>
          <div className="contact-box">
            <FaHome style={icon}/>
            <h2>Endereço</h2>
            <p>Shopping Kikuxi, 1º andar B23 e B24, avenida fidel de Castro,via expressa</p>
          </div>
        </div>
      </div>
      <div className="comments-form">
        <div className="comment-form">
            <form action="">
              <fieldset>
                <h2>Contacte-nos</h2>
                <p>E receba um orçamento para a sua viagem </p>
              </fieldset>
              <fieldset>
                  <input type="text" name="" id="" placeholder='Nome' required />
              </fieldset>
              <fieldset>
                  <input type="email" name="" id="" placeholder='Email' required />
              </fieldset>
              <fieldset>
                  <input type="tel" name="" id="" placeholder='Telemovel' required />
              </fieldset>
              <fieldset>
                  <textarea name="" id="" cols="68" rows="5" placeholder='Mensagem' required ></textarea>
              </fieldset>
              <fieldset>
                  <input type="submit" value="Enviar" className='comentar' required />
              </fieldset>
            </form>
            <div className="form-img">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9491842717907!2d13.3671329!3d-8.976823500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5203f5a0ef6d3d%3A0xed80ef475876720a!2sKikuxi%20Shopping!5e0!3m2!1spt-PT!2sao!4v1764631427929!5m2!1spt-PT!2sao" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts