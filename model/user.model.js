let mongoose=require("mongoose")
let userSch=new mongoose.Schema({
    "_id":String,
    "mobile":Number,
    "name":String,
    "age":Number,
    "gender":String,
    "pwd":String,
    "img":String,
   
},{timestamps:true})
let usermodel=mongoose.model("User",userSch)
module.exports=usermodel