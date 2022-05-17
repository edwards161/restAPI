const { Router } = require("express");
const { addUser, listUsers } = require("./userController");
const { hashPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", listUsers);

module.exports = userRouter;