//import json-server library in index.js
const jsonServer= require('json-server')

//create server using json-server library
const rentalCarServer= jsonServer.create()

//create path to db.json file
const router= jsonServer.router('db.json')

//middlewares to convert js to json
const middleware= jsonServer.defaults()

//connect/use middleware and router in server
rentalCarServer.use(middleware)
rentalCarServer.use(router)

//setup port for the server
const port= 4000 || process.env.port

//to listen server for resolving request
rentalCarServer.listen(port,()=>{
    console.log(`rentalCarServer started at ${port} and ready to fetch request`);
})