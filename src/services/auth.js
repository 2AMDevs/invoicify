import Api from './api'

class Auth {
  constructor () {
    this.authenticated = !!localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)
  }

  login = (email, password, callback) => {
    const client = new Api()
    const url = `${process.env.REACT_APP_API_HOST}/auth/login`
    client.post(url, {
      email,
      password,
    }, (status, data) => {
      if (status === 200) {
        localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, data.Authorization)
        this.authenticated = true
      }
      if (callback) {
        return callback()
      }
    })
  }

  signup = (email, password, callback) => {
    const client = new Api()
    const url = `${process.env.REACT_APP_API_HOST}/user`
    client.post(url, {
      email,
      password,
      username: email,
    }, (status, data) => {
      if (status === 201) {
        localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, data.Authorization)
        this.authenticated = true
      }
      if (callback) {
        return callback()
      }
    })
  }

  logout = (callback) => {
    localStorage.clear()
    this.authenticated = false
    if (callback) {
      return callback()
    }
  }

  isAuthenticated () {
    this.authenticated = !!localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)
    // TODO: https://github.com/aashutoshrathi/grimoire-backend/issues/1
    // /current_user
    // auth token header
    // if token valid returns current user
    // else unauth error
    // i'll remove token from localstorage
    // and redirect to login
    return this.authenticated
  }
}

export default Auth
