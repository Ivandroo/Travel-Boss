import React from 'react'

import mapa from '../assets/img/61772.jpg';

import brasil from '../assets/img/01brasil.jpg';
import barcelona from '../assets/img/02barcelona.jpg';
import portugal from '../assets/img/03portugal.jpg';
import africadosul from '../assets/img/africa-do-sul.jpg';
import canada from '../assets/img/canadá.jpg';
import eua from '../assets/img/eua.jpg';

import viagem from '../assets/img/imagem.jpg';

import mulher1 from '../assets/img/bussnesswoman.jpg';
import mulher2 from '../assets/img/jurelma.jpg';
import ceo from '../assets/img/CEO.jpg';
import business from '../assets/img/bussnessman.jpg';


function About() {
    return (
        <div className='about-container' id='about'>
            <div className="about-container" style={{backgroundImage: `url(${mapa})`}}>
                <div className="about-content">
                    <div className="about-title">
                        <h1>Por que Nós?</h1>
                    </div>
                    <div className="about-boxes">
                        <div className="about-box">
                            <h2>Experiência</h2>
                            <p>Uma agência de viagens que transforma sonhos em realidade, cuidando de tudo, vôos, hotéis e atividades para uma viagem sem preocupações!</p>
                        </div>
                        <div className="about-box">
                            <h2>Habilidades</h2>
                            <div className="skills">
                                <div className="stats">
                                    <div className="stat">
                                        <div className="circle" style={{ "--value": 87 }}>
                                        <span>87%</span>
                                        </div>
                                        <p>TURISMO</p>
                                    </div>

                                    <div className="stat">
                                        <div className="circle" style={{ "--value": 74 }}>
                                        <span>74%</span>
                                        </div>
                                        <p>EXCURSSÕES</p>
                                    </div>

                                    <div className="stat">
                                        <div className="circle" style={{ "--value": 99 }}>
                                        <span>99%</span>
                                        </div>
                                        <p>HOTÉIS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-box">
                            <h2>Missão</h2>
                            <p>Estamos aqui para transformar os seus sonhos de viagem em realidade! Cuidamos de tudo para que você só precise se preocupar em aproveitar.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="section-caroussel">
                {/* <div className="button">
                    <button>left</button>
                </div> */}
                <div className="caroussel">
                    <div className="card">
                        <img src={brasil} alt="" />
                        <div className="card-text">
                            <h1>Brasil</h1>
                        </div>
                    </div>
                    <div className="card">
                        <img src={portugal} alt="" />
                        <div className="card-text">
                            <h1>Portugal</h1>
                        </div>
                    </div>
                    <div className="card">
                        <img src={barcelona} alt="" />
                        <div className="card-text">
                            <h1>Barcelona</h1>
                        </div>
                    </div>
                    <div className="card">
                        <img src={canada} alt="" />
                        <div className="card-text">
                            <h1>Canadá</h1>
                        </div>
                    </div>
                    <div className="card">
                        <img src={eua} alt="" />
                        <div className="card-text">
                            <h1>E.U.A.</h1>
                        </div>
                    </div>
                    <div className="card">
                        <img src={africadosul} alt="" />
                        <div className="card-text">
                            <h1>Africa do Sul</h1>
                        </div>
                    </div>
                </div>
                {/* <div className="button">
                    <button className="scroll-right">right</button>
                </div> */}
            </div>

            <div className="comments-container">
                <div className="comments-content">
                    <div className="comments-box">
                        <div className="comment-img">
                            <img src={mulher2} alt="" />
                        </div>
                        <div className="comment-text">
                            <p>"Minha experiência com a agência de viagens Travel Boss foi excepcional! Eles organizaram tudo com muito cuidado e atenção aos detalhes, deixando-me livre para aproveitar cada momento da viagem." </p>
                            <h2>Jurelma Domingos</h2>
                        </div>
                    </div>
                    <div className="comments-box">
                        <div className="comment-img">
                            <img src={mulher1} alt="" />
                        </div>
                        <div className="comment-text">
                            <p>"A equipe foi super prestativa e garantiu que tudo fosse perfeito, desde as reservas até as atividades. Foi muito bom contar com especialistas que entendem do assunto e transformam uma viagem em algo realmente especial. Recomendo sem hesitação!" </p>
                            <h2>Domingas Neto</h2>
                        </div>
                    </div>
                    <div className="comments-box">
                        <div className="comment-img">
                            <img src={business} alt="" />
                        </div>
                        <div className="comment-text">
                            <p>""Adorei a experiência com a agência de viagens! Eles cuidaram de todos os detalhes, desde os voos até as atividades locais, garantindo que minha viagem fosse tranquila e sem preocupações." </p>
                            <h2>Marcelo João</h2>
                        </div>
                    </div>
                </div>

            </div>

            <div className="comments-form">
                <div className="comment-form">
                    <form action="">
                        <fieldset>
                            <h2>Comente</h2>
                            <p>Sua opnião sobre a sua experiência</p>
                        </fieldset>
                       
                        <fieldset>
                            <input type="text" name="" id="" placeholder='Nome' required />
                        </fieldset>
                        <fieldset>
                            <input type="email" name="" id="" placeholder='Email' required />
                        </fieldset>
                        <fieldset>
                            <textarea name="" id="" cols="68" rows="5" placeholder='Comentário' required ></textarea>
                        </fieldset>
                        <fieldset>
                            <input type="submit" value="Comentar" className='comentar' required />
                        </fieldset>
                    </form>
                    <div className="form-img">
                        <img src={viagem} alt="" />
                    </div>
                </div>
                
            </div>

            <div className="team-container">
                <div className="team-content">
                    <div className="team-box">
                        <img src={ceo} alt="" />
                        <div className="team-text">
                            <h2>Agustavo Samuel</h2>
                            <span> Fundador </span>
                            <p>926 753 370</p>
                        </div>
                    </div>

                    <div className="team-box">
                        <img src={business} alt="" />
                        <div className="team-text">
                            <h2>Josemar Samuel</h2>
                            <span> Director </span>
                            <p>948 037 239</p>
                        </div>
                    </div>

                    <div className="team-box">
                        <img src={mulher1} alt="" />
                        <div className="team-text">
                            <h2>Domingas Neto</h2>
                            <span> Agente de viagens </span>
                            <p>922 254 299</p>
                        </div>
                    </div>

                    <div className="team-box">
                        <img src={mulher2} alt="" />
                        <div className="team-text">
                            <h2>Jurelma Domingas</h2>
                            <span> Consultora de viagens </span>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About