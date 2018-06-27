
import Api from './api'

export default {
  fetchBookDetails (id) {
    return Api().get(`/book-details/${id}`)
  },

  fetchBookInMongo (id) {
    return Api().get(`/bookinfo/${id}`)
  }
}
