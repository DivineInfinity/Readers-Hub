const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const listService = require('../services/listService');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

var getLists = async function getLists(req,res,next){
    var trending = await listService.getTrendingList();
    var topRated = await listService.getTopRatedList();
    var newlyReleased = await listService.getNewlyReleasedList();
    var genres = await listService.getGenreList();
    console.log("GENRES = "+genres);
    var lists = [{name:"Trending",books:trending},{name:"New Releases",books:newlyReleased},{name:"Top Rated",books:topRated}];
    console.log("LISTS ="+lists);
    var genreList ={name:"Discover",genres:genres};

    var homeLists = {
        lists:lists,
        genreList:genreList
    }
    console.log("HOMELISTS = "+homeLists.lists[0].name);
    console.log("HOMELISTS = "+homeLists.genreList.genres);
    return res.status(200).json({
        message: "successfully fetched lists",
        homeLists : homeLists
    })
}


module.exports = {
    getLists : getLists
};
