const {error}=require('../utility/responceModel')


const createQuestionsValidation=(req,res,next)=>{
    const types=['checkbox','paragraph']
    const {question,type,options,quizId}=req.body
    if(!question)
    return error(res,401,{message:'Question is required'})
    if(!quizId)
    return error(res,401,{message:'QuizId is required'})
    if(types.indexOf(type)==-1)
    return error(res,401,{message:'Please select correct type'})
    if(type=='checkbox' && !options)
    return error(res,401,{message:'option is requires'})
    if(type=='checkbox' && options.length<2)
    return error(res,401,{message:'minimum two option is requires'})
    next()
    
}

module.exports={createQuestionsValidation}