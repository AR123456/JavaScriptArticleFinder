const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let headlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

let Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;
