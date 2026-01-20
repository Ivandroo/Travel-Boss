import React, { useState } from 'react';

import vistoAfrica from '../assets/blog/capetown.jpg';
import vistoCanada from '../assets/blog/vancouver.jpg';
import vistoFranca from '../assets/blog/paris.jpg';
import eua from '../assets/img/eua.jpg'
import barcelona from '../assets/img/02barcelona.jpg'
import brasil from '../assets/img/01brasil.jpg'
import portugal from '../assets/img/03portugal.jpg'


export default function Vistos() {
    const [vistos, setVistos] = useState([]);

    const numero = '244923456789';
    const turismo = 'Olá, gostaria de solicitar um orçamento para o visto de turismo para.';
    const estudante = 'Olá, gostaria de solicitar um orçamento para o visto de estudante para.';
    const formacao = 'Olá, gostaria de solicitar um orçamento para o visto de formação profissional para.';
    const trabalho = 'Olá, gostaria de solicitar um orçamento para o visto de trabalho para.';
    const saude = 'Olá, gostaria de solicitar um orçamento para o visto de saúde para.';
    const procura = 'Olá, gostaria de solicitar um orçamento para o visto de procura de trabalho para.';

    return (
        <div className="vistos-container">
            <div className="vistos-content">
                <div className="vistos-boxes">
                    <div className="vistos-box">
                        <div className="vistos-img">
                            <img src={vistoAfrica} alt="" />
                        </div>
                        <div className="vistos-text">
                            <div className="vistos-title">
                                <h2>Africa do sul, Cape Town</h2>
                            </div>
                            <div className="vistos-list">
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(turismo)} Africa do sul`} target="_blank" rel="noopener noreferrer">Turismo (sem visto)</a> 300.000kzs</p>
                                <p><a href="#">Visto de estudante</a> --- </p>
                                <p><a href="#">Visto de consulta médica</a>---</p>
                            </div>
                        </div>
                    </div>
                    <div className="vistos-box">
                        <div className="vistos-img">
                            <img src={vistoCanada} alt="" />
                        </div>
                        <div className="vistos-text">
                            <div className="vistos-title">
                                <h2>Canadá, Vancouver</h2>
                            </div>
                            <div className="vistos-list">
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(turismo)} Canada`} target="_blank" rel="noopener noreferrer">Visto de turismo</a>1.150.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(estudante)} Canada`} target="_blank" rel="noopener noreferrer">Visto de estudante</a> 1.850.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(trabalho)} Canada`} target="_blank" rel="noopener noreferrer">Visto de trabalho</a> 1.850.000kzs</p>
                            </div>
                        </div>
                    </div>

                    <div className="vistos-box">
                        <div className="vistos-img">
                            <img src={eua} alt="" />
                        </div>
                        <div className="vistos-text">
                            <div className="vistos-title">
                                <h2>Estados Unidos, Nova York</h2>
                            </div>
                            <div className="vistos-list">
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(turismo)} Estados Unidos`} target="_blank" rel="noopener noreferrer">Visto de turismo</a>850.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(estudante)} Estados Unidos`} target="_blank" rel="noopener noreferrer">Visto de estudante</a> 2.150.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(trabalho)} Estados Unidos`} target="_blank" rel="noopener noreferrer">Visto de trabalho</a> 1.150.000kzs</p>
                            </div>
                        </div>
                    </div>
                    <div className="vistos-box">
                        <div className="vistos-img">
                            <img src={barcelona} alt="" />
                        </div>
                        <div className="vistos-text">
                            <div className="vistos-title">
                                <h2>Espanha, Barcelona</h2>
                            </div>
                            <div className="vistos-list">
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(turismo)} Espanha`} target="_blank" rel="noopener noreferrer">Visto de turismo</a>700.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(estudante)} Espanha`} target="_blank" rel="noopener noreferrer">Visto de estudante</a> 1.650.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(saude)} Espanha (vosso guia)`} target="_blank" rel="noopener noreferrer">Visto de saúde (nossa guia)</a> 1.350.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(saude)} Espanha (meu guia)`} target="_blank" rel="noopener noreferrer">Visto de saúde (guia do cliente)</a> 900.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(trabalho)} Espanha (com o vosso contrato)`} target="_blank" rel="noopener noreferrer">Visto de trabalho (com o vosso contrato)</a> 1.850.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(trabalho)} Espanha (com o meu contrato)`} target="_blank" rel="noopener noreferrer">Visto de trabalho (contrato do cliente)</a> 900.000kzs</p>
                            </div>
                        </div>
                    </div>
                    <div className="vistos-box">
                        <div className="vistos-img">
                            <img src={vistoFranca} alt="" />
                        </div>
                        <div className="vistos-text">
                            <div className="vistos-title">
                                <h2>França, Paris</h2>
                            </div>
                            <div className="vistos-list">
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(turismo)} França`} target="_blank" rel="noopener noreferrer">Visto de turismo</a>700.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(estudante)} França`} target="_blank" rel="noopener noreferrer">Visto de estudante</a> 1.650.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(saude)} França (vosso guia)`} target="_blank" rel="noopener noreferrer">Visto de saúde (nossa guia)</a> 1.350.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(saude)} França (meu guia)`} target="_blank" rel="noopener noreferrer">Visto de saúde (guia do cliente)</a> 900.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(trabalho)} França (com o vosso contrato)`} target="_blank" rel="noopener noreferrer">Visto de trabalho (com o vosso contrato)</a> 1.850.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(trabalho)} França (com o meu contrato)`} target="_blank" rel="noopener noreferrer">Visto de trabalho (contrato do cliente)</a> 900.000kzs</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="vistos-box">
                        <div className="vistos-img">
                            <img src={brasil} alt="" />
                        </div>
                        <div className="vistos-text">
                            <div className="vistos-title">
                                <h2>Brasil, Rio de Janeiro</h2>
                            </div>
                            <div className="vistos-list">
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(turismo)} Brasil`} target="_blank" rel="noopener noreferrer">Visto de turismo</a> 1.150.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(estudante)} Brasil`} target="_blank" rel="noopener noreferrer">Visto de estudante</a> 1.850.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(formacao)} Brasil`} target="_blank" rel="noopener noreferrer">Visto de formação profissional</a> 1.850.000kzs</p>
                            </div>
                        </div>
                    </div>  

                    <div className="vistos-box">
                        <div className="vistos-img">
                            <img src={portugal} alt="" />
                        </div>
                        <div className="vistos-text">
                            <div className="vistos-title">
                                <h2>Portugal, Lisboa</h2>
                            </div>
                            <div className="vistos-list">
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(turismo)} Portugal`} target="_blank" rel="noopener noreferrer">Visto de turismo</a> 700.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(estudante)} Portugal (medio)`} target="_blank" rel="noopener noreferrer">Visto de estudante (medio)</a> 1.650.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(estudante)} Portugal (superior)`} target="_blank" rel="noopener noreferrer">Visto de estudante (superior)</a> 2.000.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(formacao)} Portugal`} target="_blank" rel="noopener noreferrer">Visto de formação profissional</a> 1.500.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(saude)} Portugal (vosso guia)`} target="_blank" rel="noopener noreferrer">Visto de saúde (nossa guia)</a> 1.350.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(saude)} Portugal (meu guia)`} target="_blank" rel="noopener noreferrer">Visto de saúde (guia do cliente)</a> 900.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(procura)} Portugal`} target="_blank" rel="noopener noreferrer">Visto de procura de trabalho</a> 950.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(trabalho)} Portugal (com o vosso contrato)`} target="_blank" rel="noopener noreferrer">Visto de trabalho (com o vosso contrato)</a> 1.850.000kzs</p>
                                <p><a href={`https://wa.me/${numero}?text=${encodeURIComponent(trabalho)} Portugal (com o meu contrato)`} target="_blank" rel="noopener noreferrer">Visto de trabalho (contrato do cliente)</a> 950.000kzs</p>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    );
}