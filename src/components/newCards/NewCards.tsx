import React from 'react'
import { ContainerNav, InternalContainerCards, LineBorder, MainContainerCards } from './newcards.syled'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../../../data.json';
import "./style.css"

const NewCards = () => {
    return (
        <>
            <MainContainerCards>

                <InternalContainerCards>

                    <ContainerNav>

                        <div className='links'>
                            <div className='itens' >
                                <a href="">Agências</a>
                                <a href="">Chatbot</a>
                                <a href="">Marketin Digital</a>
                                <a href="">Geração de Leads</a>
                                <a href="">Mídia Paga</a>

                            </div>

                            <div>
                                <span><b>Ordenar por</b></span>
                                <select style={{ border: "1px solid black", borderRadius: "20px", padding: "5px" }}>
                                    <option value="opcao1" data-criacao="2021-01-01">Data de Publicação</option>
                                </select>
                            </div>
                        </div>

                    </ContainerNav>

                    <LineBorder/>

                    <div className='cards'>
                        {data.itens.map((item) => (
                            <Card key={item.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.src} alt={item.nome} />
                                <Card.Body>                                    
                                    <Card.Text>{item.descricao}</Card.Text>                                    
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                    <div className='cards'>
                        {data.itens.map((item) => (
                            <Card key={item.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.src} alt={item.nome} />
                                <Card.Body>                                    
                                    <Card.Text>{item.descricao}</Card.Text>                                    
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                    <div className='cards'>
                        {data.itens.map((item) => (
                            <Card key={item.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.src} alt={item.nome} />
                                <Card.Body>                                    
                                    <Card.Text>{item.descricao}</Card.Text>                                    
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                   

                    <LineBorder style={{marginTop:"15px"}}/>

                    



                </InternalContainerCards>


            </MainContainerCards>



        </>

    )
}



export default NewCards
