import styled from "styled-components"


export const CardContainer = styled.div`

display: flex;
justify-content: center;
width: 100%;
height: 70vh;


`
export const InternalContainer = styled.div`

width: 65vw;
height: 70vh;


`
export const NaviContainer = styled.div`

width: 100%;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-around;
`

export const LineBorder = styled.div`
width: 1250px;
border: 1px solid rgb(196, 202, 209);

@media (max-width: 998px) {
    display: none;
  }

`