import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";



export const singUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 400;
            throw error;
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUsers = await User.create([{ name, email, password: passwordHash }], { session });

        const token = jwt.sign({ UserId: newUsers[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        

        await session.commitTransaction();
        session.endSession();
        res.status(201).json({
            sussess: true,
            message: 'User created successfully',
            data: {
                token,
                user: newUsers[0]
            }
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const singIn = (req, res, next) => { }
export const singOut = (req, res, next) => { }