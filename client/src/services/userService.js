import Api from './api'

export default {
  login(user) {
    return Api().post('/user/login', user);
  },

  signup(user) {
    return Api().post('/user/signup', user);
  },
  getUserById(id){
    return Api.get(`/user/${id}`)
  },
  createNewShelf(userID,name,isPrivate){
    return Api().post('/user/shelf',{userID:userID,shelfName:name,isPrivate:isPrivate});
  }

}
