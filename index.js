const express=require("express");
const app=express();
const path=require("path");

let port=3000;

app.set("Views",path.join(__dirname,"/Views"));

app.set("view engine", "ejs");
 app.listen(port,()=>{
    console.log(`listening on port ${port}`);
 });

 app.get("/",(req,res)=>{
    res.render("home.ejs");     //Ejs
 });

app.get("/rolldice",(req,res)=>{
    res.render("rolldice.ejs");
});
