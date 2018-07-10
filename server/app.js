const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/homeRoutes');
const bookRoutes = require('./routes/bookRoutes');
const bookInfoRoutes = require('./routes/bookInfoRoutes');
const bookDetailsRoutes = require('./routes/bookDetailsRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();

app.use('/public', express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://readershub:readersHub1234@ds247670.mlab.com:47670/readershubdb");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
    console.log("Connection Succeeded");
});

//routes
app.use('/', homeRoutes);
app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/book-details', bookDetailsRoutes);


//only to be used for Google API
app.use('/book-info', bookInfoRoutes);
app.use('/reviews', reviewRoutes);

var port = 8081;
app.listen(port)
console.log(`<- -> i am running on port ${port}`);
