import { Container } from "./main.style";
import { Sidebarr } from "../../components/sidebar/sidebar";
import { Container2 } from "./main.style";
import { Header } from "../../components/Header/header";
import { Outlet } from "react-router-dom";
export const MainPage = () => {
    return (
        <Container>
           <Sidebarr  />
           <Container2>
             <Header />
             <Outlet/>
           </Container2>
           
        </Container>
        

    )
}