import express, { json, urlencoded } from 'express'; 
import { connect } from 'mongoose'; 
import todoHandler from './routeHandler/todoHandler.js' ;
// Create an express application
const app = express() ; 
app.use(json()) ; 
app.use(urlencoded({extended: true})) ;


//database connection with mongoose
connect('mongodb://localhost/todos')    //this will name the database as todos in the mongodb. If the database is not present , it will create a new database with the name todos
.then(()=>{
    console.log('Connected to MongoDB') ; 
}).catch((err)=>{
    console.log('Error while connecting to MongoDB') ; 
    console.log(err) ; 
}) ;



//application routes
app.use('/todos' , todoHandler) ; 


//default error handler

function errorHandler(err , req, res , next){
    if(res.headersSent){
        return next(err) ; 
    }
    res.status(500).json({error: err}) ;
}

app.listen(3000 , () => {
    console.log('Server is running on port 3000') ; 
}) ;
