import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AmazenadorToken } from '../autenticacao/AmazenadorToken';
import { http } from '../http/http';

const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    logout: () => null,
    login: (email, senha) => null,
    perfil: {},
});



export const useSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext);
};

export const SessaoUsuarioProvider = ({ children }) => {
    const [perfil, setPerfil] = useState({})
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(
        !!AmazenadorToken.accessToken
    );
    const navigate = useNavigate();

    const logout = () => {
        AmazenadorToken.limpar();
        setUsuarioEstaLogado(false);
        navigate('/');
    };

    const obterPerfil = () => {
        http.get('profile').then((resposta) => {
            setPerfil(resposta.data);
        });
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
    };

    return ( 
        <SessaoUsuarioContext.Provider value={value}>
            {children}
        </SessaoUsuarioContext.Provider>
    );
};