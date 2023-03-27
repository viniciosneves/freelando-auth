// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { http } from "../http/http"
// import { AmazenadorToken } from "./AmazenadorToken"

// export const registrarUsuario = (usuario) => {
//     return http.post('auth/register', usuario)
// }

// export const useSessaoUsuario = () => {
//     const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(!!AmazenadorToken.accessToken)

//     const logout = () => {
//         AmazenadorToken.limpar()
//         setUsuarioEstaLogado(false)
//     }
//     const login = (accessToken, refreshToken) => {
//         AmazenadorToken.definirTokens(accessToken, refreshToken)
//         setUsuarioEstaLogado(true)
//     }
//     return {
//         usuarioEstaLogado,
//         setUsuarioEstaLogado,
//         login,
//         logout
//     }
// }

// export const useLogout = () => {
//     const navigate = useNavigate()
//     const { logout } = useSessaoUsuario()
//     return () => {
//         logout()
//         navigate("/")
//     }
// }

// export const useEfetuarLogin = () => {
//     const navigate = useNavigate()
//     const { login } = useSessaoUsuario()
//     return (email, senha) => http.post('auth/login', { email, senha })
//         .then(resposta => {
//             login(resposta.data.access_token, resposta.data.refresh_token)
//             navigate('/area-logada/perfil')
//         })
//         .catch(() => alert('Falha ao efetuar login!'))
// }

// export const useObterPerfil = () => {
//     const [perfil, setPerfil] = useState({})
//     useEffect(() => {
//         http.get('profile')
//             .then(resposta => {
//                 setPerfil(resposta.data)
//             })
//     }, [])
//     return perfil;
// }
