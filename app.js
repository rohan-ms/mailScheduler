const express=require("express")
const router=require("./routes/mailRouter")
const mongoose=require("mongoose")
const getSchedules = require("./utils/scheduleGetter")
const app=express()

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/mailschedules").then(()=>{
    console.log('connected to database successfuly')
}).catch((err)=>{
    console.log(err)
})

getSchedules()
app.use('/',router)

app.listen(5000,()=>{
    console.log("server started on port 5000...")
})