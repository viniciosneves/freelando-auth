import styled from "@emotion/styled";
import { useSessaoUsuarioContext } from "../../contexto/SessaoUsuario";
import { Row, Container, Col } from "react-grid-system";
import { Card } from "../../componentes/Card/Card";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";

import background from './assets/perfil-bg.png'
import avatar from './assets/avatar.png'
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { Botao } from "../../componentes/Botao/Botao";

const TituloEstilizado = styled.h1`
    background: url(${background}) no-repeat;
    margin-top: 0;
    font-weight: 600;
    font-size: 40px;
    background-position: center;
    line-height: 246px;
    text-align: center;
`

const ImgEstilizada = styled.img`
    max-width: 100%;
    margin: 0 auto;
`

const Perfil = () => {

    const { perfil, setPerfil, atualizarPerfil } = useSessaoUsuarioContext();

    const aoSubmeterForm = (evento) => {
        evento.preventDefault()
        atualizarPerfil()
            .then(() => alert('Perfil atualizado com sucesso'))
            .catch(erro => console.log(erro))
    }

    return (<>
        <TituloEstilizado>
            Perfil
        </TituloEstilizado>
        <Container>
            <form onSubmit={aoSubmeterForm}>
                <Row>
                    <Col sm={12} md={5}>
                        <Card>
                            <div style={{ textAlign: 'center' }}>
                                <Tipografia componente='h3' variante='h3'>
                                    {perfil.nomeCompleto}
                                </Tipografia>
                                <ImgEstilizada src={avatar} />
                            </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={7}>
                        <Tipografia componente='h3' variante='h3'>
                            Revise seus dados
                        </Tipografia>
                        <CampoTexto
                            titulo='Nome'
                            valor={perfil.nome}
                            onChange={nome => setPerfil(oldState => ({ ...oldState, nome }))}
                        />
                        <CampoTexto
                            titulo='Sobrenome'
                            valor={perfil.sobrenome}
                            onChange={sobrenome => setPerfil(oldState => ({ ...oldState, sobrenome }))}
                        />
                        <Row>
                            <Col sm={12} md={6}>
                                <CampoTexto
                                    titulo='Celular'
                                    valor={perfil.celular}
                                    onChange={celular => setPerfil(oldState => ({ ...oldState, celular }))}
                                    />
                            </Col>
                            <Col sm={12} md={6}>
                                <CampoTexto
                                    titulo='E-mail' tipo="email"
                                    valor={perfil.email}
                                    disabled
                                />
                            </Col>
                            <Col sm={12} md={6}>
                                <CampoTexto
                                    titulo='Código postal'
                                    valor={perfil.cep}
                                    onChange={cep => setPerfil(oldState => ({ ...oldState, cep }))}
                                />
                            </Col>
                            <Col sm={12} md={6}>
                                <CampoTexto
                                    titulo='País'
                                    valor={perfil.pais}
                                    onChange={pais => setPerfil(oldState => ({ ...oldState, pais }))}
                                />
                            </Col>
                            <Col sm={12} md={6}>
                                <Botao fluido>
                                    Salvar
                                </Botao>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </form>
        </Container>
    </>)
}

export default Perfil