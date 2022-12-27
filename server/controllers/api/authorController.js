import { author } from "../../services/authorService.js";
import { responseSuccess } from "../../helpers/responseHelper.js";

export const getAuthor = (req, res, next) => {
  return responseSuccess(res, 200, "Author", "Author Added Successfully", author.getAuthor());
}

export const addAuthor = async (req, res, next) => {
  const data = req.body;
  await author.createAuthor(data);
  return responseSuccess(res, 200, "Author", "Author Added Successfully");
}