import Api from './api'

export default {
  fetchReviews(id) {
    return Api().get(`/reviews/${id}`)
  }
}
