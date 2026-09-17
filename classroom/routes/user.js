const express=require("express");
const router = express.Router();

//index-users
router.get("/",(req,res)=>{
    res.send("Get for users");
})

//Show-users
router.get("/:id",(req,res)=>{
    res.send("Get for show users");
})

//users-users
router.post("/",(req,res)=>{
    res.send("users for users");
})

//Delete-users
router.delete("/:id",(req,res)=>{
    res.send("Delete for users Id");
})

module.exports=router;