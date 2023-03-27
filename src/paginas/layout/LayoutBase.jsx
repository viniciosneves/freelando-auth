import { Outlet } from "react-router-dom"
import { SessaoUsuarioProvider } from "../../contexto/SessaoUsuario"
import CabecalhoPadrao from "./componentes/CabecalhoPadrao/CabecalhoPadrao"
import RodapePadrao from "./componentes/RodapePadrao"

const LayoutBase = () => {
    return (
        <SessaoUsuarioProvider>
            <CabecalhoPadrao />
            <Outlet />
            <RodapePadrao />
        </SessaoUsuarioProvider>
    )
}

export default LayoutBase