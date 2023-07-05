import React from 'react'
import "./style.css"



const Nav = () => {
    return (
        <>
            <div className='nav'>
                <div className='links'>
                    <a href="">Agências</a>
                    <a href="">Chatbot</a>
                    <a href="">Marketing Digital</a>
                    <a href="">Geração de Leads</a>
                    <a href="">Mídia Paga</a>
                </div>
                <div>
                    <b id='ordenar'>Ordenar por</b>
                    <select defaultValue="show-me-the-money"  id="select">
                        <option value="recent">Data de Publicação</option>
                    </select>
                </div>
                
            </div>
            
          
        </>
    )
}

export default Nav
