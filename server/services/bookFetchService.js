const nodeFetch = require('node-fetch');

 var bookFetchService=  async function fetchBook(x) {
        var response= await nodeFetch(`https://www.googleapis.com/books/v1/volumes?q=${x}&maxResults=1&key=AIzaSyA9xS6qK1K1MqpbRocpJaBOye45b3yihjY`)
        return response.json();
}
module.exports= {
fetchBookDetails : bookFetchService
}