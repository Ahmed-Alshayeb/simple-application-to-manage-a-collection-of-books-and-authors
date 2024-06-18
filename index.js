import express from "express";
import connectDB from "./DB/connection.js";
import bookRoutes from "./SRC/modules/book/book.routes.js";
import authorRoutes from "./SRC/modules/author/author.routes.js";
import searchRoutes from "./SRC/modules/search/search.routes.js";

const app = express();
const port = 3000;
connectDB();

app.use(express.json());

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/search", searchRoutes);

app.get("*", (req, res) => {
  res.json({ msg: "404 Not Found" });
});
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
