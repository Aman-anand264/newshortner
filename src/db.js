const mongoose=require("mongoose")
const dotenv=require('dotenv')
dotenv.config();

const connectDB=async()=>{
    try {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongodb.....");    
      }   catch(error)  {
            console.log(error);
            console.log("Could not connect to the database!");
        }
  }
  
  module.exports=connectDB
