const { Router } = require("express");
const { addUser, listUsers, login } = require("./userController");
const { hashPass, unHashPass, tokenCheck } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/login", unHashPass, login);
userRouter.get("/listUsers", listUsers);
userRouter.get("/user", tokenCheck, login);
userRouter.get("/login", tokenCheck, login)




module.exports = userRouter;

/* Request in insomnia (or other rest api client) - local host /endpoint 
{
    "title" : "movie name",
    "actors" : ["actor1" , "actor2"]
} */