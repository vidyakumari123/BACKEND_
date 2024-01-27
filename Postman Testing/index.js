const express=require("express")
const app=express()
const PORT =7000

const hostName="127.0.0.7"

app.use(express.json())//jsom middleware


// app.get("/get",(req,res)=>{
//     res.send("API WORKING")
// })

app.use(express.urlencoded({extended:true}));

app.get("/get",(req,res)=>{
    res.status(201).send({name:"VIDYA",age:"23"})
})

app.post("/post",(req,res)=>{
    console.log(req.body)
    res.status(201).send("DATA RECEIVED")
})

app.post("/home",(req,res)=>{
    console.log(req.body)
    res.status(201).send("MERN")
})


//params
//("/post/:id") we can use this also
app.post("/post:id",(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

// query

app.post("/query",(req,res)=>{
    console.log(req.params)
    res.send(req.query)
})
app.listen(PORT,hostName,()=>{
    console.log(`server running in http://${hostName}:${PORT}`)
})