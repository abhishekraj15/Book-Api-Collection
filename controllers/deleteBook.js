//Import models
const Book = require("../models/Book");

//Routes defineee

exports.deleteBook = async(req,res) => {
    const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndRemove(id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}