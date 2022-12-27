 import authorRepo from "../repository/authorRepository.js";
 class AuthorService {
    
  getAuthor(params) {
    return authorRepo.getAll(params);
  }

  async createAuthor(data) {
    return await authorRepo.create(data);
  }
}

export const author = new AuthorService();


