const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
    {
        title: String,
        genre: String,
        plot: String,
        cast: [ { type: mongoose.Schema.Types.ObjectId, ref: "name" }]
    }
);

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
