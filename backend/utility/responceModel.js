const success=(req,data)=>{
    req.status(200).json({
        success:true,
        data
    })
}

const error=(req,status,data)=>{
    req.status(status||400).json({
        success:false,
        data
    })
}

module.exports={success,error}