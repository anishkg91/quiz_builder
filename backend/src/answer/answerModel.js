"use strict";

var _mongoose = require("mongoose");
var Schema = _mongoose.Schema;



const answer = new Schema({
  questionId: {
    type:Schema.Types.ObjectId,
    required: true,
    ref:'question'
  },
  question: {
    type:String,
    required: true,
  },
  quizId: {
    type:Schema.Types.ObjectId,
    required: true,
    ref:'quiz'
  },
  answer:{
    type:String,
    required: true,
  }

},{ timestamps: true });

const answerSchema=_mongoose.model('answer',answer)

module.exports=answerSchema