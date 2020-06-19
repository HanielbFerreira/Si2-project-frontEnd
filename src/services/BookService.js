import http from "../http-commons";

class BookService {
    getAll() {
      return http.get("/books");
    }
  
    create(data) {
      return http.post("/books", data);
    }
  
    delete(id) {
      return http.delete(`/books/${id}`);
    }
  }
  
  export default new BookService();