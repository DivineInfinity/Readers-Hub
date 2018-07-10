import Api from './api'

export default {
  login(user) {
    return Api().post('/user/login', user);
  },

  signup(user) {
    return Api().post('/user/signup', user);
  },

  getShelves(userId, token){
    console.log("Aditya is here in shelf......");
    return Api().get(`/user/shelves/${userId}`, { headers:{
      'Authorization': 'bearer ' + token
    }});
  },

  getBooksFromShelves(userId, token){
    console.log("Aditya is here in shelf......");
    return Api().get(`/user/shelf/${userId}`, { headers:{
      'Authorization': 'bearer ' + token
    }});
  },

  addToShelf(shelfId, bookId){
    var book ={
      shelfId:shelfId,
      bookId:bookId
    }
    return Api().post("/user/shelf/add-book", book)
  },
  
  getUserById(id){
    return Api.get(`/user/${id}`)
  },
  createNewShelf(userID,name,isPrivate){
    return Api().post('/user/shelf',{userID:userID,shelfName:name,isPrivate:isPrivate});
  }

}
