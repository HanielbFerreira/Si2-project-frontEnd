
<template>
  <div class="container">
    <h1>Adicionar Editora</h1>
    <hr />
      <div class="submit-form">
        <p>
          <input
            v-model="fields.name"
            type="text"
            placeholder="Nome Editora"
            name="name"
            required
            class="form-control"
          />
        </p>
      </div>
      <button @click="submit" class="btn btn-primary">Criar</button>
  </div>
</template>

<script>
import BookPublisherService from "../services/BookPublisherService";
export default {
  name: "FormBookPublisher",
  data() {
    return {
      fields: {
        name: ""
      }
    };
  },
  methods: {
    submit() {
      let data = {
        name: this.fields.name
    }
    BookPublisherService.create(data)
    this.fields = {};
    }
  }
};
</script>