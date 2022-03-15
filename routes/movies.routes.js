// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/movie.model");
const Celebrity = require("../models/Celebrity.model")
// all your routes here

router.get("/movies/create", async (req, res)=> {
    try{
    const celebritiesFromDB = await Celebrity.find();
    res.render("movies/new-movie", {celebritiesFromDB});
    }
    catch(err){
        console.error(err + "something wrong from movies creator ")
    }
})

router.post("/movies/create"), async (req, res) =>{
    try{
        const userMovie = new Movie({ title: req.body.title, genre: req.body.genre, plot: req.body.plot, cast: req.body.cast })  
        await userMovie.save();
        res.redirect("/movies")
    }catch(err){
        console.error(err + "error from creating movie")
    }
}

module.exports = router;