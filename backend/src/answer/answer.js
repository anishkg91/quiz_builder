const answerSchema= require('./answerModel')


const createAnswer=async(list)=>{
    try {
       await answerSchema.deleteMany({quizId:list[0].quizId})
       let data=await answerSchema.insertMany(list)
       return data
    } catch (error) {
        return error
    }
    
}


const getAnswer=async(quizId)=>{
    try {
       let data =await answerSchema.find({quizId});
       return data
    } catch (error) {
        return error
    }
    
}



module.exports={createAnswer,getAnswer,}