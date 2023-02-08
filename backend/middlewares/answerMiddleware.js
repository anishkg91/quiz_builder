const {error}=require('../utility/responceModel')


const createAnswerValidation=(req,res,next)=>{
    const {questionId,quizId,answer}=req.body
    console.log(questionId,quizId,answer,);
    if(!questionId)
    return error(res,401,{message:'QuestionId is required'})
    if(!quizId)
    return error(res,401,{message:'QuizId is required'})
    next()
    
}

module.exports={createAnswerValidation}