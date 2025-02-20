import express from "express";
import { singIn, singOut, singUp } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/sing-up", singUp);
authRouter.post("/sing-in", singIn);
authRouter.post("/sing-out", singOut);

export default authRouter;