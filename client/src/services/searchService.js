import Api from './api'

export default {
  search(searchQuery) {
    return Api().get(`/book/search/${searchQuery}`)
  },

  searchSuggestions(searchQuery) {
    return Api().get(`/book/search-suggestions/${searchQuery}`)
  }
  
}
