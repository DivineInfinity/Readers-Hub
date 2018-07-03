import Api from './api'

export default {
  fetchGenreList() {
    return Api().get(`/book/genre`)
  }
}
