const {createAnswer,getAnswer}= require('./answer')
const {error,success} = require('../../utility/responceModel')


const getAnswers=(req,res)=>{
   const {quizId}=req.params
   if(!quizId) 
   return error(res,400,'Quizid not found')
   getAnswer(quizId).then(resp=>{
    success(res,resp)
   }).catch(err=>error(res,404,err))
}

const createAnswers=(req,res)=>{
    const list=req.body
    createAnswer(list).then(resp=>{
     success(res,resp)
    }).catch(err=>error(res,401,err))
 }


 module.exports={getAnswers,createAnswers}