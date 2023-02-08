const express=require('express')
const router = express.Router()
const {createAnswers,getAnswers} = require('./answer.controller')
const {createAnswerValidation} =require('../../middlewares/answerMiddleware')

router.get('/get/:quizId',getAnswers)

router.post('/create',createAnswers)

module.exports=router