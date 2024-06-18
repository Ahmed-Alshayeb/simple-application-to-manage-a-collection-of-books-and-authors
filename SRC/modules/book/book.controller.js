import Book from "../../../DB/models/book.model.js";

// @desc    create new book
// @route   POST /books
// @access  Public
export const createBook = async (req, res, next) => {
  const { title, content, author, publishedDate } = req.body;
  const book = await Book.create({ title, content, author, publishedDate });
  res.status(201).json({ msg: "Success", book });
};

// @desc    get all books
// @route   GET /books
// @access  Public
export const getBooks = async (req, res, next) => {
  const limit = req.query.limit || 0;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;

  const books = await Book.find().limit(limit).skip(skip);
  res.status(200).json({ msg: "Success", count: books.length, books });
};

// @desc    get specific book
// @route   GET /books
// @access  Public
export const getBook = async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.findOne({ _id: id });
  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }
  res.status(200).json({ msg: "Success", book });
};

// @desc    update book
// @route   PATCH /books
// @access  Public
export const updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { title, content, author, publishedDate } = req.body;
  const book = await Book.findByIdAndUpdate(
    id,
    { title, content, author, publishedDate },
    { new: true }
  );
  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }
  res.status(200).json({ msg: "Upadated Success", book });
};

// @desc    delete book
// @route   DELETE /books
// @access  Public
export const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.findByIdAndDelete(id);
  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }
  res.status(200).json({ msg: "Deleted Success" });
};
