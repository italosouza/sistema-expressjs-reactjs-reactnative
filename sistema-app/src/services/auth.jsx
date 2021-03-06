const TOKEN_KEY = '@SecretToken:token'
const USER_KEY = '@SecretToken:userid'
const USER_DATA = '@SecretToken:user'

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => sessionStorage.getItem(TOKEN_KEY)
export const getUserID = () => sessionStorage.getItem(USER_KEY)

export const getUser = () => JSON.parse(sessionStorage.getItem(USER_DATA))

export const login = data => {
  sessionStorage.setItem(TOKEN_KEY, data.token)
  sessionStorage.setItem(USER_KEY, data.user.id)
  sessionStorage.setItem(USER_DATA, JSON.stringify(data.user))
}

export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY)
  sessionStorage.removeItem(USER_KEY)
  sessionStorage.removeItem(USER_DATA)
}
