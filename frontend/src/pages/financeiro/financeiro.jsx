import { CardsMoney } from "./finanstyle";
import { ContainerFianceiro, TitelFina } from "./finanstyle";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { CenterLoading } from "../home/homeStyle";

export const PageFinanceiro = () => {
  const [totalVeiculo, setTotalVeiculo] = useState(0);
  const session = JSON.parse(localStorage.getItem("CarJato"));
  const userId = session?.user_id;
  const [loading, setLoading] = useState(false);
  const [saldo, setSaldo] = useState(0);

  const TotalVeiculo = async () => {
    setLoading(true);

    try {
      const response = await api.get(`/user/${userId}/veiculo`, {
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });

      const veiculos = response.data;
      setTotalVeiculo(veiculos.length);

      const total = veiculos.reduce((sum, veiculo) => {
        return sum + parseFloat(veiculo.price); // Some os preços dos veículos
      }, 0);

      setSaldo(total);
    } catch (error) {
      alert("Erro ao mostrar o total, tente novamente depois.");
    } finally {
      setLoading(false);
    }
  };

  // O array vazio [] garante que a função será chamada apenas na montagem do componente
  useEffect(() => {
    TotalVeiculo();
  }, []); // Adicione um array vazio para evitar múltiplas execuções

  return (
    <ContainerFianceiro>
      {loading ? (
        <CenterLoading>
          <ScaleLoader color="black" />
        </CenterLoading>
      ) : (
        <>
          <TitelFina>Financeiro:</TitelFina>
          <CardsMoney>
            <h2>Total Veículos</h2>
            <h1>{totalVeiculo}</h1>
          </CardsMoney>
          <CardsMoney>
            <h2>Saldo Total</h2>
            <h1>R${saldo.toFixed(2)}</h1> {/* Mostra o saldo com 2 casas decimais */}
          </CardsMoney>
        </>
      )}
    </ContainerFianceiro>
  );
};
