import { useState } from "react";
import api from "../../services/api";
import { ContainerREquestSenha, Caixa , INPUT, Butao, Flex, Form, CenterImg, IMG } from "./request.style";
import { ScaleLoader } from "react-spinners"; // Loader

export const PageRequestSenha = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // Estado de loading

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Inicia o loading
        
        try {
            const response = await api.post('/request-reset-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            console.log({ error });
        } finally {
            setLoading(false); // Finaliza o loading
        }
    };

    return (
        <ContainerREquestSenha>
            <Caixa>
                <CenterImg>
                    <IMG src="https://png.pngtree.com/png-vector/20230809/ourmid/pngtree-cartoon-car-vintage-vector-illustration-illustradocvo-png-image_6838947.png" alt="" />
                </CenterImg> 
                <h2>SOLICITAÇÃO DE SENHA</h2>
                {loading ? ( // Se estiver carregando, exibe o loader
                    <Flex>
                        <ScaleLoader color="black" />
                    </Flex>
                ) : ( // Se não estiver carregando, exibe o formulário
                    <Form onSubmit={handleSubmit}>
                        <label><strong>Email:</strong></label>
                        <Flex>
                            <INPUT
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Digite seu email"
                            />
                            <Butao type="submit">Enviar</Butao>
                        </Flex>
                    </Form>
                )}
                {message && <p>{message}</p>}
            </Caixa>
        </ContainerREquestSenha>
    );
};
