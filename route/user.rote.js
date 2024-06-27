let express=require("express")
const {reg, upload,  signin } = require("../controller/user.controller")
let userRoute=new express.Router()
userRoute.post("/reg",upload.single("img"),reg)
userRoute.post("/login",signin)
module.exports=userRoute