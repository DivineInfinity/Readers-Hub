import Api from './api'

export default {
  fetchLists() {
    return Api().get('/')
  }
}
