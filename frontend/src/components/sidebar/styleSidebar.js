import styled from "styled-components";

export const SideBarStyle = styled.div`
width: 200px;
background-color: black;
height: 100vh;
color: white;

@media (max-width: 644px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8vh;
    z-index: 1000;
    display: flex;
    justify-content: center;
  }

`
export const Pzao = styled.p`
@media (max-width: 644px) {
    display: none;
    position: relative;
    
  }

`
export const TextLink = styled.p`
color: #f9f7f7;
font-size: 18px;
font-weight: 800;
font-family: Arial, Helvetica, sans-serif;
margin-top:5px;
padding: 25px 20px;
display: flex;
align-items: center;

padding-bottom: 10px;
height: 10px;
cursor: pointer;

 &&:hover{
    background-color: chocolate;
    
    

 }

 @media (max-width: 644px) {
    position: relative;
    bottom: 34px;
    
  }

 

`
export const EspacoIco = styled.p`
margin-left: 8px;
`

export const Nav = styled.nav`
margin-top:30px;
@media (max-width: 644px) {
    display: flex;
  }
`

export const CenterImg = styled.div`
display: flex;
justify-content: center;
`

export const IMG = styled.img`
width: 140px;
@media (max-width: 644px) {
   display: none;
  }

`
