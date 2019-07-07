// const TOKEN_KEY = '@SecretToken:token'
// const USER_KEY = '@SecretToken:userid'
// const USER_DATA = '@SecretToken:user'

export const isAuthenticated = () => {
  // AsyncStorage.getItem(TOKEN_KEY) !== null
}

export const getToken = () => {
  // AsyncStorage.getItem(TOKEN_KEY)
}
export const getUserID = () => {
  // AsyncStorage.getItem(USER_KEY)
}

export const getUser = () => {
  // JSON.parse(AsyncStorage.getItem(USER_DATA))
}

export const login = () => {
  // AsyncStorage.setItem(TOKEN_KEY, data.token)
  // AsyncStorage.setItem(USER_KEY, data.user.id)
  // AsyncStorage.setItem(USER_DATA, JSON.stringify(data.user))
}

export const logout = () => {
  // AsyncStorage.removeItem(TOKEN_KEY)
  // AsyncStorage.removeItem(USER_KEY)
  // AsyncStorage.removeItem(USER_DATA)
}
