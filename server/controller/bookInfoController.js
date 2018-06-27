const bookFetchService = require('../services/bookFetchService');
const Book = require('../models/book');
var mongoose = require('mongoose');
exports.insertBookInfo= async function(req,res,next){

    var fetchedBook = await bookFetchService.fetchBookDetails(req.params.x);

    var response=fetchedBook.items[0];
    console.log(response);

    if(response.volumeInfo.languages)
    {
        var languages=response.volumeInfo.languages;
    }
    else
    {
        var languages=[];
        languages[0]=response.volumeInfo.language;
    }


    var book = new Book({
        _id:new mongoose.Types.ObjectId(),
        title:response.volumeInfo.title,
        author: response.volumeInfo.authors[0],
        publisher:response.volumeInfo.publisher,
        publishedDate: response.volumeInfo.publishedDate,
        frontCover:response.volumeInfo.imageLinks.smallThumbnail,
        description:response.volumeInfo.description,
        genre:response.volumeInfo.categories,
        averageRating:response.volumeInfo.averageRating,
        pageCount:response.volumeInfo.pageCount,
        languages:languages,
        isbn:response.volumeInfo.industryIdentifiers[0].identifier,
        buyLinks:response.volumeInfo.buyLinks,
        isTrending:false,
        isNewlyReleased:false
    });


    book.save().then(
        res.status(201).json({messageEagle:"Book inserted successfully in the DB",book:book})
    ).catch((err) => {res.status(500).json({messageEagle:"There was an error because of Mr Shebaz"})}
    );
}
