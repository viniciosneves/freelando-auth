import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AmazenadorToken } from '../autenticacao/AmazenadorToken';
import { http } from '../http/http';

const perfilInicial = {
    nomeCompleto: '',
    nome: '',
    sobrenome: '',
    celular: '',
    email: '',
    cep: '',
    pais: '',
}

const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    logout: () => null,
    login: (email, senha) => null,
    setPerfil: (perfil) => null,
    atualizarPerfil: () => null,
    perfil: perfilInicial,
});



export const useSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext);
};

export const SessaoUsuarioProvider = ({ children }) => {
    const [perfil, setPerfil] = useState(perfilInicial)
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(
        AmazenadorToken.estaLogado
    );
    const navigate = useNavigate();

    const logout = () => {
        AmazenadorToken.limpar();
        setUsuarioEstaLogado(false);
        navigate('/');
    };

    const obterPerfil = () => {
        http.get('profile').then((resposta) => {
            setPerfil(oldState => ({
                ...oldState,
                ...resposta.data
            }));
        });
    };

    const atualizarPerfil = () => {
        return http.put('profile', perfil)
    };

    useEffect(() => {
        if (usuarioEstaLogado) {
            obterPerfil()
        }
    }, [usuarioEstaLogado])

    const login = (email, senha) => {
        http
            .post('auth/login', { email, senha })
            .then((resposta) => {
                AmazenadorToken.definirTokens(resposta.data.access_token, resposta.data.refresh_token);
                setUsuarioEstaLogado(true);
            })
            .catch(() => alert('Falha ao efetuar login!'))
            .finally(() => navigate('/'));
    };


    const value = {
        usuarioEstaLogado,
        logout,
        login,
        perfil,
        setPerfil,
        atualizarPerfil
    };

    return (
        <SessaoUsuarioContext.Provider value={value}>
            {children}
        </SessaoUsuarioContext.Provider>
    );
};