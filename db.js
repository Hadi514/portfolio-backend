import mongoose from "mongoose";
import dotEnv from 'dotenv'
dotEnv.config()
const mongoURL = process.env.db_Url
const dbFunction = () => {
    try {
        mongoose.connect(mongoURL)
        console.log("Connected Succesfully With MongoDB!");
        
    } catch (error) {
        console.log(error);
        process.exit()
    }
}
export default dbFunction