import http from "../http-commons";

class BookServicePublisher {
    create(data) {
      return http.post("/bookPublisher", data);
    }

  }
  
  export default new BookServicePublisher();