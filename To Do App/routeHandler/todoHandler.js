import { Router } from "express";
import Mongoose from "mongoose";
const router = Router() ; 



//making a model from the schema
import todoSchema from "../schemas/todoSchema.js";              //making a schema model 
const Todo  =new Mongoose.model("Todo" ,todoSchema ) ;           //making a model from the schema  
//Model naming convention is singular and first letter capital( in the model function("Todo"))

//Get all the todos
router.get('/' , async (req , res )=>{
    try{
       const data =  await Todo.find({status: 'active'}) ; 
        res.status(200).json({
            result: data , 
            message: "All todos were fetched successfully"}) ;
            console.log(data) ; 

    }catch(err){

        res.status(500).json({error: "A server error occured"}) ; 
    }
});

//get a single todo
router.get('/:id', async (req, res) => {
    try {
        const data = await Todo.findById(req.params.id);
        if (data) {
            res.status(200).json({
                result: data,
                message: "Todo was fetched successfully"
            });
        } else {
            res.status(404).json({
                error: "Todo not found"
            });
        }
    } catch (err) {
        console.error("Error fetching todo:", err); // Log the error for debugging
        res.status(500).json({ error: "A server error occurred" });
    }
});



//create a new todo
router.post('/' ,  async (req , res)=>{


    try{
        const newTodo = new Todo(req.body);  //we will get the data from the request body and create a new todo object and save it to the database
        await newTodo.save();
        res.status(200).json({message: "Todo was inserted successfully"}) ;
    }
    catch(err){
        res.status(500).json({error: "A server error occured"}) ; 
    }
});  


//create multiple todos at once 
router.post('/all' , async (req , res)=>{


    try{
        await Todo.insertMany(req.body) ; 
        res.status(200).json({message: "All todos were inserted successfully"}) ; 
    }
    catch(err){
        res.status(500).json({error: "A server error occured"}) ; 
    }
}); 


//update a todo

router.put('/:id' , async(req, res)=>{
   try{
    const result =  await Todo.findByIdAndUpdate(req.params.id , req.body, {new : true}); //will update and return the updated document that can be stored in a variable(e.g result)
                                                                                        //the new:true , meaning that the updated document will be returned,not the before update document
    res.status(200).json({message: "Todo was updated successfully"}) ;
    console.log(result) ;
   }
    catch(err){
         res.status(500).json({error: "A server error occured"}) ; 
    }

    

}); 

//delete a todo
router.delete('/:id' , async (req , res)=>{

    try{
        const data = await Todo.findByIdAndDelete(req.params.id) ;
        res.status(200).json({
            result: data ,
            message: "Todo was deleted successfully"}) ;
    }
    catch{
        res.status(500).json({error: "A server error occured"}) ; 
        
    }

}); 

export default router ;