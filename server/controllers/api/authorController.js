import { author } from "../../services/authorService.js";
import { responseSuccess } from "../../helpers/responseHelper.js";

export const getAuthor = async(req, res, next) => {
  try {
    const result = await author.getAuthor(req.params);

    if (!result) {
      return responseSuccess(res, 400, "Author", "Unable to get author");
    }

    return responseSuccess(res, 200, "Author", "Author Listed Successfully", result);
  } catch (ex) {
    console.log(ex);
  }
}

export const addAuthor = async(req, res, next) => {
  try {
    const data = req.body;
    const result = await author.createAuthor(data);

    if (!result) {
      return responseSuccess(res, 400, "Author", "Unable to add author");
    }

    return responseSuccess(res, 200, "Author", "Author Added Successfully", author);
  } catch (ex) {
    console.log(ex);
  }
  
}