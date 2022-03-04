const Schedule=require("../models/emailModel")
const JobScheduler=require("./scheduler")

//creates independent timers for each schedule
function getFromTimeFrame(){
    tillTime=new Date((Date.now()+1000*60*1))
    console.log("getting schedules till",tillTime)
    Schedule.find({"scheduledDate":{$gte:new Date,$lte:tillTime}})
    .then((data)=>{
        if(data.length>=1){
            data.forEach((mail)=>{
                const job=new JobScheduler(mail)   
                job.startScheduler()  
            })
        }else{
            console.log("no schedules in this time frame")
        }
            
    }).catch((err)=>{

        console.log(err)
    })
}
//fetch all schedules for mentioned timeframe once server started
setImmediate(()=>{
    getFromTimeFrame()
})
//fetches all schedules each timeframe
function getSchedules(){
    console.log("entered scheduler")
    setInterval(
        ()=>{getFromTimeFrame()}, 1000*60*1)
}

module.exports=getSchedules