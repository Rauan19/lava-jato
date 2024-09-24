import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { ContainerRedefinirtSenha, Butao, Form, Flex, CaixaRedefinir, INPUT } from './resepasswodStyle';
import { ScaleLoader } from 'react-spinners'; // Loader

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Estado de loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Inicia o loading

    try {
      const response = await api.post('/resetpassword', { token, newPassword });

      if (response.data && response.data.message) {
        setMessage(response.data.message);
      } else {
        setError('Erro ao processar a solicitação de redefinição de senha');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Erro desconhecido ao processar a solicitação');
      console.error('Error:', error);
    } finally {
      setLoading(false); // Finaliza o loading
    }
  };

  return (
    <ContainerRedefinirtSenha>
      {loading ? ( // Se estiver carregando, exibe o loader
        <Flex>
          <ScaleLoader color="black" />
        </Flex>
      ) : ( // Se não estiver carregando, exibe o formulário de redefinição
        <CaixaRedefinir>
          <h2>Redefinir Senha</h2>
          <Form onSubmit={handleSubmit}>
            <label>Nova Senha:</label>
            <Flex>
              <INPUT
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                placeholder='Digite a nova senha'
              />
              <Butao type="submit">Redefinir Senha</Butao>  
            </Flex>
          </Form>
          {message && <p>{message}</p>}
          {error && <p>{error}</p>}
        </CaixaRedefinir>
      )}
    </ContainerRedefinirtSenha>
  );
};

export default ResetPassword;
