const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exerciseRoutes = require('./routes/exercises')
const userRoutes = require('./routes/users')


require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true})
.then(()=> console.log("successfuly connected to DB"))
.catch((err)=>console.log(err))



app.use(cors())
app.use(express.json())

app.use('/exercises',exerciseRoutes)
app.use('/users',userRoutes)

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})