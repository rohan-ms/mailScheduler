const Schedule=require("../models/emailModel")
//to add new schedule
exports.addSchedule=async (req,res)=>{
    try{
        req.body.scheduledDate=new Date(req.body.scheduledDate)
        console.log(req.body.scheduledDate)
       const result= await Schedule.create(req.body)
       res.status(200).json({
           "status":"success",
            "data":result
       })
    }catch(err){
        console.log(err)
    }
}
//  to delete schedule 
exports.deleteSchedule=async (req,res)=>{
    try{
       await Schedule.findByIdAndDelete(req.params.id)
       res.json({
           "status":"success",
           "message":"schedule deleted"
       })
    }catch(err){
        console.log(err)
    }
}
//to update schedules
exports.updateSchedule=async (req,res)=>{
    try{
       const result= await Schedule.findByIdAndUpdate(req.params.id,req.body)
       res.json({
           "status":"success",
            "data":result
       })
    }catch(err){
        console.log(err)
    }
}
//to get all sccchdules
exports.getSchedule=async (req,res)=>{
    try{
       const result= await Schedule.find()
       res.json({
           "status":"success",
            "data":result
       })
    }catch(err){
        console.log(err)
    }
}
//to get individual scheduler
exports.getOneSchedule=async (req,res)=>{
    try{
       const result= await Schedule.findById(req.params.id)
       res.json({
           "status":"success",
            "data":result
       })
    }catch(err){
        console.log(err)
    }
}

exports.getWaitingAndFailed=async (req,res)=>{
    try{
       const result= await Schedule.find({status:{$ne:"success"}})
       res.json({
           "status":"success",
            "data":result
       })
    }catch(err){
        console.log(err)
    }
}