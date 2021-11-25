const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

//middleware
app.use(cors()) //allows us to fetch API cross platform (without CORS error)
app.use(express.json()) //this will allow us to parse the json

//mongoDB connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri)

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log(`MongoDB database connected successfully - uri = ${uri}`)
})

//use the file inside routes
const excercisesRouter = require('./routes/excercises')
const usersRouter = require('./routes/users')

app.use('/excercises', excercisesRouter)
app.use('/users', usersRouter)

//listening server
app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`)
})