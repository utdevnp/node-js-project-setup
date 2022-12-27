import express from "express";
import validateRequestBody from "../../../../helpers/validationHelper.js";
import { addAuthor, getAuthor } from "../../../../controllers/api/authorController.js";
import { authorSchema } from "../../../../helpers/validation/authorSchema.js";

const router = express.Router();

router.route("/:id?").get(getAuthor);
router.route("/").post(validateRequestBody(authorSchema), addAuthor);

export default router;
