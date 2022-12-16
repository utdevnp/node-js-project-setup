 import authorRepo from "../repository/authorRepository.js";
 class AuthorService {
    
  getAuthor(params) {
    return authorRepo.fetchAuthor(params);
  }
}

export const author = new AuthorService();


