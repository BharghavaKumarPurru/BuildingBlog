const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        mongoose.set('strictQuery',false);
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database is connected successfully");
    }
    catch(error){
        console.log("Database error");
    }
}

module.exports=connectDB;