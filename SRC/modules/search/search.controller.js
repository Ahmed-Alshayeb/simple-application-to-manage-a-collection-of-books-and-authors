import Author from "../../../DB/models/author.model.js";
import Book from "../../../DB/models/book.model.js";

// filter books by title or author
export const bookSearch = async (req, res, next) => {
  const { title, author } = req.query;
  const filter = {};

  if (title) {
    filter.title = new RegExp(title, "i");
  }
  if (author) {
    filter.author = new RegExp(author, "i");
  }

  const books = await Book.find(filter);
  res.status(200).json({ msg: "Success", count: books.length, books });
};

// filter authors by name or bio
export const authorSearch = async (req, res, next) => {
  const { name, bio } = req.query;
  const filter = {};

  if (name) {
    filter.name = new RegExp(name, "i");
  }
  if (bio) {
    filter.bio = new RegExp(bio, "i");
  }

  const authors = await Author.find(filter);
  res.status(200).json({ msg: "Success", count: authors.length, authors });
};
