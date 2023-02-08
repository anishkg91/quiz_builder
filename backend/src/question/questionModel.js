"use strict";

var _mongoose = require("mongoose");
var Schema = _mongoose.Schema;



const question = new Schema({
  question: {
    type: String,
    required: true,
  },
  quizId: {
    type: Schema.ObjectId,
    required: true,
  },
  type:{
    type:String,
    required: true,
  },
  options:{
    type:Array,
    default:[]
  },
  answer:{
    type:String,
  }

},{ timestamps: true });

const questionSchema=_mongoose.model('question',question)

module.exports=questionSchema