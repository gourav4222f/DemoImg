import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if (!DB_URI) {
    throw new Error("DB_URI is not Found")
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("connectiong to datadase successfully 🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛")
    } catch (error) {
        console.log('error connecting to database', error)
        process.exit(1);
    }
}

export default connectToDatabase;