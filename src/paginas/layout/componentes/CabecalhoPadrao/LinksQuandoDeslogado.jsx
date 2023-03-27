import { Link } from "../../../../componentes/Link/Link"
import { ItemListaInline } from "../../../../componentes/Lista/ItemListaInline"
import { ListaInline } from "../../../../componentes/Lista/ListaInline"
import { Link as RouterLink } from 'react-router-dom'

const LinksQuandoDeslogado = () => {
    return (<ListaInline>
        <ItemListaInline>
            <RouterLink to="/login">
                <Link>Login</Link>
            </RouterLink>
        </ItemListaInline>
    </ListaInline>)
}

export default LinksQuandoDeslogado