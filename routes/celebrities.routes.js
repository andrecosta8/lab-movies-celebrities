// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
// all your routes here

router.get("/celebrities/create", (req, res) => {
    res.render("celebrities/new-celebrity")
})

router.post("/celebrities/create", async (req, res) => {
    try {
        const userCelebrity = new Celebrity({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catch-phrase })
        await userCelebrity.save();
        res.redirect("/celebrities");
    }
    catch (err) {
        console.log(err + "SOME ERROR")
        res.redirect("/celebrities/new-celebrity");
    }
})

module.exports = router;