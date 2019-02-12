import axios from 'axios'

axios.defaults.baseURL = 'https://cat-fact.herokuapp.com'

const appService = {
  getPosts(){
    return new Promise((resolve) => {
      axios.get(`/facts/random?animal=cat&amount=6`)
      .then(response => {
          resolve(response.data)
      })
    })
  }
}

export default appService
