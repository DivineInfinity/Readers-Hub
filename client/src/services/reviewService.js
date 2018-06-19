import Api from './api'

export default {
  fetchReviews() {
    return Api().get('/reviews')
  }
}
