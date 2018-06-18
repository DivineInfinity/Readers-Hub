import Api from './Api'

export default {
  fetchBookDetails () {
    return Api().get('/bookdetails')
  },

  fetchBookInMongo (x) {
    return Api().get(`/bookinfo/${x}`)
  }
}
