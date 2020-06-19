
<template>
  <div class="container">
    <h1>Adicionar Livros</h1>
    <hr />
    <form>
      <div class="form-group">
        <p>
          <input
            v-model="fields.bookPublisherName"
            type="text"
            placeholder="Editora"
            class="form-control"
          />
        </p>
      </div>
      <div class="form-group">
        <p>
          <input v-model="fields.title" type="text" placeholder="Titulo" class="form-control" />
        </p>
      </div>
      <div class="form-group">
        <p>
          <input v-model="fields.pages" type="number" placeholder="Páginas" class="form-control" />
        </p>
      </div>
      <button v-on:click="submit" type="submit" class="btn btn-primary">Criar</button>
    </form>
  </div>
</template>

<script>
import BookService from "../services/BookService";

export default {
  name: "FormBook",
  data() {
    return {
      fields: {
        bookPublisherName: "",
        title: "",
        pages: ""
      }
    };
  },
  methods: {
    submit() {
      let data = {
        bookPublisherName: this.fields.bookPublisherName,
        title: this.fields.title,
        pages: this.fields.pages
      };
      BookService.create(data);
      this.fields = {};
    }
  },
  updated() {
    event.preventDefault();
  }
};
</script>