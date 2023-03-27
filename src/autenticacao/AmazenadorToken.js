const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'

export class AmazenadorToken {

    static definirTokens (accessToken, refreshToken) {
        sessionStorage.setItem(ACCESS_TOKEN, accessToken)
        sessionStorage.setItem(REFRESH_TOKEN, refreshToken)  
    }

    static limpar () {
        sessionStorage.clear()
    }

    static get accessToken () {
        return sessionStorage.getItem(ACCESS_TOKEN)
    }

    static get refreshToken () {
        return sessionStorage.getItem(REFRESH_TOKEN)
    }
}