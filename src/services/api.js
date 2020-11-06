import axios from 'axios'

class Api {
  // allow setting custom headers
  constructor (args) {
    // eslint-disable-next-line no-console
    console.log('custom arguments', args)
    const magicToken = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)
    this.client = axios.create({
      headers: {
        Authorization: magicToken || '',
      },
    })
    this.client.interceptors.response.use(this.handleSuccess, this.handleError)
  }

  // success intercepter, incase we want to do something with every successful req
  handleSuccess = (response) => response

  // error intercepter, incase we want to do something with every failed req
  handleError = (error) => {
    if (error.response) {
      switch (error.response.status) {
      case 401:
        this.redirectTo(document, '/')
        break
      case 404:
        this.redirectTo(document, '/404')
        break
      default:
        this.redirectTo(document, '/500')
        break
      }
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }

  get = (path, callback) => this.client.get(path).then((res) => callback(res.status, res.data))

  patch = (path, payload, callback) => this.client.request({
    method: 'PATCH',
    url: path,
    responseType: 'json',
    data: payload,
  }).then((response) => callback(response.status, response.data))

  post = (path, payload, callback) => this.client.request({
    method: 'POST',
    url: path,
    responseType: 'json',
    data: payload,
  }).then((response) => callback(response.status, response.data))

  redirectTo = (document, path) => {
    // TODO: redirect to proper error page https://github.com/mohitkyadav/grimoire-app/issues/2
    // eslint-disable-next-line no-console
    console.log(path)
  }
}

export default Api
