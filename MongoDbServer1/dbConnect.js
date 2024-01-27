const mongodb = require("mongodb")
const url = "mongodb://127.0.0.1:27017";
const client = new mongodb.MongoClient(url)

async function main(){
    await client.connect();
    const db = client.db("A1mongoDB")
    console.log("Database Connected...!");
    return db.collection("students")
}


let collection = main()

module.exports={collection}