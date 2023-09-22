//Import models
const Book = require("../models/Book");

//Routes defineeeee

exports.createBook = async (req, res) => {
  const { title, author} = req.body;
  try {
    const newBook = new Book({ title, author});
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
