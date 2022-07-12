const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
  },
  date: {
    type: String,
  },
  done: {
    type: Boolean,
    required: true,
  },
  Timestamp: {},
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
