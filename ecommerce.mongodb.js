use ('ecommerce')




//--------------------------------CRUD OPERATION--------------------------------




//---------------------------CREATE and READ OPERATION---------------------------


//to see the datas in the collection
db.products.find()

//to insert multiple object at once 
db.products.insertMany([{name : 'iphone 11' , price :1100 , category:'smartphone' , active: 'true'},{name : 'iphone 12' , price :1200 , category:'smartphone' , active: 'true'}]);

//to update the data
db.products.updateOne({name : 'iphone 10'} , {$set : {active: 'false'}});

//to update multiple data
db.products.updateMany({active: 'true'} , {$set : {active: 'false'}});  

//to find any data 
db.products.find({active: false , category: 'smartphone'})


//to see only the desired datas
db.products.find({active: false , category: 'smartphone'} , {name: 1 , _id: 0})  // 1 means true and 0 means false
db.products.find({active: false , category:'smartphone'} , {active:0})  // to hide the active field


//to set limit to the datas how many datas you want to see
db.products.find({active:true}).limit(2)

//to skip the first data and see the rest
db.products.find({active:true}).skip(1)



db.products.findOne({name: 'iphone 11'})  //to find only one data





//---------------------------UPDATE OPERATION---------------------------

//with dollar $ sign we are defining that "set" is a operator 
db.products.updateOne({name : 'iphone 10'} , {$set : {active: 'false'}});
db.products.updateMany({active: 'true'} , {$set : {active: 'false'}});



//---------------------------DELETE OPERATION---------------------------
db.products.deleteOne({name: 'iphone 10'})
db.products.find() //to see the datas

db.products.deleteMany({active: 'false'})




