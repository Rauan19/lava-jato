import styled from "styled-components";


export const LogoHome = styled.div`
background-color: black;
width: 98%;
height: 60px;
color: white;
margin-top: 25px;
display: flex;
align-items: center;
padding-left: 20px;
font-family: Arial, Helvetica, sans-serif;
font-size: 25px;
`

export const Form = styled.form`
   width: 90%;
   height: 60vh;
   
   display: flex;
   flex-direction: column;
   padding: 10px 10px;
   border-radius: 7px;
   border: 3px solid black;
   @media (max-width: 644px) {
    overflow-y: auto
  }
   
`
export const ContainerHome = styled.div`

width: 100%;
height: 72vh;
display: flex;
align-items: center;
justify-content: center;
`

export const INPUT = styled.input`
padding: 6px;
@media (max-width: 644px) {
    overflow-y: auto
  }
`
export const EspacoHome = styled.div`
margin-top: 10px;
`
export const LabelHome = styled.label`
font-family: Arial, Helvetica, sans-serif;
font-weight: 800;

`
export const Butao = styled.button`

border: none;
cursor: pointer;
border-radius: 6px;
padding: 11px 60px;
margin-top: 10px;
width: 190px;
font-weight: 700;
border: 2px solid;

`

export const CenterLoading = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content:center;
height: 100vh;
`