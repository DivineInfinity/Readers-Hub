//imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const bookInfoRoutes = require('./routes/bookInfoRoutes');

const app = express();
//set up app
app.use('/public' , express.static('public'));
app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//set up mongoose
mongoose.connect("mongodb://readershub:readersHub1234@ds247670.mlab.com:47670/readershubdb");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

//APIs
app.use('/bookinfo', bookInfoRoutes );

app.listen(8081);
console.log("<- -> I am Listining on port 8081");


//VUEJs, Angular xyz front end framework server(8080)
//API call: /api/xyz //support axiosapi fetchapi(service providers)

//NodeJs runtime ----->expressjs framework server(8081)
//APIs independent of anything
//response on API call REST API