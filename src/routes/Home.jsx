import React from "react";
import { Link } from "react-router-dom";

import { FaStar, FaWallet, FaFire, FaHeadphones, FaAward, FaWhmcs } from 'react-icons/fa'

// fundo
import festa from '../assets/img/festa-na-praia.jpg'
import balao from '../assets/img/balao-de-ar-quente.jpg'
import rapel from '../assets/img/rapel.jpg'
import mapa from '../assets/img/61772.jpg'

// carrossel
import brasil from '../assets/img/01brasil.jpg'
import barcelona from '../assets/img/02barcelona.jpg'
import portugal from '../assets/img/03portugal.jpg'
import canada from '../assets/img/canadá.jpg'
import africadosul from '../assets/img/africa-do-sul.jpg'
import eua from '../assets/img/eua.jpg'
import Vistos from "./Vistos";


function Home(){

    const icon = {
        fontSize: '2rem',
        color: '#064970',
        marginRight: '.5rem'
    }

    const numero = "244922254236"
    const agendarPortugal = "Olá, gostaria de agendar uma consultoria para viagem de turismo para Portugal."
    const agendarBrasil = "Olá, gostaria de agendar uma consultoria para viagem de turismo para Brasil."

    return(
        <div className="home-container" id="home">
            <div className="home-caroussel">
                <div className="home-group">
                    <div className="home-content fundo-1">
                        <div className="home-content-text">
                            <p style={{color: '#064970'}}>Explore lugares incriveis com a</p>
                            <h1>Travel Boss</h1>
                            <button className="explorar" onClick={() => document.getElementById("destinos") ?.scrollIntoView({ behavior: "smooth" })}>Explorar</button> 
                        </div>
                    </div>
                    <div className="home-content fundo-2">
                        <div className="home-content-text">
                            <p style={{color: '#064970'}}>Explore lugares incriveis com a</p>
                            <h1>Travel Boss</h1>
                            <button className="explorar" onClick={() => document.getElementById("destinos") ?.scrollIntoView({ behavior: "smooth" })}>Explorar</button> 
                        </div>
                    </div>
                    <div className="home-content fundo-3">
                        <div className="home-content-text">
                            <p>Explore lugares incriveis com a</p>
                            <h1>Travel Boss</h1>
                            <button className="explorar" onClick={() => document.getElementById("destinos") ?.scrollIntoView({ behavior: "smooth" })}>Explorar</button> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-travels">
                <div className="home-travels-content">
                    <div className="home-travels-box" style={{backgroundImage: `url(${festa})`}}>
                        {/* <img src={festa} alt="" /> */}
                        <div className="home-travels-text">
                            <h1>Aproveite festas na praia</h1>
                            <p>Disfrute de festas de praia em passeios de cruseiros com a Travel Boss.</p>
                            
                        </div>
                    </div>

                    <div className="home-travels-box" style={{backgroundImage: `url(${balao})`}}>
                        {/* <img src={balao} alt="" /> */}
                        <div className="home-travels-text">
                            <h1>Passeie em balões de ar quente</h1>
                            <p>Experiencie viagens de balão de ar com a Travel Boss. </p>
                        </div>                    
                    </div>

                    <div className="home-travels-box" style={{backgroundImage: `url(${rapel})`}}>
                        {/* <img src={rapel} alt="" /> */}
                        <div className="home-travels-text">
                            <h1>Escale montanhas</h1>
                            <p>A Travel Boss organiza passeios turísticos em várias partes do país.</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="about-container" style={{backgroundImage: `url(${mapa})`}}>
                <div className="about-content">
                    <div className="about-title">
                        <h1>Descubra novos horizontes</h1>
                    </div>
                    <div className="about-boxes">
                        <div className="about-box">
                            <h2>Sobre nós</h2>
                            <p>A Travel Boss está comprometida em oferecer aos nossos clientes o melhor em valor e qualidade nos arranjos de viagem.</p>
                        </div>
                        <div className="about-box">
                            <h2>Por que nós?</h2>
                            <p> Temos orgulho em oferecer excelente qualidade e um ótimo custo-benefício em nossos passeios.</p>
                        </div>
                        <div className="about-box">
                            <h2>Nossa missão</h2>
                            <p>Nossa missão é proporcionar a melhor experiência de planejamento de viagens.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Container-caroussel">
                {/* <div className="button">
                    <button>left</button>
                </div> */}
                <h2>Para onde podemos levá-lo?</h2>
                <div className="section-caroussel">
                
                    <div className="caroussel">
                        <div className="card">
                            <img src={brasil} alt="" />
                            <div className="card-text">
                                <h1>Rio de Janeiro</h1>
                                <span style={{fontSize: '1rem',fontWeight:'500'}}>Brasil</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={portugal} alt="" />
                            <div className="card-text">
                                <h1>Lisboa</h1>
                                <span style={{fontSize: '1rem',fontWeight:'500'}}>Portugal</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={barcelona} alt="" />
                            <div className="card-text">
                                <h1>Barcelona</h1>
                                <span style={{fontSize: '1rem',fontWeight:'500'}}>Espanha</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={canada} alt="" />
                            <div className="card-text">
                                <h1>Toronto</h1>
                                <span style={{fontSize: '1rem',fontWeight:'500'}}>Canadá</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={eua} alt="" />
                            <div className="card-text">
                                <h1>Nova York</h1>
                                <span style={{fontSize: '1rem',fontWeight:'500'}}>EUA</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src={africadosul} alt="" />
                            <div className="card-text">
                                <h1>Cape town</h1>
                                <span style={{fontSize: '1rem',fontWeight:'500'}}>Africa do Sul</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="button">
                    <button className="scroll-right">right</button>
                </div> */}
                <Link to="vistos" className='vistos link'>Ver outros tipos de visto...</Link>
            </div>

            <div className="services-container">
                <div className="services-content">
                    <div className="services-title">
                        <h1>Nossos serviços</h1>
                    </div>
                    <div className="services-boxes">
                        <div className="services-box">
                            <FaWhmcs style={icon}/>
                            <h2> Correspondência Personalizada</h2>
                            <p>Nosso sistema exclusivo de correspondência permite que você encontre exatamente o passeio que deseja para suas próximas férias.</p>
                        </div>
                        <div className="services-box">
                            <FaAward style={icon} />
                            <h2> Ampla Variedade de Passeios</h2>
                            <p> Oferecemos uma ampla variedade de passeios cuidadosamente selecionados, com destinos em todo o mundo.</p>
                        </div>
                        <div className="services-box">
                            <FaStar style={icon} />
                            <h2> Serviços de alta qualidade</h2>
                            <p> Os nossos gestores de excursões são qualificados, habilidosos e amigáveis, garantindo o melhor serviço para você. </p>
                        </div>
                        <div className="services-box">
                            <FaHeadphones style={icon} />
                            <h2> Suporte 24/7</h2>
                            <p>Você pode sempre contar com o suporte profissional da nossa equipe 24 horas por dia, 7 dias por semana, e esclarecer qualquer dúvida que tive</p>
                        </div>
                        <div className="services-box">
                            <FaFire style={icon} /> 
                            <h2>Hotéis Selecionados a Dedo</h2>
                            <p>A nossa equipa oferece apenas a melhor seleção de hotéis acessíveis e de luxo para os nossos clientes.</p>
                        </div>
                        <div className="services-box">
                            <FaWallet style={icon} /> 
                            <h2>Melhores preços do mercado</h2>
                            <p>Com Preços que transbordam da realidade</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="destiny-container" id="destinos">
                <div className="destiny-content">
                    <div className="destiny-title">
                        <h1>Destinos Frequentes</h1>
                    </div>
                    <div className="destiny-boxes">
                        <div className="destiny-box">
                            <div className="destiny-img">
                                <img src={portugal} alt="" />
                            </div>
                            <div className="destiny-text">
                                <div className="destiny-price">
                                    <h2>Lisboa, Portugal</h2>
                                    <span>700.000kzs</span>
                                </div>
                                <div className="destiny-details">
                                    <p>Lisboa, a capital de Portugal, é uma cidade encantadora com uma rica história, uma cultura vibrante e é conhecida pelas suas colinas, que oferecem vistas deslumbrantes sobre a cidade.</p>
                                    <a href={`https://wa.me/${numero}?text=${encodeURIComponent(agendarPortugal)}`} target="_blank" rel="noopener noreferrer" ><button className="agendar">Agendar</button></a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="destiny-box">
                            <div className="destiny-img">
                                <img src={brasil} alt="" />
                            </div>
                            <div className="destiny-text">
                                <div className="destiny-price">
                                    <h2>Rio de Janeiro, Brasil</h2>
                                    <span>1.300.000kzs</span>
                                </div>
                                <div className="destiny-details">
                                    <p>A cidade é famosa pelas suas praias mundialmente conhecidas, como Copacabana, Ipanema e Leblon, que atraem visitantes de todas as partes do mundo.</p>
                                    <a href={`https://wa.me/${numero}?text=${encodeURIComponent(agendarBrasil)}`} target="_blank" rel="noopener noreferrer" ><button className="agendar">Agendar</button></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Home