let postmodel=require("../model/post.model")
let {v4:uuid4}=require("uuid")
let multer=require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './imgs')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
const upload = multer({ storage: storage })

let addpost=async(req,res)=>
{
    try
    {
        await postmodel({...req.body,"pimg":req.file.filename}).save();
        res.send("post uploaded")
    }
    catch(err)
    {
      console.log(err);
      res.json({"msg":"Internal server error 404"})
    }

}
let getpost=async(req,res)=>
{
  try
  {
    let data=await postmodel.find();
    res.send(data)
  }
  catch(err)
  {
    console.log(err);
  }
}

let liked=async(req,res)=>
  {
    try
    {
      await postmodel.findByIdAndUpdate({"_id":req.body._id},{"$inc":{"likes":1}})

    }
    catch(err)
    {
      console.log(err);

    }
  }
  let disliked=async(req,res)=>
    {
      try
      {
        await postmodel.findByIdAndUpdate({"_id":req.body._id},{"$inc":{"dislikes":1}})

      }
      catch(err)
      {
        console.log(err);

      }
    }
module.exports={addpost,upload,getpost,liked,disliked}
