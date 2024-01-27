//connecting window to server to database

const mongodb=require("mongodb")
const url="mongodb://127.0.0.1:27017"

const client=new mongodb.MongoClient(url)
const dbName="A1mongoDB" 

const insertData= async ()=>{
    const result= await client.connect()
    const db=result.db(dbName)
  
  const collection= db.collection("students")
  collection.insertOne({name:"vidya",place:"Bihar"})
}
module.exports={insertData}