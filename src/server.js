require("./db/connection");
//require connection immediately


const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");

const app = express(); 
const port = process.env.PORT || 5000;

app.use(express.json());
//app.use(cors());
app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

