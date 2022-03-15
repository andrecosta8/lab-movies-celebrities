//  Add your code here
const mongoose = require("mongoose");

const celebritySchema = mongoose.Schema(
    {
        name: String,
        occupation: {
            type: String,
            default: "unknown",
        },
        catchPhrase: {
            type: String,
            required: true,
        }
    }
);

const Celebrity = mongoose.model("celebrity", celebritySchema);

module.exports = Celebrity;
