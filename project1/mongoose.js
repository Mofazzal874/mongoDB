const mongoose = require("mongoose");
const User = require("./schemas/User");

//connection url
uri = "mongodb://localhost:27017/testdb";



//establishing connection
mongoose.connect(uri)
.then(() => {
    console.log("Connected to MongoDB") ; 
}).catch((err)=>{
    console.log("Error while connecting to MongoDB") ; 
    console.log(err) ; 
}) ; 



//handling connection events
const db = mongoose.connection ;
db.on('error' , (err)=>{
    console.error("MongoDB connection error: " , err) ;
}) ; 

db.once('open' , ()=>{
    console.log("Connected to MongoDB") ; 

}) ; 
db.on('disconnected' , ()=>{
    console.log("MongoDB disconnected") ; 
}); 



//Gracefully closing the connection when the application exists
process.on('SIGINT' , ()=>{    //when interrupt signal(like ctrl+c in node js is found terminate the connection)
    mongoose.connection.close(()=>{
        console.log("MongoDB connection closed due to application termination") ; 
        process.exit(0) ;
    }); 
}) ;







run() ; 
async function run(){
    try{
        const user = new User({
            name: "John Doe",
            email: "jhon@gmail.com",
            age: 25,
            password: "password",
            role: "admin"
        
        }) ;
        await user.save(); 
        console.log("User saved") ;
    
    }catch(err){
        console.log(err) ; 
    }

}

