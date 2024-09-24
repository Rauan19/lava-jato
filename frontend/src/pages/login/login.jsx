import { TelaLogin, Corpo, Title, LABEL, INPUT, CaixaButao, Espaco, Butao, CenterImg, IMG, Form } from "./login.style";
import api from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Estado de loading

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        setLoading(true); // Inicia o loading
        try {
            const response = await api.post("/login", { email, password });
            const token = response?.data?.token;
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            const userId = decodedToken.user_id;
            localStorage.setItem("CarJato", JSON.stringify({ token, user_id: userId }));
            alert("Login realizado");
            navigate("/");
        } catch (error) {
            alert("Erro, tente novamente");
        } finally {
            setLoading(false); 
        }
    };

    return (
        <TelaLogin>
            {loading ? ( 
                <CenterImg>
                    <ScaleLoader color="black" />
                </CenterImg>
            ) : ( 
                <Corpo>
                    <CenterImg>
                        <IMG src="https://png.pngtree.com/png-vector/20230809/ourmid/pngtree-cartoon-car-vintage-vector-illustration-illustradocvo-png-image_6838947.png" alt="" />
                    </CenterImg>
                    <Title>Login</Title>
                    <Form onSubmit={login}>
                        <LABEL htmlFor="email">Email</LABEL>
                        <INPUT
                            type="email"
                            id="email"
                            placeholder="Digite seu Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <LABEL htmlFor="password">Senha</LABEL>
                        <INPUT
                            type="password"
                            id="password"
                            placeholder="Digite a senha"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Espaco />
                        <Espaco />
                        <CaixaButao>
                            <Espaco />
                            <Butao type="submit">Login</Butao>
                            <Espaco />
                            <Butao onClick={() => navigate('/registro')}>Fazer Cadastro</Butao>
                            <Espaco />
                            <a href="/requestPass">Esqueceu a senha?</a>
                        </CaixaButao>
                    </Form>
                </Corpo>
            )}
        </TelaLogin>
    );
};
