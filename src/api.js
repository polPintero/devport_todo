class API {
  constructor(domain) {
    this.domain = domain
  }
  async sendRequest (url = '/', params = {}) {
    let response = await fetch(url, params)
    try {
      response = await response.json()
    } catch (err){
      console.log(err)
    }
    return response
  }
}

class DevPortAPI extends API {
  async getUsers () {
    let url = this.domain + '/users'
    const response = await this.sendRequest(url)
    return response
  }

  async getToDos(){
    let url = this.domain + '/todos'
    const response = await this.sendRequest(url)
    return response
  }
}

export default new DevPortAPI('https://jsonplaceholder.typicode.com')


