import { Navigate, Outlet } from "react-router-dom"
import { useSessaoUsuarioContext } from "../contexto/SessaoUsuario";

const RotaProtegidaPorLogin = () => {
    const { usuarioEstaLogado } = useSessaoUsuarioContext();

    if (!usuarioEstaLogado) {
        return <Navigate to="/" replace />
    }

    return (<Outlet />)
}

export default RotaProtegidaPorLogin