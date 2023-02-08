const quizSchema= require('./quizModel')


const createQuiz=async(obj)=>{
    try {
       let quiz=new quizSchema(obj) 
       let data =await quiz.save()
       return data
    } catch (error) {
        return error
    }
    
}


const getQuiz=async(obj)=>{
    try { 
       let data =await quizSchema.find()
       return data
    } catch (error) {
        return error
    }
    
}

const updateQuiz=async(id,obj)=>{
    try { 
       let data =await quizSchema.findByIdAndUpdate(id,obj)
       return data
    } catch (error) {
        return error
    }
    
}

const deleteQuiz=async(id)=>{
    try { 
       let data =await quizSchema.findByIdAndDelete(id)
       return data
    } catch (error) {
        return error
    }
    
}

module.exports={createQuiz,getQuiz,updateQuiz,deleteQuiz}