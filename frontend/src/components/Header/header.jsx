import { useNavigate } from "react-router-dom"
import { HeaderComponets } from "./styledHeader"
import { Butao1 } from "./styledHeader"
export const Header = () => {
    const navigate = useNavigate()

    const Deslogar = () => {
        localStorage.removeItem('CarJato')
        navigate('/login')
    }
    
    return (
        <HeaderComponets  >
            <Butao1  onClick={Deslogar} >Sair</Butao1>
        </HeaderComponets>

    )
}