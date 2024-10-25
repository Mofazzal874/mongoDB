```bash
npm init -y
npm install
npm install express
npm i --save-dev nodemon
```

-> package.json
```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```
also add:

```bash
"type" : "module",
```



# Create a new file: index.js and create an express server

```bash

npm i mongoose

```


# Setting up the MondoDb database
    
    ```bash
    mongod
    #if you get an error, try running the following command
    mkdir data
    mongod --dbpath=data
    ```
        
**Note:** MongoDB will create a data directory if it doesn’t exist. You don't need to include the data directory in this repository. It is included in the .gitignore file.

- Then define the default routes in the index.js file 
- Then make the routes in the routeHandler folder


**ODM part:**
- Make all the required schemas in the schema folder for the design of the collection in the database.
- Then make model based on the schema.(Here , after designing the schema , both the schema and model object are in the todoHandler route file)
```
The naming convention for model is to use the first letter of the model name in capital letter.
```


**Note:**
- The schema is the design of the collection in the database.
- The model is the object that is used to interact with the database.
- The model is created based on the schema.
- The model is used to perform CRUD operations on the database.


**CRUD operations:**
- Create
- Read
- Update
- Delete






