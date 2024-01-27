const { isUtf8 } = require("buffer")
const { error } = require("console")
const FS= require("fs")


// reading files .................

// synchronous................
// let data= FS. readFileSync("./ex.txt")
// console.log(data.toString());

// let data1=FS.readFileSync("./ex.txt","utf-8")
// console.log(data1)


//asynchronous.................

// FS.readFile("./ex.txt","utf-8",(error,data)=>{
// if(error){
//     console.log("there is an error occured")
// }else{
//     console.log(data)
// }
// })

//CREATING OR WRIRING FILES....................

//SYNCHRPNOUS
// FS.writeFileSync("./demo.txt","this is created by vidya")
// FS.writeFileSync("./demo.html","<h1>HELLO WORLD</h1>","utf-8")


// THIS IS ASYNCHRONOUS METHOD
// FS.writeFileSync("./demo1.txt","Practice NODEJS ",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// UPDATING OR APPNED FILE..........................
// YSNCHRPNOUS
// FS.appendFileSync("./demo1.txt","parctice react js")

//AYsNCHRONOUS

// FS.appendFile("./demo4.html","<p>JSPIDER</P>",(error)=>{
//     if(error){
//         console.log(error)
//     }
// })


//DELETE...........................
// sunchronous

// FS.unlinkSync(".demo1.txt")


// asynchronous

// FS.unlink("./demo.txt",(error)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("file deleted succesfully")
//     } 
//     })


// RENAME FILES
//synchronous
// FS.renameSync("./demo.html","./index.html")// demo delelted and index html created

//synchronous

// FS.rename("./ex.txt","./msg.txt",(error)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("file name changed")
//     }
// })

// COPY FILES........................

//shallow copy and deep copy

//1 SHALLOW COPY
//2 DEEP COPY



//FOLDER (FOR CREATE AND DELETE FOLDER)( MKDIR AND RMDR)

// CREATE FOLDER 
// FS.mkdir("./VIRAT",(error)=>{
//     if(error){
//         console.log("error")

//     }else(
//         console.log("folder created")
//     )
// })


// DELETE FOLDER

// FS.rmdir("./VIRAT",(error)=>{
//         if(error){
//             console.log("error")
    
//         }else(
//             console.log("folder deleted")
//         )
//     })




