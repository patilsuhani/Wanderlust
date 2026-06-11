const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing = require("./models/listing.js")
const path = require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate")

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connected to DB");    //written in this type so that this line chan be printed
})
.catch((err)=>{
    console.log(err);
})

async function main() {
  await mongoose.connect(MONGO_URL);
}

//for ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("Hi I am Root");
})

// app.get("/testListing",async (req,res)=>{
//     let sampleListing=new Listing({
//         title:"My New Villa",
//         description:"By the beach",
//         price:1200,
//         location:"Calangute,Goa",
//         country:"India"
//     });
//     await sampleListing.save();//thsi is for the database to store
//     console.log("Sample was saved"); //this for terminal
//     res.send("Successful testing")//this for the browser
// });


//index route
app.get("/listings",async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index",{allListings});
    });

//this is also index route but for checking
// app.listen("/listings",(req,res)=>{
//     Listing.find({}).then(res=>{
//         console.log(res);
//     })
// })

//New Route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new")
})

//Show route 
app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show",{listing})
})

//Create Route
app.post("/listings",async(req,res)=>{
    // let (title,descriptio,image,price,country,location)=req.body;
    // let listing =req.body.listing;
    const newListing= new Listing(req.body.listing)
    await newListing.save();
    res.redirect("/listings");
   // console.log(listing);
})

//edit route
app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit",{listing});
})
//update route
app.put("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
})

//Delete route
app.delete("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

app.listen(8080,()=>{
    console.log("Port is listening to 8080");
})