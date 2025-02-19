import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => { res.send({ msg: "get all users" }) });
userRouter.get("/:Id", (req, res) => { res.send({ msg: "get  user" }) });
userRouter.post("/", (req, res) => { res.send({ msg: "create user" }) });
userRouter.put("/:Id", (req, res) => { res.send({ msg: "update user" }) });
userRouter.delete("/:Id", (req, res) => { res.send({ msg: "delete user" }) });


export default userRouter;