<template>
    <div class="container">
        <h1>Livros</h1>
        <hr/>
        
        <!-- Formulário -->
        <FormToDo v-on:emit-comment="postBook"/>

        <!-- Listagem dos livros -->

        <ul v-if="books">
            <li v-for="book of books" :key="book.id">
                <p>Editora: <strong>{{ book.bookPublisher }}</strong></p>
                <p>Titulo: {{ book.title }}</p>
                <p>Páginas: {{ book.pages }}</p>
                <p>Comentários: <i> {{ book.comments }} </i></p>
                <div>
                    <button v-on:click.prevent="removeComment(book.id)" class="btn btn-primary" href="#">Excluir</button>
                </div>
            </li>
        </ul>

      </div>
</template>

<script>

import FormToDo from './FormToDo.vue';
import http from '../http-commons';

export default {
    name: "Books",
    components:{
        FormToDo
    },
    data(){
        return{
           books: '' 
        }
    },
    methods: {
        booksCreated() {
            http.get('/books').then(book => {
                this.books = book.data;
            })
        },
        postBook(comment){
            http.post('/books', comment).catch(err => console.log(err));
        },
        removeComment(id){
            http.delete('/books/' + id).catch(err => console.log(err));
        }
    },
    beforeMount(){
        this.booksCreated();
    },
    updated(){
        this.booksCreated();
    }
}
</script>

<style scoped>
    li {
        margin-left: 5%;
        margin-top: 2%;
    }
</style>