const express = require('express');
const router = express.Router();

//import controller
const {createBook} = require("../controllers/createBook");
const {getBook, getBookById} = require("../controllers/getBook");
const {updateBook} = require("../controllers/updateBook");
const {deleteBook} = require("../controllers/deleteBook");

//define API routes
router.post("/book", createBook);
router.get("/getBook", getBook);
router.get("/getBook/:id", getBookById);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);

module.exports = router;