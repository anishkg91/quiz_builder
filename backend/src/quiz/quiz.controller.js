const {createQuiz,deleteQuiz,getQuiz,updateQuiz}= require('./quiz')
const {error,success} = require('../../utility/responceModel')


const getQuizz=(req,res)=>{
   getQuiz().then(resp=>{
    success(res,resp)
   }).catch(err=>error(res,404,err))
}

const createQuizz=(req,res)=>{
    const {name}=req.body
    createQuiz({name}).then(resp=>{
     success(res,resp)
    }).catch(err=>error(res,401,err))
 }

 const updateQuizz=(req,res)=>{
   const {name}=req.body
   updateQuiz(id,{name}).then(resp=>{
    success(res,resp)
   }).catch(err=>error(res,401,err))
}

const deleteQuizz=(req,res)=>{
   const {id}=req.params
   console.log(id);
   deleteQuiz(id).then(resp=>{
    success(res,resp)
   }).catch(err=>error(res,401,err))
}


 module.exports={getQuizz,createQuizz,updateQuizz,deleteQuizz}