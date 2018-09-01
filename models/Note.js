const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let NoteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },

  date: {
    type: Date,
    default: Date.now
  },

  noteText: String
});
let Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
