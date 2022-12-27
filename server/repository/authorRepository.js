import authorModel from "../models/author.js";
class AuthorRpository {
  async getAll(params) {
    return await authorModel.find({});
  }

  async create(params) {
    return await authorModel.create(params);
  }

  async getById(id) {
    return await authorModel.find({_id: id});
  }
}

const authorRepo = new AuthorRpository();

export default authorRepo;
