const express= require('express');
const { json }= require('body-parser');
const cors= require('cors');
const massive= require('massive');
const connectionString= require('../config.js').massive;
const controller= require('./controller');

const app= express();
const port= 3001;

//Massive
massive(connectionString).then(dbInstance=> app.set('db', dbInstance)).catch(console.log);


//Middlewares
app.use(json());
app.use(cors());


//Endpoints
app.get('/api/books', controller.getBooks);
app.get('/api/details/:id', controller.getDetails);


app.listen(port, ()=> {
  console.log(`Server is listening on port: ${port}`);
});
