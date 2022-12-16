import { author } from "../../services/authorService.js";
export const getAuthor = (req, res, next) => {
  console.log(author.getAuthor());
  res.send(author.getAuthor());
}