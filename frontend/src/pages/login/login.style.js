import styled  from "styled-components";


export const TelaLogin = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:30px;
  height: 100vh;
`

export const Corpo = styled.div`
background-color: white;
width: 350px;
justify-content: center;
height: 440px;
border: 2px solid black;
border-radius:13px;
display:flex;
flex-direction:column;
padding: 10px 10px;

`
export const Title = styled.h1`
text-align:center;
font-family: Arial, Helvetica, sans-serif;
`
export const Butao = styled.button`
background-color: black;
border: none;
cursor: pointer;

&:hover{
  opacity: 80%;
}

border-radius: 6px;
padding: 11px 60px;
color: white;
`

export const Espaco = styled.div`
margin-bottom: 5px;
padding: 5px 15px;
`

export const CaixaButao = styled.div`
width: 100%;
font-family: Arial, Helvetica, sans-serif;
font-weight: 700;
display: flex;
height: 90px;
align-items: center;
justify-content:center;
flex-direction: column;
`
export const INPUT = styled.input`
padding: 5px;
margin-top: 5px;
`
export const LABEL = styled.label`
font-weight: 800;
font-family: Arial, Helvetica, sans-serif;
margin-top: 5px;
`
export const CenterImg = styled.div`
display: flex;
justify-content: center;
margin-top: -29px;
`

export const IMG = styled.img`
width: 120px;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
`

