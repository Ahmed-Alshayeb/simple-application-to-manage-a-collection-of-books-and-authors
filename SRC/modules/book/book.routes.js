import { Router } from "express";
import * as BC from "./book.controller.js";

const router = Router();

router.route("/").post(BC.createBook).get(BC.getBooks);
router.route("/:id").get(BC.getBook).patch(BC.updateBook).delete(BC.deleteBook);

export default router;
