import authorModel from "../models/author.js";
class AuthorRpository {
  fetchAuthor(params) {
    return {"name": "Utdev", "email": "utdevnp@gmail.com"};
  }
}
const authorRepo = new AuthorRpository();
export default authorRepo;
