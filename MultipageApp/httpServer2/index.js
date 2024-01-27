const http=require("http")

const server=http.createServer(function(req,res){
    if(req.url=='/data')
    {
        res.writeHead(200,{
            'Content-Type':'application/json'
        })
        res.write(JSON.stringify({message:"HELOO THIS IS VIDYA"}))
        res.end()
    }
})
console.log("THUS IS SEREVER")
server.listen(5000)

