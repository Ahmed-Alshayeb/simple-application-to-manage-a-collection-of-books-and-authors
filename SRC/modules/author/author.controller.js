import Author from "../../../DB/models/author.model.js";

// @desc    create new author
// @route   POST /authors
// @access  Public
export const createAuthor = async (req, res, next) => {
  const { name, bio, birthDate, books } = req.body;
  const author = await Author.create({ name, bio, birthDate, books });
  res.status(201).json({ msg: "Success", author });
};

// @desc    get all Authors
// @route   GET /authors
// @access  Public
export const getAuthors = async (req, res, next) => {
  const limit = req.query.limit || 0;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;
  const authors = await Author.find()
    .limit(limit)
    .skip(skip)
    .populate("books", "-__v");
  res.status(200).json({ msg: "Success", count: authors.length, authors });
};

// @desc    get specific author
// @route   GET /authors
// @access  Public
export const getAuthor = async (req, res, next) => {
  const { id } = req.params;
  const author = await Author.findOne({ _id: id }).populate("books", "-__v");
  if (!author) {
    return res.status(404).json({ msg: "author not found" });
  }
  res.status(200).json({ msg: "Success", author });
};

// @desc    update author
// @route   PATCH /authors
// @access  Public
export const updateAuthor = async (req, res, next) => {
  const { id } = req.params;
  const { name, bio, birthDate, books } = req.body;
  const author = await Author.findByIdAndUpdate(
    id,
    { name, bio, birthDate, books },
    { new: true }
  );
  if (!author) {
    return res.status(404).json({ msg: "author not found" });
  }
  res.status(200).json({ msg: "Upadated Success", author });
};

// @desc    delete author
// @route   DELETE /authors
// @access  Public
export const deleteAuthor = async (req, res, next) => {
  const { id } = req.params;
  const author = await Author.findByIdAndDelete(id);
  if (!author) {
    return res.status(404).json({ msg: "author not found" });
  }
  res.status(200).json({ msg: "Deleted Success" });
};
