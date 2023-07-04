import React from 'react'
import { ContainerHeader } from './containerHeader.styled'
import "./style.css"

const Header = () => {
  return (
   <>
   <ContainerHeader backGround='rgba(175, 218, 235, 0.233)'>
    <p className='ballon'>WEBNARS EXCLUSIVOS</p>
    <p className='textUno'>Menos Conversinha,</p>        
    <p className='textDue'>Mais Conversão <img src="/asset-header.png" alt="Logotexto" id='img' /></p>
    
   
   </ContainerHeader>
   </>
  )
}

export default Header
