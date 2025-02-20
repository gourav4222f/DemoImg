import express from "express";
const subscriptonRouter = express.Router();

subscriptonRouter.get("/", (req, res) => { res.send({ msg: "get all subscriptions" }) });
subscriptonRouter.get("/:Id", (req, res) => { res.send({ msg: "get by id subscriptions" }) });
subscriptonRouter.post("/", (req, res) => { res.send({ msg: "create subscriptions" }) });
subscriptonRouter.put("/:Id", (req, res) => { res.send({ msg: "update  subscriptions" }) });
subscriptonRouter.delete("/:Id", (req, res) => { res.send({ msg: "delete subscriptions" }) });
subscriptonRouter.get("/user/:Id", (req, res) => { res.send({ msg: "get all user subscription subscriptions" }) });
subscriptonRouter.get("/:Id/cancel", (req, res) => { res.send({ msg: "cancel subscription " }) });
subscriptonRouter.get("/upcoming-renewals", (req, res) => { res.send({ msg: "get all upcoming-renewals  subscriptions" }) });

export default subscriptonRouter;