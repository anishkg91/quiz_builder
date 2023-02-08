const express=require('express')
const router = express.Router()
const {createQuestions,getQuestions, updateQuestions, deleteQuestions} = require('./question.controller')
const {createQuestionsValidation} =require('../../middlewares/questionMiddleware')

router.get('/get/:quizId',getQuestions)

router.post('/create',createQuestionsValidation,createQuestions)

router.put('/update/:id',createQuestionsValidation,updateQuestions)

router.delete('/delete/:id',deleteQuestions)

module.exports=router