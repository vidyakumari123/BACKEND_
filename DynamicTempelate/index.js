const express=require("express")
// const path=require("path")
const PORT=7000;
const{join}=require("path")
const hostName="127.0.0.4"

const app=express();

// app.use(express.static(path.join()))
// app.use(express.json())
app.set("view engine","ejs")
app.use(express.static(join(__dirname,"public")))
app.use(express.json())

app.get("/",(req,res)=>{
 res.render("Home",{name:"Vidya",address:"DELHI"})
})

app.get("/about",(req,res)=>{
    res.render("About",{data:["apple","kiwi","bannana","grapes"]})
})
 app.listen(PORT,hostName,()=>{
    console.log(`server strated at http://${hostName}:${PORT}`)
})