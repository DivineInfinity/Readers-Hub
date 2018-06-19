
import Api from './api'

export default {
  fetchBookDetails () {
    return Api().get('/bookdetails')
  },

  fetchBookInMongo (x) {
    return Api().get(`/bookinfo/${x}`)
  }
}
