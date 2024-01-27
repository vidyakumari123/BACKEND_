const http=require("http")
const PORT=8000
const hostName="127.0.0.1"
const app=http.createServer((req,res)=>{

    let {url,method }= req
    if(method=="GET"){
        if(url=="/"){
            res.write("<h1> THIS IS HOME PAGE</h1>")
            res.end()
        }
        else if(url=="/about"){
            res.write("<h1> ABOUT PAGE</h1>")
            res.end()
        }

        else if(url=="/blog"){
            res.write("<h1> <marquee> HELLOOO EVERYONE </marquee> </h1>")
            res.end()
        }
        else {
            res.write("<h1>404 ERROR  PAGE NOT FOUND </h1>")
            res.end()
        }
    }
 })
//  const server=http.createServer((req,res)=>{

//  })
//  console.log("server starting")
//  server.listen(8000)


//app.listen(8000)

app.listen(PORT,hostName,()=>{
    console.log(`server started at http://${hostName}:${PORT}`);
    console.log("server started at "+"http://"+hostName+ ":"+PORT);
})