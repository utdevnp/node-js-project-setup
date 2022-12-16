import express from "express";

import { getAuthor } from "../../../../controllers/api/authorController.js";
const router = express.Router();


router.route("/").get(getAuthor);

export default router;
