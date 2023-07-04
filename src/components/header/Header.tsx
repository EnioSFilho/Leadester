import React from 'react'
import { ContainerHeader } from './containerHeader.styled'

const Header = () => {
  return (
   <>
   <ContainerHeader backGround='rgba(175, 218, 235, 0.233)'>
    <p className={`w-50 h-10  rounded-tl-lg rounded-br-none`}>WEBNARS EXCLUSIVOS</p>

   </ContainerHeader>
   </>
  )
}

export default Header
