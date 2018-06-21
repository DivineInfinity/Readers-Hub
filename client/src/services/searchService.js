import Api from './api'

export default {
  search(searchQuery) {
    return Api().get(`/book/search/${searchQuery}`)
  }
}
