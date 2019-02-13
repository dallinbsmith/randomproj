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
  },
  // login(credentials){
  //   return new Promise((resolve,reject) => {
  //     axios.post('services/auth.php', credentials)
  //     .then(response => {
  //       resolve(response.data)
  //     }).catch(response => {
  //       reject(response.status)
  //     })
  //   })
  // }
}

export default appService
