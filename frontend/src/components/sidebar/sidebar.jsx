import { SideBarStyle } from "./styleSidebar"
import { TextLink } from "./styleSidebar"
import { IoMdHome } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { EspacoIco } from "./styleSidebar";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Nav } from "./styleSidebar";
import { CenterImg } from "./styleSidebar";
import { IMG } from "./styleSidebar";
import { useNavigate } from "react-router-dom";
import { Pzao } from "./styleSidebar";
export const Sidebarr = () => {
    const navigate = useNavigate()

    return (
        <SideBarStyle>
            <CenterImg>
                <IMG src="https://png.pngtree.com/png-vector/20230809/ourmid/pngtree-cartoon-car-vintage-vector-illustration-illustradocvo-png-image_6838947.png" alt="" />
            </CenterImg>
            
            <Nav>
                <TextLink   onClick={() => navigate("/")}   ><IoMdHome style={{ fontSize: '34px' }} /><EspacoIco/><Pzao>Home</Pzao> </TextLink>
                <TextLink onClick={() => navigate("/veiculos")}><FaCar style={{ fontSize: '27px' }} /><EspacoIco/><Pzao> Veiculos</Pzao></TextLink>
                <TextLink onClick={() => navigate('/financeiro')}><FaMoneyCheckDollar style={{ fontSize: '27px' }}/><EspacoIco/><Pzao>Financeiro</Pzao></TextLink>
            </Nav>
        </SideBarStyle>
    )
}