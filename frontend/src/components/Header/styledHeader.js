import styled from "styled-components"


export const HeaderComponets = styled.div`

display: flex;
align-items: center;
top: 0;
justify-content:flex-end ;
padding-right:20px;
font-weight:800;
font-size:20px;
width:100%;
height:64px;
background-color:#fefefe ;
box-shadow: 0 0 5px 2px darkgray  ;`



export const Butao1 = styled.button`
padding: 5px  28px;
border: 2px solid black;
background-color: transparent;
border-radius: 6px;
cursor: pointer;
margin-right: 15px;

&&:hover{
    background-color: chocolate;
    color: white;
    font-weight: 600;
}
`