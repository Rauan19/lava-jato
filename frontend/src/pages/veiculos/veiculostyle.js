// veiculostyle.js
import styled from 'styled-components';

export const ContainerVeiculo = styled.div`
 width: 100%;
  padding: 10px;
  background-color: #f8f9fa;
 
`;

export const Veiculosmp = styled.div`
  width: 91%;
  border: 2px solid;
  height: 78vh;
  border-radius: 6px;
  background-color: #ffffff;
  overflow-x: auto; /* Adiciona barra de rolagem horizontal */
  @media (max-width: 644px) {
    overflow-y: auto; /* Adiciona barra de rolagem vertical em telas menores */
  }

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TodosVeiculos = styled.div`
  margin-top: 20px;
 

`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  border:2px solid black;
  margin: 10px 0;
  font-size: 16px;
  text-align: left;
`;

export const TabelaHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TabelaHeadCell = styled.th`
  padding: 8px 6px;
  border: 1px solid black;
  @media (max-width: 644px) {
    padding: 2px 3px; /* Ajusta o padding para telas menores */
  }

`;

export const TabelaBody = styled.tbody`

justify-content: center;
align-items: center
`;

export const TabelaRow = styled.tr`
  border-bottom: 1px solid #ddd;
  
  
`;

export const TabelaCell = styled.td`
  padding: 17px 12px;
  border: 1px solid #ddd;
`;

export const Titlev = styled.h2`
font-family: Arial, Helvetica, sans-serif;

`

export const ButaoVeiculo = styled.button`
margin-top: 15px;
margin-left: 10px;
background-color: red;
color: white;
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
border-radius: 3px;
border: 2px solid black;


`
