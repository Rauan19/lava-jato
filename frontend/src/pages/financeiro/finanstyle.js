import styled from "styled-components";

export const ContainerFianceiro = styled.div`
width: 90%;
background-color: darkgray;
height: 70vh;
margin-top: 30px;
border-radius: 10px;
margin-left: 19px;
display: flex;
gap: 20px;
align-items: center;
flex-direction: column;
justify-content: center;
@media (max-width: 1144px) {
    flex-direction: column;
    gap: 20px;
  }
  border: 2px solid;
`

export const CardsMoney = styled.div`
background-color: white;
text-align: center;
border-radius: 12px;
border: 2px solid;
height: 170px;
font-family: Arial, Helvetica, sans-serif;
width: 95%;

h1{
    margin-top: 40px;
    border: 2px solid  black;

    width: 80%;
    margin-left: 10%;
    
    border-radius: 10px;
    padding: 5px;
}

h2{
    margin-top: 20px;
}

`

export const TitelFina = styled.h2`
font-size: 30px;
font-family: Arial, Helvetica, sans-serif;
`