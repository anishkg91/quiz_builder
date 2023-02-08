"use strict";

var _mongoose = require("mongoose");
var Schema = _mongoose.Schema;


const quiz = new Schema({
  name: {
    type: String,
    required: true,
  }

},{ timestamps: true });

const questionSchema=_mongoose.model('quiz',quiz)

module.exports=questionSchema