<template>
  <div class="container">
    <h1>Livros</h1>
    <hr />

    <ul v-if="books">
      <li v-for="book of books" :key="book.id">
        <p>
          Editora:
          <strong>{{ book.bookPublisher.name }}</strong>
        </p>
        <p>Titulo: {{ book.title }}</p>
        <p>Páginas: {{ book.pages }}</p>
        <div>
          <button
            v-on:click.prevent="removeComment(book.id)"
            class="btn btn-primary"
            href="#"
          >Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BookService from "../services/BookService";

export default {
  name: "Books",
  data() {
    return {
      books: ""
    };
  },
  methods: {
    booksCreated() {
      BookService.getAll().then(book => {
        this.books = book.data;
      });
    },
    removeComment(id) {
      BookService.delete(id).catch(err => console.log(err));
    }
  },
  beforeMount() {
    this.booksCreated();
  },
  updated() {
    this.booksCreated();
  }
};
</script>

<style scoped>
li {
  margin-left: 5%;
  margin-top: 2%;
}
</style>