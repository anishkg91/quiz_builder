const {createQuestion,getQuestion, deleteQuestion, updateQuestion,}= require('./question')
const {error,success} = require('../../utility/responceModel')


const getQuestions=(req,res)=>{
   const {quizId}=req.params
   if(!quizId) 
   return error(res,400,'Quizid not found')
   getQuestion(quizId).then(resp=>{
    success(res,resp)
   }).catch(err=>error(res,404,err))
}

const createQuestions=(req,res)=>{
    const {question,type,options,quizId}=req.body
    createQuestion({question,type,options,quizId}).then(resp=>{
     success(res,resp)
    }).catch(err=>error(res,401,err))
 }

 const updateQuestions=(req,res)=>{
   const {question,type,options,quizId}=req.body
   updateQuestion(id,{question,type,options,quizId}).then(resp=>{
    success(res,resp)
   }).catch(err=>error(res,401,err))
}

const deleteQuestions=(req,res)=>{
   const {id}=req.params
   console.log(id);
   deleteQuestion(id).then(resp=>{
    success(res,resp)
   }).catch(err=>error(res,401,err))
}


 module.exports={getQuestions,createQuestions,updateQuestions,deleteQuestions}