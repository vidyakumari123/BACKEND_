//import express
const express=require("express")
const app=express()
//PORT hostname

const PORT=2000;
const hostName="127.0.0.8"

//get apis
// app.get('/', (req, res) => {
//     res.send('Hello I AM EXPRESS JS!')
//   })
//res.write and end is replaced by (res.send)

// app.get('/about', (req, res) => {
//     res.send('THIS IS ABOUT PAGE')
//   })
//app listening

app.listen(PORT,hostName,()=>{
    console.log(`server strated at http://${hostName}:${PORT}`)
})

//apis 
//get
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","about.html"),"utf-8")
})

//MIDDLEWARE
app.use(express.static(path.join(__dirname,"public")))