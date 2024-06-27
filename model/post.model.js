let mongoose=require("mongoose")
let postsch=new mongoose.Schema({
    "pimg":String,
    "pic":String,
    "picname":String,
    "title":String,
    "descp":String,
    "likes":{
        type:Number,
        default:0
    },
    "dislikes":{
        type:Number,
        default:0
    },
    "cmt":[{type:String}]
},{timestamps:true})
let postmodel=mongoose.model("post",postsch)
module.exports=postmodel