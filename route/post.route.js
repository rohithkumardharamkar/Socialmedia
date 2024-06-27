let express=require("express");
const { addpost,upload, getpost, liked, disliked } = require("../controller/pst.controller");
let postRouter=new express.Router();
postRouter.post("/addpost",upload.single("pimg"),addpost)
postRouter.get("/getpost",getpost)
postRouter.put("/like",liked)
postRouter.put("/dislike",disliked)
module.exports=postRouter