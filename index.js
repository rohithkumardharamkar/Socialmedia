let express=require("express")
let cors=require("cors")
let mongoose=require("mongoose");
const userRoute = require("./route/user.rote");
const postRouter = require("./route/post.route");
var bodyParser = require('body-parser')

let app=express()
mongoose.connect("mongodb://127.0.0.1:27017/SocialMedia").then((res)=>
{
    console.log("database connected");
}).catch((err)=>
{
    console.log(err);
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/imgs",express.static("./imgs"))
app.use("/user",userRoute)
app.use("/post",postRouter)
app.listen(5000)