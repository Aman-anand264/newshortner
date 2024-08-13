const express=require('express')
const bodyParser=require('body-parser')
const connectDB = require('./db')
const urlRoutes=require('./routes/urlRoutes')
const path=require('path')
const cors = require('cors');

connectDB(); 
const PORT=3000
const app=express()
app.use(bodyParser.json())
app.use(express.json())
app.use(cors({
    origin: 'https://appshorty.netlify.app/' 
}));
app.use(express.static(__dirname+'/../public'))
app.use('/',urlRoutes)


app.use(express.urlencoded({extended:false}))

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})