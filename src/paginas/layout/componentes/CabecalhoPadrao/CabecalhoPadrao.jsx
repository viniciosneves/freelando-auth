import { Col, Container, Row } from "react-grid-system"
import { Cabecalho } from "../../../../componentes/Cabecalho/Cabecalho"
import { Link as RouterLink } from 'react-router-dom'
import { FreelandoLogo } from "../../../../componentes/Icones/FreelandoLogo"
import LinksQuandoLogado from "./LinksQuandoLogado"
import LinksQuandoDeslogado from "./LinksQuandoDeslogado"
import { useEffect } from "react"
import { useSessaoUsuarioContext } from "../../../../contexto/SessaoUsuario"

const CabecalhoPadrao = () => {
    const { usuarioEstaLogado } = useSessaoUsuarioContext();
    useEffect(() => {
        console.log(usuarioEstaLogado);
    }, [usuarioEstaLogado])
    return (
        <Cabecalho>
            <Container>
                <Row align="center">
                    <Col>
                        <RouterLink to="/">
                            <FreelandoLogo alt="Freelando Home Page" />
                        </RouterLink>
                    </Col>
                    <Col style={{ textAlign: 'right' }} sm={12} md={8}>
                        {usuarioEstaLogado ? <LinksQuandoLogado /> : <LinksQuandoDeslogado />}
                    </Col>
                </Row>
            </Container>
        </Cabecalho>
    )
}

export default CabecalhoPadrao