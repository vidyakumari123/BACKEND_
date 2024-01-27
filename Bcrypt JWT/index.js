// const bcrypt = require('bcrypt')

// const password = "JSPIDERS123"

// const salt = 10

// bcrypt.hash(password,salt,(err,hash)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(hash);
//     }
// })


//OR


// const hashedPass = bcrypt.hashSync(password, salt)
// console.log(hashedPass);


// -------------

// bcrypt.compare("JSPIDERS12", hashedPass, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     else 
//     {
//         console.log(result)

//     }  
// })

//OR

// const isMatched=bcrypt.compareSync("JSPIDERS123",hashedPass)
// console.log(isMatched);

const jwt = require("jsonwebtoken")
const secretKey="Rider"
const userData={name:"vidya",age:23,address:"delhi"}

const token=jwt.sign(userData,secretKey)
console.log(token)
const result=jwt.verify(token,secretKey)
console.log(result);
