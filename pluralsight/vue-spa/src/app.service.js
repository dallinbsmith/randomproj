import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

const appService = {
  getPosts (categoryId){
    return new Promise((resolve) => {
      axios.get('https://cat-fact.herokuapp.com')
      .then(response => {
          resolve(response.data)
      })
    })
  }
}

export default appService
