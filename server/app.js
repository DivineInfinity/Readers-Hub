const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const homeController = require('./controller/homeController');
const reviewController = require('./controller/reviewController');
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use('/', homeController)
app.use('/reviews',reviewController)

app.listen(8081)
console.log("<- -> i am running")


//connect db
//create server file and import
