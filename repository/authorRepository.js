import authorModel from "../models/author.js";
class AuthorRpository {
  getAll(params) {
    return {"name": "Utdev", "email": "utdevnp@gmail.com"};
  }

  async create(params) {
    return await authorModel.create(params);
  }

}
const authorRepo = new AuthorRpository();
export default authorRepo;
