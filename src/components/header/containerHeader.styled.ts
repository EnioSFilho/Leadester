import styled from "styled-components"

interface ContainerHeaderProps{
    backGround: string;
}

export const ContainerHeader = styled.header<ContainerHeaderProps>`


width: 100%;
height: 70vh ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: rgba(175, 218, 235, 0.233)
background-color: ${(props) => props.backGround};


`


