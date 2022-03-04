const mongoose=require("mongoose")

const emailSchema=mongoose.Schema({
    toMail:{
        type:String,
        required:[true,'to ID is required field']
    },
    scheduledDate:{
        type:[Date,"Please enter a valid date"],
        required:[true,'Date is required field']
    },
    body:{
        type:String,
        required:[true,'body is required field']

    },
    status:{
        type:String,
        default:"waiting"
    }
})

const Schedules=mongoose.model('Schedules',emailSchema)


module.exports=Schedules