import Api from '/services/api'

export default {
  fetchLists() {
    return Api().get('lists')
  }
}
