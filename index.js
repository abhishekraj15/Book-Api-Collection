const express = require('express');
const app = express();

//load config //env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json reqBody ke liye 
app.use(express.json());

//import rotes from book api
const bookRoutes = require("./routes/Book");

//mount the book api routes
app.use("/api/", bookRoutes);

//start kra server
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
})

//DB connect
const dbConnect = require("./config/database");
dbConnect();

//default rotes
app.get("/", (req,res) => {
    res.send(`<h1>Hello This is Home Page</h1>`)
})