const express=require("express")
const scheduler=require("../utils/scheduler")
const emailController=require("../controllers/mailsController")
const router=express.Router()

//route to get waiting and failed schedules
router.route('/api/v1/mail/unsent')
.get(emailController.getWaitingAndFailed)

router.route('/api/v1/mail')
.get(emailController.getSchedule)
.post(emailController.addSchedule)


router.route('/api/v1/mail/:id')
.get(emailController.getOneSchedule)
.put(emailController.updateSchedule)
.delete(emailController.deleteSchedule)
router.route('*').all((req,res)=>{
    res.json({
        "status":"fail",
        "message":"No route found"
    })
})
module.exports=router