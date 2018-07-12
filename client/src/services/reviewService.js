import Api from './api'

export default {
  fetchReviews(id) {
    return Api().get(`/reviews/${id}`)
  },
  updateReview(review){
    return Api().post('/reviews',review)
  },
  getReview(bookId, userId){
    return Api().get(`/reviews/user/${userId}/${bookId}`)
  }
}
