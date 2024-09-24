import { useEffect, useState } from "react";
import {
  ContainerVeiculo,
  Veiculosmp,
  TodosVeiculos,
  Tabela,
  TabelaHead,
  TabelaHeadCell,
  TabelaBody,
  TabelaRow,
  TabelaCell,
} from "./veiculostyle";

import { Titlev, ButaoVeiculo } from "./veiculostyle";
import { ScaleLoader } from "react-spinners";
import api from "../../services/api";
import { CenterLoading } from "../home/homeStyle";


export const Pageveiculo = () => {
  const [veiculo, setVeiculo] = useState();
  const session = JSON.parse(localStorage.getItem("CarJato"));
  const [loading, setLoading] = useState(false);
  const userId = session ? session.user_id : null; // Obter o userId da sessão armazenada

  const getVeiculos = async () => {
    setLoading(true);
    if (!userId) {
      console.log("userid nao esta definido");
      return;
    }
    try {
      const response = await api.get(`/user/${userId}/veiculo`, {
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });

      setVeiculo(response.data);
    } catch (error) {
      alert("Error ao mostrar os veiculos, tente mais tarde");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVeiculos();
  }, []);

  const deleteveiculo = async (id, userId) => {
    setLoading(true);
    try {
      await api.delete(`/user/${userId}/veiculo/${id}`, {
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });
      getVeiculos();
    } catch (error) {
      alert("erro, tente novamente mais tarde", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerVeiculo>
      {loading ? (
        <CenterLoading>
          <ScaleLoader color="black" />
        </CenterLoading>
      ) : (
        <Veiculosmp>
          <Titlev>Veículos:</Titlev>
          <TodosVeiculos>
            <Tabela>
              <TabelaHead>
                <tr>
                  <TabelaHeadCell>Modelo</TabelaHeadCell>
                  <TabelaHeadCell>Cor</TabelaHeadCell>
                  <TabelaHeadCell>Placa</TabelaHeadCell>
                  <TabelaHeadCell>Serviço</TabelaHeadCell>
                  <TabelaHeadCell>Valor</TabelaHeadCell>
                  <TabelaHeadCell>Ações</TabelaHeadCell>
                </tr>
              </TabelaHead>
              <TabelaBody>
                {veiculo?.map((iten) => (
                  <TabelaRow key={iten.id}>
                    <TabelaCell>{iten.model}</TabelaCell>
                    <TabelaCell>{iten.color}</TabelaCell>
                    <TabelaCell>{iten.licensePlate}</TabelaCell>
                    <TabelaCell>{iten.service}</TabelaCell>
                    <TabelaCell>R${iten.price}</TabelaCell>
                    <ButaoVeiculo
                      onClick={() => deleteveiculo(iten._id, userId)}
                    >
                      Excluir
                    </ButaoVeiculo>
                  </TabelaRow>
                ))}

                {/* Adicione mais linhas conforme necessário */}
              </TabelaBody>
            </Tabela>
          </TodosVeiculos>
        </Veiculosmp>
      )}
    </ContainerVeiculo>
  );
};
