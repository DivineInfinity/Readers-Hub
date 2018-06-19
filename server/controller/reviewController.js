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
            book: {
                title: "Book name",
                author: "random author",
                frontCover:
                  "https://images-na.ssl-images-amazon.com/images/I/51swx%2Bc%2BwyL._SY346_.jpg",
                avgRating: 4.4
              },
              ratings: {
                fiveStar: 50,
                fourStar: 30,
                threeStar: 20,
                twoStar: 7,
                oneStar: 3,
                totalRatings: 300
              },
              reviews: [
                {
                  userName: "jhon Doe",
                  profilePic: "https://www.w3schools.com/howto/img_avatar.png",
                  review:
                    "Ut dolor excepteur   asdasdasdasdsad occaecat et irure quis aliquip ipsum esse elit minim laborum est dolore. Et commodo cupidatat irure adipisicing eiusmod qui adipisicing cupidatat labore aliqua consequat duis ad. Commodo commodo proident cillum minim duis ullamco minim voluptate. Minim sint id eiusmod exercitation eiusmod veniam deserunt. Lorem occaecat non ex dolore non aliqua duis esse.Aute aute eu incididunt nisi nisi culpa esse fugiat. Qui anim est magna nisi dolore aliqua aliquip sint. Esse ut laborum irure esse ullamco proident. Quis esse ex eu est Lorem est aliquip voluptate occaecat consequat do aliquip. Tempor cupidatat eu culpa dolore ad.",
                  reviewTitle:
                    "Velit consequat incididunt Lorem sadasdasd sunt eu consequat esse elit est aliquip occaecat consequat do.",
                  rating: 1,
                  reviewDate: "12/11/2012",
                  isExpanded: false
                },
                {
                  userName: "jhon Doe",
                  profilePic: "https://www.w3schools.com/howto/img_avatar.png",
                  review:
                    "Ut dolor excepteur occaecat et irure quis aliquip ipsum esse elit minim laborum est dolore. Et commodo cupidatat irure adipisicing eiusmod qui adipisicing cupidatat labore aliqua consequat duis ad. Commodo commodo proident cillum minim duis ullamco minim voluptate. Minim sint id eiusmod exercitation eiusmod veniam deserunt. Lorem occaecat non ex dolore non aliqua duis esse.Aute aute eu incididunt nisi nisi culpa esse fugiat. Qui anim est magna nisi dolore aliqua aliquip sint. Esse ut laborum irure esse ullamco proident. Quis esse ex eu est Lorem est aliquip voluptate occaecat consequat do aliquip. Tempor cupidatat eu culpa dolore ad.",
                  reviewTitle:
                    "Velit consequat incididunt Lorem sunt eu consequat esse elit est aliquip occaecat consequat do.",
                  rating: 5,
                  reviewDate: "12/12/2012",
                  isExpanded: false
                },
                {
                  userName: "jhon Doe",
                  profilePic: "https://www.w3schools.com/howto/img_avatar.png",
                  review:
                    "Ut dolor excepteur occaecat et irure quis aliquip ipsum esse elit minim laborum est dolore. Et commodo cupidatat irure adipisicing eiusmod qui adipisicing cupidatat labore aliqua consequat duis ad. Commodo commodo proident cillum minim duis ullamco minim voluptate. Minim sint id eiusmod exercitation eiusmod veniam deserunt. Lorem occaecat non ex dolore non aliqua duis esse.Aute aute eu incididunt nisi nisi culpa esse fugiat. Qui anim est magna nisi dolore aliqua aliquip sint. Esse ut laborum irure esse ullamco proident. Quis esse ex eu est Lorem est aliquip voluptate occaecat consequat do aliquip. Tempor cupidatat eu culpa dolore ad.",
                  reviewTitle:
                    "Velit consequat incididunt Lorem sunt eu consequat esse elit est aliquip occaecat consequat do.",
                  rating: 2,
                  reviewDate: "12/12/2012",
                  isExpanded: false
                },
                {
                  userName: "jhon Doe",
                  profilePic: "https://www.w3schools.com/howto/img_avatar.png",
                  review: "nice book",
                  reviewTitle:
                    "Velit consequat incididunt Lorem sunt eu consequat esse elit est aliquip occaecat consequat do.",
                  rating: 4,
                  reviewDate: "12/12/2012",
                  isExpanded: false
                }
              ]
        }
    )
})


module.exports = router;
//connect db
//create server file and import
