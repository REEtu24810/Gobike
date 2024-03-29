import mongoose from "mongoose";
import { DB_URI } from "../const.js";
const connectDB=async()=>{
    try{
        console.log("DB_URI",DB_URI);
        const db=await mongoose.connect(DB_URI);
        if(db){
            console.log("the database is a succesfull connected");
        }
    }catch(error){
            console.log("Error the database is a not successful connected",error.message);

        }
    };

export default connectDB;
// import mongoose from "mongoose";
// import {DB_URI} from "../const.js"
// const connectDB = async () => {
//     try {
//         console.log(DB_URI);
//         const conn = await mongoose.connect(DB_URI);
//         console.log(`Connected to DB - ${conn.connection.host}`);
//     } catch (error) {
//         console.log(`Connection failed - ${error.message}`)
//     }
// };

// export default connectDB;