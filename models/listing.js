const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingScheme=new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image: {
  filename: {
    type: String,
    default: "listingimage"
  },
  url: {
    type: String,
    default: "https://images.unsplash.com/photo-1773332598413-a6d5279d1ae8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
},
    // image:{
    //    type:String,
    //     default:"https://unsplash.com/photos/sunlight-streams-through-a-window-onto-two-bar-stools-EGU0c37idAA",   //when image only not exist
    //     // set:(v)=>v===""?"https://unsplash.com/photos/sunlight-streams-through-a-window-onto-two-bar-stools-EGU0c37idAA":v   //ternary opreator and the link is default  //when you place is empty
    // },
    price:Number,
    location:String,
    country:String,
})

const Listing = mongoose.model("Listing",listingScheme);
module.exports=Listing;