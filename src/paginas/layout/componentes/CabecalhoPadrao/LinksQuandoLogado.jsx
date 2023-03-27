import { Link } from "../../../../componentes/Link/Link"
import { ItemListaInline } from "../../../../componentes/Lista/ItemListaInline"
import { ListaInline } from "../../../../componentes/Lista/ListaInline"
import { Link as RouterLink } from 'react-router-dom'
import styled from "@emotion/styled"
import { useSessaoUsuarioContext } from "../../../../contexto/SessaoUsuario"

const Item = styled(ItemListaInline)`
    margin-left: 8px;
`

const LinksQuandoLogado = () => {
    const { logout } = useSessaoUsuarioContext();
    return (<ListaInline>
        <Item>
            <RouterLink to="">
                <Link>Contrate</Link>
            </RouterLink>
        </Item>
        <Item>
            <RouterLink to="">
                <Link>Encontre trabalho</Link>
            </RouterLink>
        </Item>
        <Item>
            <RouterLink to="/area-logada/perfil">
                <Link>Meus projetos</Link>
            </RouterLink>
        </Item>
        <Item>
            <RouterLink to="" onClick={() => logout()}>
                <Link>Sair</Link>
            </RouterLink>
        </Item>
    </ListaInline>)
}

export default LinksQuandoLogado