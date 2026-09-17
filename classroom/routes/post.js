const express=require("express");
const router = express.Router();


//index-posts
router.get("/",(req,res)=>{
    res.send("Get for posts");
})

//Show-posts
router.get("/:id",(req,res)=>{
    res.send("Get for show posts");
})

//posts-posts
router.post("/",(req,res)=>{
    res.send("posts for posts");
})

//Delete-posts
router.delete("/:id",(req,res)=>{
    res.send("Delete for posts Id");
})

module.exports=router;
