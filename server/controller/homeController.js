const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');

const app = express()
const router = express.Router();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

router.get('/', (req, res, next) => {
    console.log("Got a Get request");
    res.status(200).json(
        {
            lists: [{
                name: "Really Trending",
                books: [{
                    frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                    title: "Carry On, Jeeves",
                    author: "PG Wodehouse",
                    avgRating: "4.8",
                    description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper. Well, what I say is: why not? The man's a genius. Having recently given his valet the boot, idle aristocrat Bertram Wooster is feeling a touch adrift. Then Jeeves shimmers into his life, and all starts coming up roses. For Bertie's new gentleman's gentleman is not only an expert at this valeting business, but also exceedingly skilled at hauling his employer out of those ludicrous scrapes into which he is so remarkably prone to plummeting."
                }]
            }, {
                name: "New Releases",
                books:
                    [{
                        frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                        title: "Carry On, Jeeves",
                        author: "PG Wodehouse",
                        avgRating: "4.8",
                        description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper. Well, what I say is: why not? The man's a genius. Having recently given his valet the boot, idle aristocrat Bertram Wooster is feeling a touch adrift. Then Jeeves shimmers into his life, and all starts coming up roses. For Bertie's new gentleman's gentleman is not only an expert at this valeting business, but also exceedingly skilled at hauling his employer out of those ludicrous scrapes into which he is so remarkably prone to plummeting."
                    }]
            }]
        }
    )
})


module.exports = router;
//connect db
//create server file and import
