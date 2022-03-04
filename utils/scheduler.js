const sendEmail=require("./nodemailer")
const Schedules=require("../models/emailModel")
class Schedule{
    constructor(data){
        this.data=data
    }
    //creates new objects for each schedule
    startScheduler(){
        setTimeout(()=>{
            sendEmail(this.data).then(async (result)=>{
                console.log("sent mail to "+this.data.toMail)
                await Schedules.findByIdAndUpdate(this.data._id,{status:"success"})

            }).catch(async (err)=>{
                console.log(err)
                await Schedules.findByIdAndUpdate(this.data._id,{status:"failed"})
            }) 
    },(new Date(this.data.scheduledDate).getTime() - Date.now()))

}
}

module.exports=Schedule