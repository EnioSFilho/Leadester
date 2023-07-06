import styled from "styled-components"

export const MainContainerCards = styled.div`

display: flex;
justify-content: center;
width: 100%;
height: 80vh;
`

export const InternalContainerCards = styled.div`

width: 70vw;
height: 100vh;


`

export const ContainerNav = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
width: 100%;
height: 20vh;
background-color: white;

`
export const LineBorder = styled.div`

margin: 0 auto;
margin-top: -15px;
width: 91%;
border: 1px solid rgb(196, 202, 209);

@media (max-width: 556px) {
    display: none;
}
`