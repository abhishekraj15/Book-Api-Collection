//Import models
const Book = require("../models/Book");

//define Routes

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
