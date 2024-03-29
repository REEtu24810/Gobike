import  express  from "express";
import dotenv from "dotenv";
import connectDB from "./database/index.js";
const app=express();

dotenv.config( {
    path: "./.env"
}
);
app.get("/",(req,res)=>{
    res.send("hello sir")
})
app.use(api/user,user.route)


app.listen(process.env.PORT||3000,()=>{
    console.log("server is running at port" + process.env.PORT);
}); 
connectDB();