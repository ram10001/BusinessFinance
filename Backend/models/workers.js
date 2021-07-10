var mongoose=require("mongoose");
var worker_attendence     =require("./worker_attendence");

var workerSchema=new mongoose.Schema({
    name:String,
    addess:String,
    amount:Number,
    worker_attendence:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"workerAttendence"
        }
    ]
});
 
module.exports = mongoose.model("worker",workerSchema);

