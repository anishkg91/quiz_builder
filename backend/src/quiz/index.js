const express=require('express')
const router = express.Router()
const {createQuizz,deleteQuizz,getQuizz,updateQuizz} = require('./quiz.controller')

router.get('/get',getQuizz)

router.post('/create',createQuizz)

router.put('/update/:id',updateQuizz)

router.delete('/delete/:id',deleteQuizz)

module.exports=router