import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user-name is required"],
        trim: true,
        minLenght: [3, "name must be atleast 3 characters"],
        maxLenght: [20, "name must be atmost 20 characters"]
    },
    email: {
        type: String,
        required: [true, "user-name is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLenght: [6, "password must be atleast 6 characters"],
        select: false
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema)


export default User;

// {name: "user", email: "user@gmail", password: "password"}