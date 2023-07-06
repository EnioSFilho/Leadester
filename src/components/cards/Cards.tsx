import React from 'react'
import { CardContainer, InternalContainer, LineBorder, NaviContainer } from './cards.styled'
import './style.css'
import data from '../../../data.json';


const Cards = () => {
    return (
        <>
            <CardContainer>
                <InternalContainer>
                    <NaviContainer>
                        <div className='links'>
                            <a href="">Agências</a>
                            <a href="">Chatbot</a>
                            <a href="">Marketing Digital</a>
                            <a href="">Geração de Leads</a>
                            <a href="">Mídia Paga</a>
                        </div>

                        <div>
                            <span><b>Ordenar por</b></span>
                            <select defaultValue="datapublicacao" id='data'>
                                <option value="recent" >Data de Publicação</option>
                            </select>
                        </div>
                    </NaviContainer>
                    <LineBorder />
                    <div className='pics'>

                        <div>
                            <ul className='images'>
                                {data.itens.map((item) => (
                                    <li key={item.id}>
                                        <img src={item.src} alt={item.nome} style={{marginTop: "20px"}} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {data.itens.map((item) => (
                                    <li key={item.id}>
                                        <img src={item.src} alt={item.nome} style={{marginTop: "20px"}}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {data.itens.map((item) => (
                                    <li key={item.id}>
                                        <img src={item.src} alt={item.nome} style={{marginTop: "20px"}}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </InternalContainer>

            </CardContainer>

        </>
    )
}

export default Cards
