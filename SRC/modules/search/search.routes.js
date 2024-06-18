import { Router } from "express";
import { authorSearch, bookSearch } from "./search.controller.js";

const router = Router();

router.get("/books", bookSearch);
router.get("/authors", authorSearch);

export default router;
