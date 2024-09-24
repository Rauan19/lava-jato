import { Navigate } from 'react-router-dom';

export const BloquePages = ({ Component }) => {
    const session = JSON.parse(localStorage.getItem("CarJato"));

    // Caso a sessão não exista, redireciona para a página de login
    if (!session) {
        return <Navigate to="/login" />;
    }

    // Caso a sessão exista, renderiza o componente protegido
    return <Component />;
};
