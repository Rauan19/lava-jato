import { TelaRegistro, Corpo, Title, Butao, Espaco, CaixaButao, INPUT, LABEL, IMG, CenterImg, Form } from "./stylesRegistro";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import { ScaleLoader } from "react-spinners"; // Loader

export const Registro = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Estado de loading
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true); // Inicia o loading

        try {
            await api.post("/registro", data);
            alert("Usuário criado com sucesso");
            navigate("/login");
        } catch (error) {
            alert("Erro ao criar usuário, tente novamente");
        } finally {
            setLoading(false); // Finaliza o loading
        }
    };

    return (
        <TelaRegistro>
            {loading ? ( // Se estiver carregando, exibe o loader
                <CenterImg>
                    <ScaleLoader color="black" />
                </CenterImg>
            ) : ( // Se não estiver carregando, exibe o formulário de cadastro
                <Corpo>
                    <CenterImg>
                        <IMG src="https://png.pngtree.com/png-vector/20230809/ourmid/pngtree-cartoon-car-vintage-vector-illustration-illustradocvo-png-image_6838947.png" alt="" />
                    </CenterImg>
                    <Form onSubmit={handleSubmit}>
                        <Title>Cadastre-se</Title>
                        <LABEL htmlFor="nome">Nome</LABEL>
                        <INPUT
                            type="text"
                            value={data.name}
                            id="nome"
                            placeholder="Digite seu nome"
                            required
                            onChange={(ev) => setData({ ...data, name: ev.target.value })}
                        />
                        <LABEL htmlFor="email">Email</LABEL>
                        <INPUT
                            type="email"
                            value={data.email}
                            id="email"
                            placeholder="Digite seu Email"
                            required
                            onChange={(ev) => setData({ ...data, email: ev.target.value })}
                        />
                        <LABEL htmlFor="password">Senha</LABEL>
                        <INPUT
                            type="password"
                            value={data.password}
                            id="password"
                            placeholder="Digite a senha"
                            required
                            onChange={(ev) => setData({ ...data, password: ev.target.value })}
                        />
                        <CaixaButao>
                            <Espaco />
                            <Butao type="submit">Cadastrar</Butao>
                            <Espaco />
                            <Butao onClick={() => navigate("/login")} type="button">Fazer login</Butao>
                        </CaixaButao>
                    </Form>
                </Corpo>
            )}
        </TelaRegistro>
    );
};
