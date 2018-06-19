const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/homeRoutes');
const bookInfoRoutes = require('./routes/bookInfoRoutes');
const app = express();

app.use('/public' , express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://readershub:readersHub1234@ds247670.mlab.com:47670/readershubdb");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
    console.log("Connection Succeeded");
});


app.use('/', homeRoutes);
app.use('/bookinfo', bookInfoRoutes );

app.listen(8081)
console.log("<- -> i am running");


//connect db
//create server file and import
