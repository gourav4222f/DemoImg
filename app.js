import express from "express";
const app = express();

// env variables
import { PORT } from "./config/env.js";

// db connection import
import connectToDatabase from "./Database/mongodb.js";

//routes
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptonRouter from "./routes/subscription.routes.js";
import errorMiddleware from "./middlewares/error.middlewares.js";
import cookieParser from "cookie-parser";


app.use(express.json);
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptonRouter);


app.use(errorMiddleware)
app.get("/", (req, res) => {
    res.send({ msg: "server is running " })
});

app.listen(PORT, async () => {
    console.log(`server is running on port ${PORT}`)
    await connectToDatabase();
})