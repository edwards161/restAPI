require("./db/connection");
//require connection first because we need it to run immediately

//npm libraries
const express = require("express");
//cross origin resourse sharing - used so front end requests aren't blocked
const cors = require("cors");

const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");

const app = express(); 
const port = process.env.PORT || 5000;

//use cors and express.json before router
app.use(express.json());
app.use(cors());
app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

