import { Route, Routes } from 'react-router-dom';
import { Registro } from '../pages/registro/registro';
import { Login } from '../pages/login/login';
import { MainPage } from '../pages/mainPage/mainPage';
import { Home } from '../pages/home/home';
import { Pageveiculo } from '../pages/veiculos/veiculos';
import { PageFinanceiro } from '../pages/financeiro/financeiro';
import { PageRequestSenha } from '../pages/RsquestSenha/RequestSenha';
import ResetPassword from '../pages/resetpassword/resetpassword';
import { BloquePages } from './private';

export const RoutesComponents = () => {
    return (
        <Routes>
            {/* Rotas públicas */}
            <Route path='/login' element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path='/requestPass' element={<PageRequestSenha />} />
            <Route path='/reset-password/:token' element={<ResetPassword />} />

            {/* Rotas protegidas */}
            <Route path='/' element={<BloquePages Component={MainPage} />}>
                <Route index element={<Home />} /> {/* index path para a rota principal */}
                <Route path='veiculos' element={<BloquePages Component={Pageveiculo} />} />
                <Route path='financeiro' element={<BloquePages Component={PageFinanceiro} />} />
            </Route>
        </Routes>
    );
};
