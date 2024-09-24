import { useState } from "react";
import { LogoHome, Form, ContainerHome, INPUT, EspacoHome, LabelHome, CenterLoading, Butao } from "./homeStyle";
import api from "../../services/api";
import { ScaleLoader } from "react-spinners";

export const Home = () => {
   const session = JSON.parse(localStorage.getItem("CarJato"));
   const userId = session?.user_id; // Obter o userId da sessão armazenada
   const [loading, setLoading] = useState(false);

   console.log(userId);
   const [data, setData] = useState({
      model: "",
      color: "",
      licensePlate: "",
      service: "",
      price: ""
   });

   const AddVeiculo = async (ev) => {
      setLoading(true);
      ev.preventDefault();
      if (!session || !session.token) {
         alert("Sessão inválida. Por favor, faça login novamente.");
         setLoading(false);
         return;
      }

      try {
         await api.post(
            `/user/${userId}/veiculo`,
            {
               model: data.model,
               price: data.price,
               licensePlate: data.licensePlate,
               service: data.service,
               color: data.color
            },
            {
               headers: {
                  Authorization: `Bearer ${session.token}`
               }
            }
         );
         alert("Veículo cadastrado");
         console.log("Veículo cadastrado");
      } catch (error) {
         alert("Erro ao cadastrar, tente novamente");
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <LogoHome>Home</LogoHome>
         <ContainerHome>
            {loading ? (
               <CenterLoading>
                  <ScaleLoader color="black" />
               </CenterLoading>
            ) : (
               <Form onSubmit={AddVeiculo}>
                  <EspacoHome />
                  <LabelHome htmlFor="">Modelo:</LabelHome>
                  <EspacoHome />
                  <INPUT
                     type="text"
                     placeholder="Modelo do veículo"
                     required
                     value={data.model}
                     onChange={(ev) => setData({ ...data, model: ev.target.value })}
                  />
                  <EspacoHome />
                  <LabelHome htmlFor="">Cor:</LabelHome>
                  <EspacoHome />
                  <INPUT
                     type="text"
                     placeholder="Cor do veículo"
                     required
                     value={data.color}
                     onChange={(ev) => setData({ ...data, color: ev.target.value })}
                  />
                  <EspacoHome />
                  <LabelHome htmlFor="">Placa:</LabelHome>
                  <EspacoHome />
                  <INPUT
                     type="text"
                     placeholder="Placa do veículo"
                     required
                     value={data.licensePlate}
                     onChange={(ev) => setData({ ...data, licensePlate: ev.target.value })}
                  />
                  <EspacoHome />
                  <LabelHome htmlFor="">Serviço:</LabelHome>
                  <EspacoHome />
                  <INPUT
                     type="text"
                     placeholder="Serviço"
                     required
                     value={data.service}
                     onChange={(ev) => setData({ ...data, service: ev.target.value })}
                  />
                  <EspacoHome />
                  <LabelHome htmlFor="">Valor:</LabelHome>
                  <EspacoHome />
                  <INPUT
                     type="number" // Corrigido de "nunber" para "number"
                     placeholder="Valor do serviço"
                     required
                     value={data.price}
                     onChange={(ev) => setData({ ...data, price: ev.target.value })}
                  />
                  <EspacoHome />
                  <Butao type="submit">Adicionar</Butao>
               </Form>
            )}
         </ContainerHome>
      </>
   );
};
