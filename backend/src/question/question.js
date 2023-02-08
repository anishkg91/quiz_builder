const questionSchema= require('./questionModel')


const createQuestion=async(obj)=>{
    try {
       let question=new questionSchema(obj) 
       let data =await question.save()
       return data
    } catch (error) {
        return error
    }
    
}


const getQuestion=async(quizId)=>{
    try { 
       let data =await questionSchema.find({quizId})
       return data
    } catch (error) {
        return error
    }
    
}

const updateQuestion=async(id,obj)=>{
    try { 
       let data =await questionSchema.findByIdAndUpdate(id,obj)
       return data
    } catch (error) {
        return error
    }
    
}

const deleteQuestion=async(id)=>{
    try { 
       let data =await questionSchema.findByIdAndDelete(id)
       return data
    } catch (error) {
        return error
    }
    
}

module.exports={createQuestion,getQuestion,updateQuestion,deleteQuestion}