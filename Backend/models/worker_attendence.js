var mongoose=require("mongoose");

var workerAttendenceSchema=new mongoose.Schema({
    date:Date,
    attendencestatus:String
});
 
module.exports = mongoose.model("workerAttendence",workerAttendenceSchema);

