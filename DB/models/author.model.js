import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  books: {
    type: [Schema.Types.ObjectId],
    ref: "Book",
    required: true,
  },
});

export default mongoose.model("Author", authorSchema);
