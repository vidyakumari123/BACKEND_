const express = require("express");
const { collection } = require("./dbConnect")

// app creation
const app = express()

// PORT,hostName creation
const PORT = 2000;
const hostName = "127.0.0.2"

//middlewares
app.use(express.json())

app.get("/getstudents", async (req,res)=>{
    let students = await collection;
    let data = await students.find().toArray();
    res.send(data)
})

app.post("/poststudents",async(req,res)=>{
    let data = req.body
    let students = await collection
    let response=await students.insertOne(data);
    res.send(response)
})


app.listen(PORT,hostName,()=>{
    console.log(`server started in http://${hostName}:${PORT}`);
})