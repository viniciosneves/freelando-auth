import { useSessaoUsuarioContext } from "../../contexto/SessaoUsuario";

const Perfil = () => {
    const { perfil } = useSessaoUsuarioContext();
    return (<pre>
        {JSON.stringify(perfil)}
    </pre>)
}

export default Perfil