 import authorRepo from "../repository/authorRepository.js";
 class AuthorService {
    
  async getAuthor(params = {}) {
    if (params.id) {
      return await authorRepo.getById(params.id);
    }
    
    return await authorRepo.getAll(params);
  }

  async createAuthor(data) {
    return await authorRepo.create(data);
  }
}

export const author = new AuthorService();


