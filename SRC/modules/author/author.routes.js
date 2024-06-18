import { Router } from "express";
import * as AC from "./author.controller.js";

const router = Router();

router.route("/").post(AC.createAuthor).get(AC.getAuthors);
router
  .route("/:id")
  .get(AC.getAuthor)
  .patch(AC.updateAuthor)
  .delete(AC.deleteAuthor);

export default router;
