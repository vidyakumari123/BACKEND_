const http=require("http")
const fs=require("fs")
const server =http.createServer((req,res)=>{
  console.log(req.url,req.method)
 if(req.method=="GET"){
    if(req.url=="/"){
        res.write("HELLO I AM BACKEND SEREVER")
        res.end()
    }
    if(req.url=="/about"){
        res.write("this is about US")
        res.end()
    }
    if(req.url=="/contact"){
        let data= fs.readFileSync("./ex.txt","utf-8")
        res.write(data)
        res.end()
    }
 }
 })
server.listen(4000)